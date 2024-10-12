# GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecExtractiveContentSpec

A specification for configuring the extractive content in a search response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_extractive_answer_count** | **int** | The maximum number of extractive answers returned in each search result. An extractive answer is a verbatim answer extracted from the original document, which provides a precise and contextually relevant answer to the search query. If the number of matching answers is less than the &#x60;max_extractive_answer_count&#x60;, return all of the answers. Otherwise, return the &#x60;max_extractive_answer_count&#x60;. At most five answers are returned for each SearchResult. | [optional] 
**max_extractive_segment_count** | **int** | The max number of extractive segments returned in each search result. Only applied if the DataStore is set to DataStore.ContentConfig.CONTENT_REQUIRED or DataStore.solution_types is SOLUTION_TYPE_CHAT. An extractive segment is a text segment extracted from the original document that is relevant to the search query, and, in general, more verbose than an extractive answer. The segment could then be used as input for LLMs to generate summaries and answers. If the number of matching segments is less than &#x60;max_extractive_segment_count&#x60;, return all of the segments. Otherwise, return the &#x60;max_extractive_segment_count&#x60;. | [optional] 
**num_next_segments** | **int** | Return at most &#x60;num_next_segments&#x60; segments after each selected segments. | [optional] 
**num_previous_segments** | **int** | Specifies whether to also include the adjacent from each selected segments. Return at most &#x60;num_previous_segments&#x60; segments before each selected segments. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_extractive_content_spec import GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecExtractiveContentSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecExtractiveContentSpec from a JSON string
google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_extractive_content_spec_instance = GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecExtractiveContentSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecExtractiveContentSpec.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_extractive_content_spec_dict = google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_extractive_content_spec_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecExtractiveContentSpec from a dict
google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_extractive_content_spec_from_dict = GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecExtractiveContentSpec.from_dict(google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_extractive_content_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


