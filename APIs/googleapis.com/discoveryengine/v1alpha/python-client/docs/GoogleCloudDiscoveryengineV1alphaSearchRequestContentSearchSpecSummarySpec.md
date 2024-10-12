# GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpec

A specification for configuring a summary returned in a search response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_adversarial_query** | **bool** | Specifies whether to filter out adversarial queries. The default value is &#x60;false&#x60;. Google employs search-query classification to detect adversarial queries. No summary is returned if the search query is classified as an adversarial query. For example, a user might ask a question regarding negative comments about the company or submit a query designed to generate unsafe, policy-violating output. If this field is set to &#x60;true&#x60;, we skip generating summaries for adversarial queries and return fallback messages instead. | [optional] 
**ignore_non_summary_seeking_query** | **bool** | Specifies whether to filter out queries that are not summary-seeking. The default value is &#x60;false&#x60;. Google employs search-query classification to detect summary-seeking queries. No summary is returned if the search query is classified as a non-summary seeking query. For example, &#x60;why is the sky blue&#x60; and &#x60;Who is the best soccer player in the world?&#x60; are summary-seeking queries, but &#x60;SFO airport&#x60; and &#x60;world cup 2026&#x60; are not. They are most likely navigational queries. If this field is set to &#x60;true&#x60;, we skip generating summaries for non-summary seeking queries and return fallback messages instead. | [optional] 
**include_citations** | **bool** | Specifies whether to include citations in the summary. The default value is &#x60;false&#x60;. When this field is set to &#x60;true&#x60;, summaries include in-line citation numbers. Example summary including citations: BigQuery is Google Cloud&#39;s fully managed and completely serverless enterprise data warehouse [1]. BigQuery supports all data types, works across clouds, and has built-in machine learning and business intelligence, all within a unified platform [2, 3]. The citation numbers refer to the returned search results and are 1-indexed. For example, [1] means that the sentence is attributed to the first search result. [2, 3] means that the sentence is attributed to both the second and third search results. | [optional] 
**language_code** | **str** | Language code for Summary. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature. | [optional] 
**model_prompt_spec** | [**GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpecModelPromptSpec**](GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpecModelPromptSpec.md) |  | [optional] 
**model_spec** | [**GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpecModelSpec**](GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpecModelSpec.md) |  | [optional] 
**summary_result_count** | **int** | The number of top results to generate the summary from. If the number of results returned is less than &#x60;summaryResultCount&#x60;, the summary is generated from all of the results. At most five results can be used to generate a summary. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_summary_spec import GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpec from a JSON string
google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_summary_spec_instance = GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpec.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_summary_spec_dict = google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_summary_spec_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpec from a dict
google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_summary_spec_from_dict = GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpec.from_dict(google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_summary_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


