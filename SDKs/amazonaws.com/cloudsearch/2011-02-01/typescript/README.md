# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { GetCreateDomainRequest, GetCreateDomainResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetCreateDomainRequest = {
  queryParams: {
    action: "CreateDomain",
    domainName: "omnis",
    version: "2011-02-01",
  },
  headers: {
    xAmzAlgorithm: "animi",
    xAmzContentSha256: "cum",
    xAmzCredential: "occaecati",
    xAmzDate: "ea",
    xAmzSecurityToken: "architecto",
    xAmzSignature: "esse",
    xAmzSignedHeaders: "explicabo",
  },
};

sdk.sdk.getCreateDomain(req).then((res: GetCreateDomainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `getCreateDomain` - Creates a new search domain.
* `getDefineRankExpression` - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* `getDeleteDomain` - Permanently deletes a search domain and all of its data.
* `getDeleteIndexField` - Removes an <code>IndexField</code> from the search domain.
* `getDeleteRankExpression` - Removes a <code>RankExpression</code> from the search domain.
* `getDescribeAvailabilityOptions` - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* `getDescribeDefaultSearchField` - Gets the default search field configured for the search domain.
* `getDescribeDomains` - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* `getDescribeIndexFields` - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* `getDescribeRankExpressions` - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* `getDescribeServiceAccessPolicies` - Gets information about the resource-based policies that control access to the domain's document and search services.
* `getDescribeStemmingOptions` - Gets the stemming dictionary configured for the search domain.
* `getDescribeStopwordOptions` - Gets the stopwords configured for the search domain.
* `getDescribeSynonymOptions` - Gets the synonym dictionary configured for the search domain.
* `getIndexDocuments` - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* `getUpdateAvailabilityOptions` - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* `getUpdateDefaultSearchField` - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* `getUpdateServiceAccessPolicies` - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* `getUpdateStemmingOptions` - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* `getUpdateStopwordOptions` - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* `getUpdateSynonymOptions` - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 
* `postCreateDomain` - Creates a new search domain.
* `postDefineIndexField` - Configures an <code>IndexField</code> for the search domain. Used to create new fields and modify existing ones. If the field exists, the new configuration replaces the old one. You can configure a maximum of 200 index fields.
* `postDefineRankExpression` - Configures a <code>RankExpression</code> for the search domain. Used to create new rank expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. You can configure a maximum of 50 rank expressions.
* `postDeleteDomain` - Permanently deletes a search domain and all of its data.
* `postDeleteIndexField` - Removes an <code>IndexField</code> from the search domain.
* `postDeleteRankExpression` - Removes a <code>RankExpression</code> from the search domain.
* `postDescribeAvailabilityOptions` - Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* `postDescribeDefaultSearchField` - Gets the default search field configured for the search domain.
* `postDescribeDomains` - Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default.
* `postDescribeIndexFields` - Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. Shows all fields by default.
* `postDescribeRankExpressions` - Gets the rank expressions configured for the search domain. Can be limited to specific rank expressions by name. Shows all rank expressions by default. 
* `postDescribeServiceAccessPolicies` - Gets information about the resource-based policies that control access to the domain's document and search services.
* `postDescribeStemmingOptions` - Gets the stemming dictionary configured for the search domain.
* `postDescribeStopwordOptions` - Gets the stopwords configured for the search domain.
* `postDescribeSynonymOptions` - Gets the synonym dictionary configured for the search domain.
* `postIndexDocuments` - Tells the search domain to start indexing its documents using the latest text processing options and <code>IndexFields</code>. This operation must be invoked to make options whose <a>OptionStatus</a> has <code>OptionState</code> of <code>RequiresIndexDocuments</code> visible in search results.
* `postUpdateAvailabilityOptions` - Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.
* `postUpdateDefaultSearchField` - Configures the default search field for the search domain. The default search field is the text field that is searched when a search request does not specify which fields to search. By default, it is configured to include the contents of all of the domain's text fields. 
* `postUpdateServiceAccessPolicies` - Configures the policies that control access to the domain's document and search services. The maximum size of an access policy document is 100 KB.
* `postUpdateStemmingOptions` - Configures a stemming dictionary for the search domain. The stemming dictionary is used during indexing and when processing search requests. The maximum size of the stemming dictionary is 500 KB.
* `postUpdateStopwordOptions` - Configures stopwords for the search domain. Stopwords are used during indexing and when processing search requests. The maximum size of the stopwords dictionary is 10 KB.
* `postUpdateSynonymOptions` - Configures a synonym dictionary for the search domain. The synonym dictionary is used during indexing to configure mappings for terms that occur in text fields. The maximum size of the synonym dictionary is 100 KB. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
