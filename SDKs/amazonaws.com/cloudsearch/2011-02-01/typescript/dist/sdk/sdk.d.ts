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
     * getCreateDomain - Creates a new search domain.
    **/
    getCreateDomain(req: operations.GetCreateDomainRequest, config?: AxiosRequestConfig): Promise<operations.GetCreateDomainResponse>;
    /**
     * getDefineRankExpression - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
    **/
    getDefineRankExpression(req: operations.GetDefineRankExpressionRequest, config?: AxiosRequestConfig): Promise<operations.GetDefineRankExpressionResponse>;
    /**
     * getDeleteDomain - Permanently deletes a search domain and all of its data.
    **/
    getDeleteDomain(req: operations.GetDeleteDomainRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDomainResponse>;
    /**
     * getDeleteIndexField - Removes an <code>IndexField</code> from the search domain.
    **/
    getDeleteIndexField(req: operations.GetDeleteIndexFieldRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteIndexFieldResponse>;
    /**
     * getDeleteRankExpression - Removes a <code>RankExpression</code> from the search domain.
    **/
    getDeleteRankExpression(req: operations.GetDeleteRankExpressionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteRankExpressionResponse>;
    /**
     * getDescribeAvailabilityOptions - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getDescribeAvailabilityOptions(req: operations.GetDescribeAvailabilityOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeAvailabilityOptionsResponse>;
    /**
     * getDescribeDefaultSearchField - Gets the default search field configured for the search domain.
    **/
    getDescribeDefaultSearchField(req: operations.GetDescribeDefaultSearchFieldRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeDefaultSearchFieldResponse>;
    /**
     * getDescribeDomains - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
    **/
    getDescribeDomains(req: operations.GetDescribeDomainsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeDomainsResponse>;
    /**
     * getDescribeIndexFields - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
    **/
    getDescribeIndexFields(req: operations.GetDescribeIndexFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeIndexFieldsResponse>;
    /**
     * getDescribeRankExpressions - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default.
    **/
    getDescribeRankExpressions(req: operations.GetDescribeRankExpressionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeRankExpressionsResponse>;
    /**
     * getDescribeServiceAccessPolicies - Gets information about the resource-based policies that control access to the domain's document and search services.
    **/
    getDescribeServiceAccessPolicies(req: operations.GetDescribeServiceAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeServiceAccessPoliciesResponse>;
    /**
     * getDescribeStemmingOptions - Gets the stemming dictionary configured for the search domain.
    **/
    getDescribeStemmingOptions(req: operations.GetDescribeStemmingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeStemmingOptionsResponse>;
    /**
     * getDescribeStopwordOptions - Gets the stopwords configured for the search domain.
    **/
    getDescribeStopwordOptions(req: operations.GetDescribeStopwordOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeStopwordOptionsResponse>;
    /**
     * getDescribeSynonymOptions - Gets the synonym dictionary configured for the search domain.
    **/
    getDescribeSynonymOptions(req: operations.GetDescribeSynonymOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeSynonymOptionsResponse>;
    /**
     * getIndexDocuments - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
    **/
    getIndexDocuments(req: operations.GetIndexDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.GetIndexDocumentsResponse>;
    /**
     * getUpdateAvailabilityOptions - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    getUpdateAvailabilityOptions(req: operations.GetUpdateAvailabilityOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdateAvailabilityOptionsResponse>;
    /**
     * getUpdateDefaultSearchField - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields.
    **/
    getUpdateDefaultSearchField(req: operations.GetUpdateDefaultSearchFieldRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdateDefaultSearchFieldResponse>;
    /**
     * getUpdateServiceAccessPolicies - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
    **/
    getUpdateServiceAccessPolicies(req: operations.GetUpdateServiceAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdateServiceAccessPoliciesResponse>;
    /**
     * getUpdateStemmingOptions - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
    **/
    getUpdateStemmingOptions(req: operations.GetUpdateStemmingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdateStemmingOptionsResponse>;
    /**
     * getUpdateStopwordOptions - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
    **/
    getUpdateStopwordOptions(req: operations.GetUpdateStopwordOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdateStopwordOptionsResponse>;
    /**
     * getUpdateSynonymOptions - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB.
    **/
    getUpdateSynonymOptions(req: operations.GetUpdateSynonymOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdateSynonymOptionsResponse>;
    /**
     * postCreateDomain - Creates a new search domain.
    **/
    postCreateDomain(req: operations.PostCreateDomainRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDomainResponse>;
    /**
     * postDefineIndexField - Configures an <code>IndexField</code> for the search domain. Used to create new fields and modify existing ones. If the field exists, the new configuration replaces the old one. You can configure a maximum of 200 index fields.
    **/
    postDefineIndexField(req: operations.PostDefineIndexFieldRequest, config?: AxiosRequestConfig): Promise<operations.PostDefineIndexFieldResponse>;
    /**
     * postDefineRankExpression - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
    **/
    postDefineRankExpression(req: operations.PostDefineRankExpressionRequest, config?: AxiosRequestConfig): Promise<operations.PostDefineRankExpressionResponse>;
    /**
     * postDeleteDomain - Permanently deletes a search domain and all of its data.
    **/
    postDeleteDomain(req: operations.PostDeleteDomainRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDomainResponse>;
    /**
     * postDeleteIndexField - Removes an <code>IndexField</code> from the search domain.
    **/
    postDeleteIndexField(req: operations.PostDeleteIndexFieldRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteIndexFieldResponse>;
    /**
     * postDeleteRankExpression - Removes a <code>RankExpression</code> from the search domain.
    **/
    postDeleteRankExpression(req: operations.PostDeleteRankExpressionRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteRankExpressionResponse>;
    /**
     * postDescribeAvailabilityOptions - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postDescribeAvailabilityOptions(req: operations.PostDescribeAvailabilityOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeAvailabilityOptionsResponse>;
    /**
     * postDescribeDefaultSearchField - Gets the default search field configured for the search domain.
    **/
    postDescribeDefaultSearchField(req: operations.PostDescribeDefaultSearchFieldRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDefaultSearchFieldResponse>;
    /**
     * postDescribeDomains - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
    **/
    postDescribeDomains(req: operations.PostDescribeDomainsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDomainsResponse>;
    /**
     * postDescribeIndexFields - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
    **/
    postDescribeIndexFields(req: operations.PostDescribeIndexFieldsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeIndexFieldsResponse>;
    /**
     * postDescribeRankExpressions - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default.
    **/
    postDescribeRankExpressions(req: operations.PostDescribeRankExpressionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeRankExpressionsResponse>;
    /**
     * postDescribeServiceAccessPolicies - Gets information about the resource-based policies that control access to the domain's document and search services.
    **/
    postDescribeServiceAccessPolicies(req: operations.PostDescribeServiceAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeServiceAccessPoliciesResponse>;
    /**
     * postDescribeStemmingOptions - Gets the stemming dictionary configured for the search domain.
    **/
    postDescribeStemmingOptions(req: operations.PostDescribeStemmingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeStemmingOptionsResponse>;
    /**
     * postDescribeStopwordOptions - Gets the stopwords configured for the search domain.
    **/
    postDescribeStopwordOptions(req: operations.PostDescribeStopwordOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeStopwordOptionsResponse>;
    /**
     * postDescribeSynonymOptions - Gets the synonym dictionary configured for the search domain.
    **/
    postDescribeSynonymOptions(req: operations.PostDescribeSynonymOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeSynonymOptionsResponse>;
    /**
     * postIndexDocuments - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
    **/
    postIndexDocuments(req: operations.PostIndexDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.PostIndexDocumentsResponse>;
    /**
     * postUpdateAvailabilityOptions - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
    **/
    postUpdateAvailabilityOptions(req: operations.PostUpdateAvailabilityOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateAvailabilityOptionsResponse>;
    /**
     * postUpdateDefaultSearchField - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields.
    **/
    postUpdateDefaultSearchField(req: operations.PostUpdateDefaultSearchFieldRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateDefaultSearchFieldResponse>;
    /**
     * postUpdateServiceAccessPolicies - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
    **/
    postUpdateServiceAccessPolicies(req: operations.PostUpdateServiceAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateServiceAccessPoliciesResponse>;
    /**
     * postUpdateStemmingOptions - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
    **/
    postUpdateStemmingOptions(req: operations.PostUpdateStemmingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateStemmingOptionsResponse>;
    /**
     * postUpdateStopwordOptions - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
    **/
    postUpdateStopwordOptions(req: operations.PostUpdateStopwordOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateStopwordOptionsResponse>;
    /**
     * postUpdateSynonymOptions - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB.
    **/
    postUpdateSynonymOptions(req: operations.PostUpdateSynonymOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateSynonymOptionsResponse>;
}
export {};
