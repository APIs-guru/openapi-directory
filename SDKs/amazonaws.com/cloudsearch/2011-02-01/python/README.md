# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetCreateDomainRequest(
    query_params=operations.GetCreateDomainQueryParams(
        action="CreateDomain",
        domain_name="omnis",
        version="2011-02-01",
    ),
    headers=operations.GetCreateDomainHeaders(
        x_amz_algorithm="animi",
        x_amz_content_sha256="cum",
        x_amz_credential="occaecati",
        x_amz_date="ea",
        x_amz_security_token="architecto",
        x_amz_signature="esse",
        x_amz_signed_headers="explicabo",
    ),
)
    
res = s.sdk.get_create_domain(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `get_create_domain` - Creates a new search domain.
* `get_define_rank_expression` - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* `get_delete_domain` - Permanently deletes a search domain and all of its data.
* `get_delete_index_field` - Removes an <code>IndexField</code> from the search domain.
* `get_delete_rank_expression` - Removes a <code>RankExpression</code> from the search domain.
* `get_describe_availability_options` - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* `get_describe_default_search_field` - Gets the default search field configured for the search domain.
* `get_describe_domains` - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* `get_describe_index_fields` - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* `get_describe_rank_expressions` - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* `get_describe_service_access_policies` - Gets information about the resource-based policies that control access to the domain's document and search services.
* `get_describe_stemming_options` - Gets the stemming dictionary configured for the search domain.
* `get_describe_stopword_options` - Gets the stopwords configured for the search domain.
* `get_describe_synonym_options` - Gets the synonym dictionary configured for the search domain.
* `get_index_documents` - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* `get_update_availability_options` - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* `get_update_default_search_field` - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* `get_update_service_access_policies` - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* `get_update_stemming_options` - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* `get_update_stopword_options` - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* `get_update_synonym_options` - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 
* `post_create_domain` - Creates a new search domain.
* `post_define_index_field` - Configures an <code>IndexField</code> for the search domain. Used to create new fields and modify existing ones. If the field exists, the new configuration replaces the old one. You can configure a maximum of 200 index fields.
* `post_define_rank_expression` - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* `post_delete_domain` - Permanently deletes a search domain and all of its data.
* `post_delete_index_field` - Removes an <code>IndexField</code> from the search domain.
* `post_delete_rank_expression` - Removes a <code>RankExpression</code> from the search domain.
* `post_describe_availability_options` - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* `post_describe_default_search_field` - Gets the default search field configured for the search domain.
* `post_describe_domains` - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* `post_describe_index_fields` - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* `post_describe_rank_expressions` - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* `post_describe_service_access_policies` - Gets information about the resource-based policies that control access to the domain's document and search services.
* `post_describe_stemming_options` - Gets the stemming dictionary configured for the search domain.
* `post_describe_stopword_options` - Gets the stopwords configured for the search domain.
* `post_describe_synonym_options` - Gets the synonym dictionary configured for the search domain.
* `post_index_documents` - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* `post_update_availability_options` - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* `post_update_default_search_field` - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* `post_update_service_access_policies` - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* `post_update_stemming_options` - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* `post_update_stopword_options` - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* `post_update_synonym_options` - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
