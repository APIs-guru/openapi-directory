

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://adobe.com/",
	"http://adobe.local",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def delete_agent(self, request: operations.DeleteAgentRequest) -> operations.DeleteAgentResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/etc/replication/agents.{runmode}/{name}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_node(self, request: operations.DeleteNodeRequest) -> operations.DeleteNodeResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{path}/{name}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_aem_health_check(self, request: operations.GetAemHealthCheckRequest) -> operations.GetAemHealthCheckResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/health"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAemHealthCheckResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.get_aem_health_check_default_application_json_string = r.content

        return res

    
    def get_aem_product_info(self) -> operations.GetAemProductInfoResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/console/status-productinfo.json"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAemProductInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_aem_product_info_default_application_json_strings = out

        return res

    
    def get_agent(self, request: operations.GetAgentRequest) -> operations.GetAgentResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/etc/replication/agents.{runmode}/{name}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_agents(self, request: operations.GetAgentsRequest) -> operations.GetAgentsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/etc/replication/agents.{runmode}.-1.json", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.get_agents_default_application_json_string = r.content

        return res

    
    def get_authorizable_keystore(self, request: operations.GetAuthorizableKeystoreRequest) -> operations.GetAuthorizableKeystoreResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{intermediatePath}/{authorizableId}.ks.json", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuthorizableKeystoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "text/plain"):
                res.get_authorizable_keystore_default_text_plain_string = r.content

        return res

    
    def get_config_mgr(self) -> operations.GetConfigMgrResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/console/configMgr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigMgrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.get_config_mgr_200_text_xml_string = r.content
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_crxde_status(self) -> operations.GetCrxdeStatusResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crx/server/crx.default/jcr:root/.1.json"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCrxdeStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "plain/text"):
                res.get_crxde_status_200_plain_text_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "plain/text"):
                res.get_crxde_status_404_plain_text_string = r.content

        return res

    
    def get_install_status(self) -> operations.GetInstallStatusResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crx/packmgr/installstatus.jsp"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstallStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InstallStatus])
                res.install_status = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                res.get_install_status_default_application_json_string = r.content

        return res

    
    def get_keystore(self, request: operations.GetKeystoreRequest) -> operations.GetKeystoreResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{intermediatePath}/{authorizableId}/keystore/store.p12", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetKeystoreResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.get_keystore_default_application_octet_stream_binary_string = r.content

        return res

    
    def get_login_page(self) -> operations.GetLoginPageResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/libs/granite/core/content/login.html"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoginPageResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/html"):
                res.get_login_page_default_text_html_string = r.content

        return res

    
    def get_node(self, request: operations.GetNodeRequest) -> operations.GetNodeResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{path}/{name}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_package(self, request: operations.GetPackageRequest) -> operations.GetPackageResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/etc/packages/{group}/{name}-{version}.zip", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPackageResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.get_package_default_application_octet_stream_binary_string = r.content

        return res

    
    def get_package_filter(self, request: operations.GetPackageFilterRequest) -> operations.GetPackageFilterResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/etc/packages/{group}/{name}-{version}.zip/jcr:content/vlt:definition/filter.tidy.2.json", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPackageFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.get_package_filter_default_application_json_string = r.content

        return res

    
    def get_package_manager_servlet(self) -> operations.GetPackageManagerServletResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crx/packmgr/service/script.html"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPackageManagerServletResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 404:
            if utils.match_content_type(content_type, "text/html"):
                res.get_package_manager_servlet_404_text_html_string = r.content
        elif r.status_code == 405:
            if utils.match_content_type(content_type, "text/html"):
                res.get_package_manager_servlet_405_text_html_string = r.content

        return res

    
    def get_query(self, request: operations.GetQueryRequest) -> operations.GetQueryResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bin/querybuilder.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.get_query_default_application_json_string = r.content

        return res

    
    def get_truststore(self) -> operations.GetTruststoreResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/etc/truststore/truststore.p12"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruststoreResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.get_truststore_default_application_octet_stream_binary_string = r.content

        return res

    
    def get_truststore_info(self) -> operations.GetTruststoreInfoResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/libs/granite/security/truststore.json"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruststoreInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TruststoreInfo])
                res.truststore_info = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                res.get_truststore_info_default_application_json_string = r.content

        return res

    
    def post_agent(self, request: operations.PostAgentRequest) -> operations.PostAgentResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/etc/replication/agents.{runmode}/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_authorizable_keystore(self, request: operations.PostAuthorizableKeystoreRequest) -> operations.PostAuthorizableKeystoreResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{intermediatePath}/{authorizableId}.ks.html", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthorizableKeystoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "text/plain"):
                res.post_authorizable_keystore_default_text_plain_string = r.content

        return res

    
    def post_authorizables(self, request: operations.PostAuthorizablesRequest) -> operations.PostAuthorizablesResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/libs/granite/security/post/authorizables"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthorizablesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/html"):
                res.post_authorizables_default_text_html_string = r.content

        return res

    
    def post_bundle(self, request: operations.PostBundleRequest) -> operations.PostBundleResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/system/console/bundles/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_adobe_granite_saml_authentication_handler(self, request: operations.PostConfigAdobeGraniteSamlAuthenticationHandlerRequest) -> operations.PostConfigAdobeGraniteSamlAuthenticationHandlerResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigAdobeGraniteSamlAuthenticationHandlerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_aem_health_check_servlet(self, request: operations.PostConfigAemHealthCheckServletRequest) -> operations.PostConfigAemHealthCheckServletResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/system/config/com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigAemHealthCheckServletResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_aem_password_reset(self, request: operations.PostConfigAemPasswordResetRequest) -> operations.PostConfigAemPasswordResetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/system/config/com.shinesolutions.aem.passwordreset.Activator"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigAemPasswordResetResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_apache_felix_jetty_based_http_service(self, request: operations.PostConfigApacheFelixJettyBasedHTTPServiceRequest) -> operations.PostConfigApacheFelixJettyBasedHTTPServiceResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/system/config/org.apache.felix.http"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigApacheFelixJettyBasedHTTPServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_apache_http_components_proxy_configuration(self, request: operations.PostConfigApacheHTTPComponentsProxyConfigurationRequest) -> operations.PostConfigApacheHTTPComponentsProxyConfigurationResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/system/config/org.apache.http.proxyconfigurator.config"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigApacheHTTPComponentsProxyConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_apache_sling_dav_ex_servlet(self, request: operations.PostConfigApacheSlingDavExServletRequest) -> operations.PostConfigApacheSlingDavExServletResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/system/config/org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigApacheSlingDavExServletResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_apache_sling_get_servlet(self, request: operations.PostConfigApacheSlingGetServletRequest) -> operations.PostConfigApacheSlingGetServletResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/system/config/org.apache.sling.servlets.get.DefaultGetServlet"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigApacheSlingGetServletResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_apache_sling_referrer_filter(self, request: operations.PostConfigApacheSlingReferrerFilterRequest) -> operations.PostConfigApacheSlingReferrerFilterResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/system/config/org.apache.sling.security.impl.ReferrerFilter"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigApacheSlingReferrerFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_property(self, request: operations.PostConfigPropertyRequest) -> operations.PostConfigPropertyResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/system/config/{configNodeName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigPropertyResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_cq_actions(self, request: operations.PostCqActionsRequest) -> operations.PostCqActionsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/.cqactions.html"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCqActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_jmx_repository(self, request: operations.PostJmxRepositoryRequest) -> operations.PostJmxRepositoryResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/system/console/jmx/com.adobe.granite:type=Repository/op/{action}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostJmxRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_node(self, request: operations.PostNodeRequest) -> operations.PostNodeResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{path}/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_node_rw(self, request: operations.PostNodeRwRequest) -> operations.PostNodeRwResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{path}/{name}.rw.html", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNodeRwResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_package_service(self, request: operations.PostPackageServiceRequest) -> operations.PostPackageServiceResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crx/packmgr/service.jsp"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPackageServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/xml"):
                res.post_package_service_default_text_xml_string = r.content

        return res

    
    def post_package_service_json(self, request: operations.PostPackageServiceJSONRequest) -> operations.PostPackageServiceJSONResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/crx/packmgr/service/.json/{path}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPackageServiceJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.post_package_service_json_default_application_json_string = r.content

        return res

    
    def post_package_update(self, request: operations.PostPackageUpdateRequest) -> operations.PostPackageUpdateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crx/packmgr/update.jsp"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPackageUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.post_package_update_default_application_json_string = r.content

        return res

    
    def post_path(self, request: operations.PostPathRequest) -> operations.PostPathResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{path}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPathResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_query(self, request: operations.PostQueryRequest) -> operations.PostQueryResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bin/querybuilder.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.post_query_default_application_json_string = r.content

        return res

    
    def post_saml_configuration(self, request: operations.PostSamlConfigurationRequest) -> operations.PostSamlConfigurationResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/console/configMgr/com.adobe.granite.auth.saml.SamlAuthenticationHandler"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSamlConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 302:
            if utils.match_content_type(content_type, "text/plain"):
                res.post_saml_configuration_302_text_plain_string = r.content
        else:
            if utils.match_content_type(content_type, "text/plain"):
                res.post_saml_configuration_default_text_plain_string = r.content

        return res

    
    def post_set_password(self, request: operations.PostSetPasswordRequest) -> operations.PostSetPasswordResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crx/explorer/ui/setpassword.jsp"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/plain"):
                res.post_set_password_default_text_plain_string = r.content

        return res

    
    def post_tree_activation(self, request: operations.PostTreeActivationRequest) -> operations.PostTreeActivationResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/etc/replication/treeactivation.html"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTreeActivationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_truststore(self, request: operations.PostTruststoreRequest) -> operations.PostTruststoreResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/libs/granite/security/post/truststore"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruststoreResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/plain"):
                res.post_truststore_default_text_plain_string = r.content

        return res

    
    def post_truststore_pkcs12(self, request: operations.PostTruststorePkcs12Request) -> operations.PostTruststorePkcs12Response:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/etc/truststore"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruststorePkcs12Response(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/plain"):
                res.post_truststore_pkcs12_default_text_plain_string = r.content

        return res

    
    def ssl_setup(self, request: operations.SslSetupRequest) -> operations.SslSetupResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/libs/granite/security/post/sslSetup.html"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SslSetupResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/plain"):
                res.ssl_setup_default_text_plain_string = r.content

        return res

    