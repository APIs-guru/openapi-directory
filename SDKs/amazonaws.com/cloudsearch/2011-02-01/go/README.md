# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetCreateDomainRequest{
        QueryParams: operations.GetCreateDomainQueryParams{
            Action: "CreateDomain",
            DomainName: "omnis",
            Version: "2011-02-01",
        },
        Headers: operations.GetCreateDomainHeaders{
            XAmzAlgorithm: "animi",
            XAmzContentSha256: "cum",
            XAmzCredential: "occaecati",
            XAmzDate: "ea",
            XAmzSecurityToken: "architecto",
            XAmzSignature: "esse",
            XAmzSignedHeaders: "explicabo",
        },
    }
    
    res, err := s.Sdk.GetCreateDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `GetCreateDomain` - Creates a new search domain.
* `GetDefineRankExpression` - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* `GetDeleteDomain` - Permanently deletes a search domain and all of its data.
* `GetDeleteIndexField` - Removes an <code>IndexField</code> from the search domain.
* `GetDeleteRankExpression` - Removes a <code>RankExpression</code> from the search domain.
* `GetDescribeAvailabilityOptions` - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* `GetDescribeDefaultSearchField` - Gets the default search field configured for the search domain.
* `GetDescribeDomains` - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* `GetDescribeIndexFields` - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* `GetDescribeRankExpressions` - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* `GetDescribeServiceAccessPolicies` - Gets information about the resource-based policies that control access to the domain's document and search services.
* `GetDescribeStemmingOptions` - Gets the stemming dictionary configured for the search domain.
* `GetDescribeStopwordOptions` - Gets the stopwords configured for the search domain.
* `GetDescribeSynonymOptions` - Gets the synonym dictionary configured for the search domain.
* `GetIndexDocuments` - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* `GetUpdateAvailabilityOptions` - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* `GetUpdateDefaultSearchField` - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* `GetUpdateServiceAccessPolicies` - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* `GetUpdateStemmingOptions` - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* `GetUpdateStopwordOptions` - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* `GetUpdateSynonymOptions` - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 
* `PostCreateDomain` - Creates a new search domain.
* `PostDefineIndexField` - Configures an <code>IndexField</code> for the search domain. Used to create new fields and modify existing ones. If the field exists, the new configuration replaces the old one. You can configure a maximum of 200 index fields.
* `PostDefineRankExpression` - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* `PostDeleteDomain` - Permanently deletes a search domain and all of its data.
* `PostDeleteIndexField` - Removes an <code>IndexField</code> from the search domain.
* `PostDeleteRankExpression` - Removes a <code>RankExpression</code> from the search domain.
* `PostDescribeAvailabilityOptions` - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* `PostDescribeDefaultSearchField` - Gets the default search field configured for the search domain.
* `PostDescribeDomains` - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* `PostDescribeIndexFields` - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* `PostDescribeRankExpressions` - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* `PostDescribeServiceAccessPolicies` - Gets information about the resource-based policies that control access to the domain's document and search services.
* `PostDescribeStemmingOptions` - Gets the stemming dictionary configured for the search domain.
* `PostDescribeStopwordOptions` - Gets the stopwords configured for the search domain.
* `PostDescribeSynonymOptions` - Gets the synonym dictionary configured for the search domain.
* `PostIndexDocuments` - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* `PostUpdateAvailabilityOptions` - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* `PostUpdateDefaultSearchField` - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* `PostUpdateServiceAccessPolicies` - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* `PostUpdateStemmingOptions` - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* `PostUpdateStopwordOptions` - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* `PostUpdateSynonymOptions` - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
