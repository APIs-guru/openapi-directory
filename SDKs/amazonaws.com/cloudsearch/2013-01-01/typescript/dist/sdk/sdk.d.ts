import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://cloudsearch.{region}.amazonaws.com", "https://cloudsearch.{region}.amazonaws.com", "http://cloudsearch.{region}.amazonaws.com.cn", "https://cloudsearch.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getBuildSuggesters - Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getBuildSuggesters(req: operations.GetBuildSuggestersRequest, config?: AxiosRequestConfig): Promise<operations.GetBuildSuggestersResponse>;
    /**
     * getCreateDomain - Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getCreateDomain(req: operations.GetCreateDomainRequest, config?: AxiosRequestConfig): Promise<operations.GetCreateDomainResponse>;
    /**
     * getDefineExpression - Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getDefineExpression(req: operations.GetDefineExpressionRequest, config?: AxiosRequestConfig): Promise<operations.GetDefineExpressionResponse>;
    /**
     * getDeleteAnalysisScheme - Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getDeleteAnalysisScheme(req: operations.GetDeleteAnalysisSchemeRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteAnalysisSchemeResponse>;
    /**
     * getDeleteDomain - Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getDeleteDomain(req: operations.GetDeleteDomainRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDomainResponse>;
    /**
     * getDeleteExpression - Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getDeleteExpression(req: operations.GetDeleteExpressionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteExpressionResponse>;
    /**
     * getDeleteIndexField - Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getDeleteIndexField(req: operations.GetDeleteIndexFieldRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteIndexFieldResponse>;
    /**
     * getDeleteSuggester - Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getDeleteSuggester(req: operations.GetDeleteSuggesterRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteSuggesterResponse>;
    /**
     * getDescribeAnalysisSchemes - Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getDescribeAnalysisSchemes(req: operations.GetDescribeAnalysisSchemesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeAnalysisSchemesResponse>;
    /**
     * getDescribeAvailabilityOptions - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getDescribeAvailabilityOptions(req: operations.GetDescribeAvailabilityOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeAvailabilityOptionsResponse>;
    /**
     * getDescribeDomainEndpointOptions - Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getDescribeDomainEndpointOptions(req: operations.GetDescribeDomainEndpointOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeDomainEndpointOptionsResponse>;
    /**
     * getDescribeDomains - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getDescribeDomains(req: operations.GetDescribeDomainsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeDomainsResponse>;
    /**
     * getDescribeExpressions - Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getDescribeExpressions(req: operations.GetDescribeExpressionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeExpressionsResponse>;
    /**
     * getDescribeIndexFields - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getDescribeIndexFields(req: operations.GetDescribeIndexFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeIndexFieldsResponse>;
    /**
     * getDescribeScalingParameters - Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getDescribeScalingParameters(req: operations.GetDescribeScalingParametersRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeScalingParametersResponse>;
    /**
     * getDescribeServiceAccessPolicies - Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getDescribeServiceAccessPolicies(req: operations.GetDescribeServiceAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeServiceAccessPoliciesResponse>;
    /**
     * getDescribeSuggesters - Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getDescribeSuggesters(req: operations.GetDescribeSuggestersRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeSuggestersResponse>;
    /**
     * getIndexDocuments - Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.
    **/
    getIndexDocuments(req: operations.GetIndexDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetIndexDocumentsResponse>;
    /**
     * getListDomainNames - Lists all search domains owned by an account.
    **/
    getListDomainNames(req: operations.GetListDomainNamesRequest, config?: AxiosRequestConfig): Promise<operations.GetListDomainNamesResponse>;
    /**
     * getUpdateAvailabilityOptions - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getUpdateAvailabilityOptions(req: operations.GetUpdateAvailabilityOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdateAvailabilityOptionsResponse>;
    /**
     * getUpdateDomainEndpointOptions - Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getUpdateDomainEndpointOptions(req: operations.GetUpdateDomainEndpointOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdateDomainEndpointOptionsResponse>;
    /**
     * getUpdateScalingParameters - Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getUpdateScalingParameters(req: operations.GetUpdateScalingParametersRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdateScalingParametersResponse>;
    /**
     * getUpdateServiceAccessPolicies - Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.
    **/
    getUpdateServiceAccessPolicies(req: operations.GetUpdateServiceAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdateServiceAccessPoliciesResponse>;
    /**
     * postBuildSuggesters - Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postBuildSuggesters(req: operations.PostBuildSuggestersRequest, config?: AxiosRequestConfig): Promise<operations.PostBuildSuggestersResponse>;
    /**
     * postCreateDomain - Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postCreateDomain(req: operations.PostCreateDomainRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDomainResponse>;
    /**
     * postDefineAnalysisScheme - Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDefineAnalysisScheme(req: operations.PostDefineAnalysisSchemeRequest, config?: AxiosRequestConfig): Promise<operations.PostDefineAnalysisSchemeResponse>;
    /**
     * postDefineExpression - Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDefineExpression(req: operations.PostDefineExpressionRequest, config?: AxiosRequestConfig): Promise<operations.PostDefineExpressionResponse>;
    /**
     * postDefineIndexField - Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDefineIndexField(req: operations.PostDefineIndexFieldRequest, config?: AxiosRequestConfig): Promise<operations.PostDefineIndexFieldResponse>;
    /**
     * postDefineSuggester - Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDefineSuggester(req: operations.PostDefineSuggesterRequest, config?: AxiosRequestConfig): Promise<operations.PostDefineSuggesterResponse>;
    /**
     * postDeleteAnalysisScheme - Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDeleteAnalysisScheme(req: operations.PostDeleteAnalysisSchemeRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteAnalysisSchemeResponse>;
    /**
     * postDeleteDomain - Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDeleteDomain(req: operations.PostDeleteDomainRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDomainResponse>;
    /**
     * postDeleteExpression - Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDeleteExpression(req: operations.PostDeleteExpressionRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteExpressionResponse>;
    /**
     * postDeleteIndexField - Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDeleteIndexField(req: operations.PostDeleteIndexFieldRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteIndexFieldResponse>;
    /**
     * postDeleteSuggester - Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDeleteSuggester(req: operations.PostDeleteSuggesterRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteSuggesterResponse>;
    /**
     * postDescribeAnalysisSchemes - Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDescribeAnalysisSchemes(req: operations.PostDescribeAnalysisSchemesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeAnalysisSchemesResponse>;
    /**
     * postDescribeAvailabilityOptions - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDescribeAvailabilityOptions(req: operations.PostDescribeAvailabilityOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeAvailabilityOptionsResponse>;
    /**
     * postDescribeDomainEndpointOptions - Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDescribeDomainEndpointOptions(req: operations.PostDescribeDomainEndpointOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDomainEndpointOptionsResponse>;
    /**
     * postDescribeDomains - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDescribeDomains(req: operations.PostDescribeDomainsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDomainsResponse>;
    /**
     * postDescribeExpressions - Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDescribeExpressions(req: operations.PostDescribeExpressionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeExpressionsResponse>;
    /**
     * postDescribeIndexFields - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDescribeIndexFields(req: operations.PostDescribeIndexFieldsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeIndexFieldsResponse>;
    /**
     * postDescribeScalingParameters - Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDescribeScalingParameters(req: operations.PostDescribeScalingParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeScalingParametersResponse>;
    /**
     * postDescribeServiceAccessPolicies - Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDescribeServiceAccessPolicies(req: operations.PostDescribeServiceAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeServiceAccessPoliciesResponse>;
    /**
     * postDescribeSuggesters - Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDescribeSuggesters(req: operations.PostDescribeSuggestersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeSuggestersResponse>;
    /**
     * postIndexDocuments - Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.
    **/
    postIndexDocuments(req: operations.PostIndexDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.PostIndexDocumentsResponse>;
    /**
     * postListDomainNames - Lists all search domains owned by an account.
    **/
    postListDomainNames(req: operations.PostListDomainNamesRequest, config?: AxiosRequestConfig): Promise<operations.PostListDomainNamesResponse>;
    /**
     * postUpdateAvailabilityOptions - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postUpdateAvailabilityOptions(req: operations.PostUpdateAvailabilityOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateAvailabilityOptionsResponse>;
    /**
     * postUpdateDomainEndpointOptions - Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postUpdateDomainEndpointOptions(req: operations.PostUpdateDomainEndpointOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateDomainEndpointOptionsResponse>;
    /**
     * postUpdateScalingParameters - Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postUpdateScalingParameters(req: operations.PostUpdateScalingParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateScalingParametersResponse>;
    /**
     * postUpdateServiceAccessPolicies - Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.
    **/
    postUpdateServiceAccessPolicies(req: operations.PostUpdateServiceAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateServiceAccessPoliciesResponse>;
}
export {};
