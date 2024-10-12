# GoogleCloudDiscoveryengineV1alphaListEnginesResponse

Response message for EngineService.ListEngines method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**engines** | [**List[GoogleCloudDiscoveryengineV1alphaEngine]**](GoogleCloudDiscoveryengineV1alphaEngine.md) | All the customer&#39;s Engines. | [optional] 
**next_page_token** | **str** | Not supported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_list_engines_response import GoogleCloudDiscoveryengineV1alphaListEnginesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaListEnginesResponse from a JSON string
google_cloud_discoveryengine_v1alpha_list_engines_response_instance = GoogleCloudDiscoveryengineV1alphaListEnginesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaListEnginesResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_list_engines_response_dict = google_cloud_discoveryengine_v1alpha_list_engines_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaListEnginesResponse from a dict
google_cloud_discoveryengine_v1alpha_list_engines_response_from_dict = GoogleCloudDiscoveryengineV1alphaListEnginesResponse.from_dict(google_cloud_discoveryengine_v1alpha_list_engines_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


