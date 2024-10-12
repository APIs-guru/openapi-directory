# GoogleCloudDiscoveryengineV1alphaSearchRequest

Request message for SearchService.Search method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boost_spec** | [**GoogleCloudDiscoveryengineV1alphaSearchRequestBoostSpec**](GoogleCloudDiscoveryengineV1alphaSearchRequestBoostSpec.md) |  | [optional] 
**branch** | **str** | The branch resource name, such as &#x60;projects/*/locations/global/collections/default_collection/dataStores/default_data_store/branches/0&#x60;. Use &#x60;default_branch&#x60; as the branch ID or leave this field empty, to search documents under the default branch. | [optional] 
**canonical_filter** | **str** | The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. In the case a query does not have a sufficient amount of results this filter will be used to determine whether or not to enable the query expansion flow. The original filter will still be used for the query expanded search. This field is strongly recommended to achieve high search quality. For more information about filter syntax, see SearchRequest.filter. | [optional] 
**content_search_spec** | [**GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpec**](GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpec.md) |  | [optional] 
**custom_fine_tuning_spec** | [**GoogleCloudDiscoveryengineV1alphaCustomFineTuningSpec**](GoogleCloudDiscoveryengineV1alphaCustomFineTuningSpec.md) |  | [optional] 
**embedding_spec** | [**GoogleCloudDiscoveryengineV1alphaSearchRequestEmbeddingSpec**](GoogleCloudDiscoveryengineV1alphaSearchRequestEmbeddingSpec.md) |  | [optional] 
**facet_specs** | [**List[GoogleCloudDiscoveryengineV1alphaSearchRequestFacetSpec]**](GoogleCloudDiscoveryengineV1alphaSearchRequestFacetSpec.md) | Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. | [optional] 
**filter** | **str** | The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. Filter expression is case-sensitive. If this field is unrecognizable, an &#x60;INVALID_ARGUMENT&#x60; is returned. Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema. For example a media customer might have a field &#39;name&#39; in their schema. In this case the filter would look like this: filter --&gt; name:&#39;ANY(\&quot;king kong\&quot;)&#39; For more information about filtering including syntax and filter operators, see [Filter](https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata) | [optional] 
**image_query** | [**GoogleCloudDiscoveryengineV1alphaSearchRequestImageQuery**](GoogleCloudDiscoveryengineV1alphaSearchRequestImageQuery.md) |  | [optional] 
**offset** | **int** | A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Documents deemed by the API as relevant) in search results. This field is only considered if page_token is unset. If this field is negative, an &#x60;INVALID_ARGUMENT&#x60; is returned. | [optional] 
**order_by** | **str** | The order in which documents are returned. Documents can be ordered by a field in an Document object. Leave it unset if ordered by relevance. &#x60;order_by&#x60; expression is case-sensitive. For more information on ordering, see [Ordering](https://cloud.google.com/retail/docs/filter-and-order#order) If this field is unrecognizable, an &#x60;INVALID_ARGUMENT&#x60; is returned. | [optional] 
**page_size** | **int** | Maximum number of Documents to return. If unspecified, defaults to a reasonable value. The maximum allowed value is 100. Values above 100 are coerced to 100. If this field is negative, an &#x60;INVALID_ARGUMENT&#x60; is returned. | [optional] 
**page_token** | **str** | A page token received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. | [optional] 
**params** | **Dict[str, object]** | Additional search parameters. For public website search only, supported values are: * &#x60;user_country_code&#x60;: string. Default empty. If set to non-empty, results are restricted or boosted based on the location provided. Example: user_country_code: \&quot;au\&quot; For available codes see [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) * &#x60;search_type&#x60;: double. Default empty. Enables non-webpage searching depending on the value. The only valid non-default value is 1, which enables image searching. Example: search_type: 1 | [optional] 
**query** | **str** | Raw search query. | [optional] 
**query_expansion_spec** | [**GoogleCloudDiscoveryengineV1alphaSearchRequestQueryExpansionSpec**](GoogleCloudDiscoveryengineV1alphaSearchRequestQueryExpansionSpec.md) |  | [optional] 
**ranking_expression** | **str** | The ranking expression controls the customized ranking on retrieval documents. This overrides ServingConfig.ranking_expression. The ranking expression is a single function or multiple functions that are joint by \&quot;+\&quot;. * ranking_expression &#x3D; function, { \&quot; + \&quot;, function }; Supported functions: * double * relevance_score * double * dotProduct(embedding_field_path) Function variables: &#x60;relevance_score&#x60;: pre-defined keywords, used for measure relevance between query and document. &#x60;embedding_field_path&#x60;: the document embedding field used with query embedding vector. &#x60;dotProduct&#x60;: embedding function between embedding_field_path and query embedding vector. Example ranking expression: If document has an embedding field doc_embedding, the ranking expression could be &#x60;0.5 * relevance_score + 0.3 * dotProduct(doc_embedding)&#x60;. | [optional] 
**safe_search** | **bool** | Whether to turn on safe search. This is only supported for website search. | [optional] 
**serving_config** | **str** | Required. The resource name of the Search serving config, such as &#x60;projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config&#x60;, or &#x60;projects/*/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config&#x60;. This field is used to identify the serving configuration name, set of models used to make the search. | [optional] 
**spell_correction_spec** | [**GoogleCloudDiscoveryengineV1alphaSearchRequestSpellCorrectionSpec**](GoogleCloudDiscoveryengineV1alphaSearchRequestSpellCorrectionSpec.md) |  | [optional] 
**user_info** | [**GoogleCloudDiscoveryengineV1alphaUserInfo**](GoogleCloudDiscoveryengineV1alphaUserInfo.md) |  | [optional] 
**user_labels** | **Dict[str, str]** | The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details. | [optional] 
**user_pseudo_id** | **str** | A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as &#x60;unknown_visitor&#x60;. This should be the same identifier as UserEvent.user_pseudo_id and CompleteQueryRequest.user_pseudo_id The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an &#x60;INVALID_ARGUMENT&#x60; error is returned. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_search_request import GoogleCloudDiscoveryengineV1alphaSearchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchRequest from a JSON string
google_cloud_discoveryengine_v1alpha_search_request_instance = GoogleCloudDiscoveryengineV1alphaSearchRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSearchRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_search_request_dict = google_cloud_discoveryengine_v1alpha_search_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchRequest from a dict
google_cloud_discoveryengine_v1alpha_search_request_from_dict = GoogleCloudDiscoveryengineV1alphaSearchRequest.from_dict(google_cloud_discoveryengine_v1alpha_search_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


