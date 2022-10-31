import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://adobe.com/",
	"http://adobe.local",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)

    
    def delete_agent(self, request: operations.DeleteAgentRequest) -> operations.DeleteAgentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/etc/replication/agents.{runmode}/{name}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_node(self, request: operations.DeleteNodeRequest) -> operations.DeleteNodeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{path}/{name}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_aem_health_check(self, request: operations.GetAemHealthCheckRequest) -> operations.GetAemHealthCheckResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/system/health"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAemHealthCheckResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.get_aem_health_check_default_application_json_string = r.content

        return res

    
    def get_aem_product_info(self) -> operations.GetAemProductInfoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/system/console/status-productinfo.json"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAemProductInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.get_aem_product_info_default_application_json_strings = out

        return res

    
    def get_agent(self, request: operations.GetAgentRequest) -> operations.GetAgentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/etc/replication/agents.{runmode}/{name}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_agents(self, request: operations.GetAgentsRequest) -> operations.GetAgentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/etc/replication/agents.{runmode}.-1.json", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.get_agents_default_application_json_string = r.content

        return res

    
    def get_authorizable_keystore(self, request: operations.GetAuthorizableKeystoreRequest) -> operations.GetAuthorizableKeystoreResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{intermediatePath}/{authorizableId}.ks.json", request.path_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/system/console/configMgr"

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/crx/server/crx.default/jcr:root/.1.json"

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/crx/packmgr/installstatus.jsp"

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{intermediatePath}/{authorizableId}/keystore/store.p12", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetKeystoreResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.get_keystore_default_application_octet_stream_binary_string = r.content

        return res

    
    def get_login_page(self) -> operations.GetLoginPageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/libs/granite/core/content/login.html"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoginPageResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/html"):
                res.get_login_page_default_text_html_string = r.content

        return res

    
    def get_node(self, request: operations.GetNodeRequest) -> operations.GetNodeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{path}/{name}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_package(self, request: operations.GetPackageRequest) -> operations.GetPackageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/etc/packages/{group}/{name}-{version}.zip", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPackageResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.get_package_default_application_octet_stream_binary_string = r.content

        return res

    
    def get_package_filter(self, request: operations.GetPackageFilterRequest) -> operations.GetPackageFilterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/etc/packages/{group}/{name}-{version}.zip/jcr:content/vlt:definition/filter.tidy.2.json", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPackageFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.get_package_filter_default_application_json_string = r.content

        return res

    
    def get_package_manager_servlet(self) -> operations.GetPackageManagerServletResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/crx/packmgr/service/script.html"

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/bin/querybuilder.json"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.get_query_default_application_json_string = r.content

        return res

    
    def get_truststore(self) -> operations.GetTruststoreResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/etc/truststore/truststore.p12"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruststoreResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.get_truststore_default_application_octet_stream_binary_string = r.content

        return res

    
    def get_truststore_info(self) -> operations.GetTruststoreInfoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/libs/granite/security/truststore.json"

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/etc/replication/agents.{runmode}/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_authorizable_keystore(self, request: operations.PostAuthorizableKeystoreRequest) -> operations.PostAuthorizableKeystoreResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{intermediatePath}/{authorizableId}.ks.html", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/libs/granite/security/post/authorizables"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthorizablesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/html"):
                res.post_authorizables_default_text_html_string = r.content

        return res

    
    def post_bundle(self, request: operations.PostBundleRequest) -> operations.PostBundleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/system/console/bundles/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_adobe_granite_saml_authentication_handler(self, request: operations.PostConfigAdobeGraniteSamlAuthenticationHandlerRequest) -> operations.PostConfigAdobeGraniteSamlAuthenticationHandlerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigAdobeGraniteSamlAuthenticationHandlerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_aem_health_check_servlet(self, request: operations.PostConfigAemHealthCheckServletRequest) -> operations.PostConfigAemHealthCheckServletResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/apps/system/config/com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigAemHealthCheckServletResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_aem_password_reset(self, request: operations.PostConfigAemPasswordResetRequest) -> operations.PostConfigAemPasswordResetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/apps/system/config/com.shinesolutions.aem.passwordreset.Activator"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigAemPasswordResetResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_apache_felix_jetty_based_http_service(self, request: operations.PostConfigApacheFelixJettyBasedHTTPServiceRequest) -> operations.PostConfigApacheFelixJettyBasedHTTPServiceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/apps/system/config/org.apache.felix.http"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigApacheFelixJettyBasedHTTPServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_apache_http_components_proxy_configuration(self, request: operations.PostConfigApacheHTTPComponentsProxyConfigurationRequest) -> operations.PostConfigApacheHTTPComponentsProxyConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/apps/system/config/org.apache.http.proxyconfigurator.config"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigApacheHTTPComponentsProxyConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_apache_sling_dav_ex_servlet(self, request: operations.PostConfigApacheSlingDavExServletRequest) -> operations.PostConfigApacheSlingDavExServletResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/apps/system/config/org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigApacheSlingDavExServletResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_apache_sling_get_servlet(self, request: operations.PostConfigApacheSlingGetServletRequest) -> operations.PostConfigApacheSlingGetServletResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/apps/system/config/org.apache.sling.servlets.get.DefaultGetServlet"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigApacheSlingGetServletResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_apache_sling_referrer_filter(self, request: operations.PostConfigApacheSlingReferrerFilterRequest) -> operations.PostConfigApacheSlingReferrerFilterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/apps/system/config/org.apache.sling.security.impl.ReferrerFilter"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigApacheSlingReferrerFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_property(self, request: operations.PostConfigPropertyRequest) -> operations.PostConfigPropertyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/apps/system/config/{configNodeName}", request.path_params)

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigPropertyResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_cq_actions(self, request: operations.PostCqActionsRequest) -> operations.PostCqActionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/.cqactions.html"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCqActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_jmx_repository(self, request: operations.PostJmxRepositoryRequest) -> operations.PostJmxRepositoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/system/console/jmx/com.adobe.granite:type=Repository/op/{action}", request.path_params)

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostJmxRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_node(self, request: operations.PostNodeRequest) -> operations.PostNodeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{path}/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_node_rw(self, request: operations.PostNodeRwRequest) -> operations.PostNodeRwResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{path}/{name}.rw.html", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNodeRwResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_package_service(self, request: operations.PostPackageServiceRequest) -> operations.PostPackageServiceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/crx/packmgr/service.jsp"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPackageServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/xml"):
                res.post_package_service_default_text_xml_string = r.content

        return res

    
    def post_package_service_json(self, request: operations.PostPackageServiceJSONRequest) -> operations.PostPackageServiceJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/crx/packmgr/service/.json/{path}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPackageServiceJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.post_package_service_json_default_application_json_string = r.content

        return res

    
    def post_package_update(self, request: operations.PostPackageUpdateRequest) -> operations.PostPackageUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/crx/packmgr/update.jsp"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPackageUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.post_package_update_default_application_json_string = r.content

        return res

    
    def post_path(self, request: operations.PostPathRequest) -> operations.PostPathResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{path}/", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPathResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_query(self, request: operations.PostQueryRequest) -> operations.PostQueryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/bin/querybuilder.json"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.post_query_default_application_json_string = r.content

        return res

    
    def post_saml_configuration(self, request: operations.PostSamlConfigurationRequest) -> operations.PostSamlConfigurationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/system/console/configMgr/com.adobe.granite.auth.saml.SamlAuthenticationHandler"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/crx/explorer/ui/setpassword.jsp"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/plain"):
                res.post_set_password_default_text_plain_string = r.content

        return res

    
    def post_tree_activation(self, request: operations.PostTreeActivationRequest) -> operations.PostTreeActivationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/etc/replication/treeactivation.html"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTreeActivationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_truststore(self, request: operations.PostTruststoreRequest) -> operations.PostTruststoreResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/libs/granite/security/post/truststore"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruststoreResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/plain"):
                res.post_truststore_default_text_plain_string = r.content

        return res

    
    def post_truststore_pkcs12(self, request: operations.PostTruststorePkcs12Request) -> operations.PostTruststorePkcs12Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/etc/truststore"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruststorePkcs12Response(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/plain"):
                res.post_truststore_pkcs12_default_text_plain_string = r.content

        return res

    
    def ssl_setup(self, request: operations.SslSetupRequest) -> operations.SslSetupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/libs/granite/security/post/sslSetup.html"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SslSetupResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/plain"):
                res.ssl_setup_default_text_plain_string = r.content

        return res

    