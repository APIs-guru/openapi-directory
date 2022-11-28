
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/cloudsearch/ - Amazon Web Services documentation"""
import requests
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://cloudsearch.{region}.amazonaws.com",
	"https://cloudsearch.{region}.amazonaws.com",
	"http://cloudsearch.{region}.amazonaws.com.cn",
	"https://cloudsearch.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/cloudsearch/ - Amazon Web Services documentation"""

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
        
    
    
    
    def get_create_domain(self, request: operations.GetCreateDomainRequest) -> operations.GetCreateDomainResponse:
        r"""Creates a new search domain.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateDomain"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCreateDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_define_rank_expression(self, request: operations.GetDefineRankExpressionRequest) -> operations.GetDefineRankExpressionResponse:
        r"""Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DefineRankExpression"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDefineRankExpressionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_domain(self, request: operations.GetDeleteDomainRequest) -> operations.GetDeleteDomainResponse:
        r"""Permanently deletes a search domain and all of its data.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDomain"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_index_field(self, request: operations.GetDeleteIndexFieldRequest) -> operations.GetDeleteIndexFieldResponse:
        r"""Removes an <code>IndexField</code> from the search domain.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteIndexField"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteIndexFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_delete_rank_expression(self, request: operations.GetDeleteRankExpressionRequest) -> operations.GetDeleteRankExpressionResponse:
        r"""Removes a <code>RankExpression</code> from the search domain.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteRankExpression"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeleteRankExpressionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_availability_options(self, request: operations.GetDescribeAvailabilityOptionsRequest) -> operations.GetDescribeAvailabilityOptionsResponse:
        r"""Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html\" target=\"_blank\">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeAvailabilityOptions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeAvailabilityOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_default_search_field(self, request: operations.GetDescribeDefaultSearchFieldRequest) -> operations.GetDescribeDefaultSearchFieldResponse:
        r"""Gets the default search field configured for the search domain.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDefaultSearchField"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeDefaultSearchFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_domains(self, request: operations.GetDescribeDomainsRequest) -> operations.GetDescribeDomainsResponse:
        r"""Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDomains"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeDomainsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_index_fields(self, request: operations.GetDescribeIndexFieldsRequest) -> operations.GetDescribeIndexFieldsResponse:
        r"""Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeIndexFields"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeIndexFieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_rank_expressions(self, request: operations.GetDescribeRankExpressionsRequest) -> operations.GetDescribeRankExpressionsResponse:
        r"""Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeRankExpressions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeRankExpressionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_service_access_policies(self, request: operations.GetDescribeServiceAccessPoliciesRequest) -> operations.GetDescribeServiceAccessPoliciesResponse:
        r"""Gets information about the resource-based policies that control access to the domain's document and search services.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeServiceAccessPolicies"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeServiceAccessPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_stemming_options(self, request: operations.GetDescribeStemmingOptionsRequest) -> operations.GetDescribeStemmingOptionsResponse:
        r"""Gets the stemming dictionary configured for the search domain.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeStemmingOptions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeStemmingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_stopword_options(self, request: operations.GetDescribeStopwordOptionsRequest) -> operations.GetDescribeStopwordOptionsResponse:
        r"""Gets the stopwords configured for the search domain.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeStopwordOptions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeStopwordOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_describe_synonym_options(self, request: operations.GetDescribeSynonymOptionsRequest) -> operations.GetDescribeSynonymOptionsResponse:
        r"""Gets the synonym dictionary configured for the search domain.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeSynonymOptions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescribeSynonymOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_index_documents(self, request: operations.GetIndexDocumentsRequest) -> operations.GetIndexDocumentsResponse:
        r"""Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=IndexDocuments"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIndexDocumentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_update_availability_options(self, request: operations.GetUpdateAvailabilityOptionsRequest) -> operations.GetUpdateAvailabilityOptionsResponse:
        r"""Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html\" target=\"_blank\">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateAvailabilityOptions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpdateAvailabilityOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_update_default_search_field(self, request: operations.GetUpdateDefaultSearchFieldRequest) -> operations.GetUpdateDefaultSearchFieldResponse:
        r"""Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateDefaultSearchField"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpdateDefaultSearchFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_update_service_access_policies(self, request: operations.GetUpdateServiceAccessPoliciesRequest) -> operations.GetUpdateServiceAccessPoliciesResponse:
        r"""Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateServiceAccessPolicies"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpdateServiceAccessPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_update_stemming_options(self, request: operations.GetUpdateStemmingOptionsRequest) -> operations.GetUpdateStemmingOptionsResponse:
        r"""Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateStemmingOptions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpdateStemmingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_update_stopword_options(self, request: operations.GetUpdateStopwordOptionsRequest) -> operations.GetUpdateStopwordOptionsResponse:
        r"""Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateStopwordOptions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpdateStopwordOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_update_synonym_options(self, request: operations.GetUpdateSynonymOptionsRequest) -> operations.GetUpdateSynonymOptionsResponse:
        r"""Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateSynonymOptions"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpdateSynonymOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_create_domain(self, request: operations.PostCreateDomainRequest) -> operations.PostCreateDomainResponse:
        r"""Creates a new search domain.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=CreateDomain"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_define_index_field(self, request: operations.PostDefineIndexFieldRequest) -> operations.PostDefineIndexFieldResponse:
        r"""Configures an <code>IndexField</code> for the search domain. Used to create new fields and modify existing ones. If the field exists, the new configuration replaces the old one. You can configure a maximum of 200 index fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DefineIndexField"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDefineIndexFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_define_rank_expression(self, request: operations.PostDefineRankExpressionRequest) -> operations.PostDefineRankExpressionResponse:
        r"""Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DefineRankExpression"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDefineRankExpressionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_domain(self, request: operations.PostDeleteDomainRequest) -> operations.PostDeleteDomainResponse:
        r"""Permanently deletes a search domain and all of its data.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteDomain"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_index_field(self, request: operations.PostDeleteIndexFieldRequest) -> operations.PostDeleteIndexFieldResponse:
        r"""Removes an <code>IndexField</code> from the search domain.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteIndexField"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteIndexFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_delete_rank_expression(self, request: operations.PostDeleteRankExpressionRequest) -> operations.PostDeleteRankExpressionResponse:
        r"""Removes a <code>RankExpression</code> from the search domain.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DeleteRankExpression"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDeleteRankExpressionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_availability_options(self, request: operations.PostDescribeAvailabilityOptionsRequest) -> operations.PostDescribeAvailabilityOptionsResponse:
        r"""Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html\" target=\"_blank\">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeAvailabilityOptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeAvailabilityOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_default_search_field(self, request: operations.PostDescribeDefaultSearchFieldRequest) -> operations.PostDescribeDefaultSearchFieldResponse:
        r"""Gets the default search field configured for the search domain.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDefaultSearchField"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDefaultSearchFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_domains(self, request: operations.PostDescribeDomainsRequest) -> operations.PostDescribeDomainsResponse:
        r"""Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeDomains"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeDomainsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_index_fields(self, request: operations.PostDescribeIndexFieldsRequest) -> operations.PostDescribeIndexFieldsResponse:
        r"""Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeIndexFields"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeIndexFieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_rank_expressions(self, request: operations.PostDescribeRankExpressionsRequest) -> operations.PostDescribeRankExpressionsResponse:
        r"""Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeRankExpressions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeRankExpressionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_service_access_policies(self, request: operations.PostDescribeServiceAccessPoliciesRequest) -> operations.PostDescribeServiceAccessPoliciesResponse:
        r"""Gets information about the resource-based policies that control access to the domain's document and search services.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeServiceAccessPolicies"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeServiceAccessPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_stemming_options(self, request: operations.PostDescribeStemmingOptionsRequest) -> operations.PostDescribeStemmingOptionsResponse:
        r"""Gets the stemming dictionary configured for the search domain.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeStemmingOptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeStemmingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_stopword_options(self, request: operations.PostDescribeStopwordOptionsRequest) -> operations.PostDescribeStopwordOptionsResponse:
        r"""Gets the stopwords configured for the search domain.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeStopwordOptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeStopwordOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_describe_synonym_options(self, request: operations.PostDescribeSynonymOptionsRequest) -> operations.PostDescribeSynonymOptionsResponse:
        r"""Gets the synonym dictionary configured for the search domain.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=DescribeSynonymOptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDescribeSynonymOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_index_documents(self, request: operations.PostIndexDocumentsRequest) -> operations.PostIndexDocumentsResponse:
        r"""Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=IndexDocuments"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostIndexDocumentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_update_availability_options(self, request: operations.PostUpdateAvailabilityOptionsRequest) -> operations.PostUpdateAvailabilityOptionsResponse:
        r"""Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href=\"http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html\" target=\"_blank\">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateAvailabilityOptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateAvailabilityOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_update_default_search_field(self, request: operations.PostUpdateDefaultSearchFieldRequest) -> operations.PostUpdateDefaultSearchFieldResponse:
        r"""Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateDefaultSearchField"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateDefaultSearchFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_update_service_access_policies(self, request: operations.PostUpdateServiceAccessPoliciesRequest) -> operations.PostUpdateServiceAccessPoliciesResponse:
        r"""Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateServiceAccessPolicies"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateServiceAccessPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_update_stemming_options(self, request: operations.PostUpdateStemmingOptionsRequest) -> operations.PostUpdateStemmingOptionsResponse:
        r"""Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateStemmingOptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateStemmingOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_update_stopword_options(self, request: operations.PostUpdateStopwordOptionsRequest) -> operations.PostUpdateStopwordOptionsResponse:
        r"""Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateStopwordOptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateStopwordOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_update_synonym_options(self, request: operations.PostUpdateSynonymOptionsRequest) -> operations.PostUpdateSynonymOptionsResponse:
        r"""Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#Action=UpdateSynonymOptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUpdateSynonymOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    