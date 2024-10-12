# GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySafetyAttributes

Safety Attribute categories and their associated confidence scores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | **List[str]** | The display names of Safety Attribute categories associated with the generated content. Order matches the Scores. | [optional] 
**scores** | **List[float]** | The confidence scores of the each category, higher value means higher confidence. Order matches the Categories. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_search_response_summary_safety_attributes import GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySafetyAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySafetyAttributes from a JSON string
google_cloud_discoveryengine_v1alpha_search_response_summary_safety_attributes_instance = GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySafetyAttributes.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySafetyAttributes.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_search_response_summary_safety_attributes_dict = google_cloud_discoveryengine_v1alpha_search_response_summary_safety_attributes_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySafetyAttributes from a dict
google_cloud_discoveryengine_v1alpha_search_response_summary_safety_attributes_from_dict = GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySafetyAttributes.from_dict(google_cloud_discoveryengine_v1alpha_search_response_summary_safety_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


