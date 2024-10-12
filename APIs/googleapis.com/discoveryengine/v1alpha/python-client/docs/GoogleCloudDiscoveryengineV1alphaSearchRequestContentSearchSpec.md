# GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpec

A specification for configuring the behavior of content search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extractive_content_spec** | [**GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecExtractiveContentSpec**](GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecExtractiveContentSpec.md) |  | [optional] 
**snippet_spec** | [**GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSnippetSpec**](GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSnippetSpec.md) |  | [optional] 
**summary_spec** | [**GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpec**](GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpecSummarySpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_search_request_content_search_spec import GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpec from a JSON string
google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_instance = GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpec.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_dict = google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpec from a dict
google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_from_dict = GoogleCloudDiscoveryengineV1alphaSearchRequestContentSearchSpec.from_dict(google_cloud_discoveryengine_v1alpha_search_request_content_search_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


