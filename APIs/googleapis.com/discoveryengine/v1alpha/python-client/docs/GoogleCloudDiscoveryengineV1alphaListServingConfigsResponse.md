# GoogleCloudDiscoveryengineV1alphaListServingConfigsResponse

Response for ListServingConfigs method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pagination token, if not returned indicates the last page. | [optional] 
**serving_configs** | [**List[GoogleCloudDiscoveryengineV1alphaServingConfig]**](GoogleCloudDiscoveryengineV1alphaServingConfig.md) | All the ServingConfigs for a given dataStore. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_list_serving_configs_response import GoogleCloudDiscoveryengineV1alphaListServingConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaListServingConfigsResponse from a JSON string
google_cloud_discoveryengine_v1alpha_list_serving_configs_response_instance = GoogleCloudDiscoveryengineV1alphaListServingConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaListServingConfigsResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_list_serving_configs_response_dict = google_cloud_discoveryengine_v1alpha_list_serving_configs_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaListServingConfigsResponse from a dict
google_cloud_discoveryengine_v1alpha_list_serving_configs_response_from_dict = GoogleCloudDiscoveryengineV1alphaListServingConfigsResponse.from_dict(google_cloud_discoveryengine_v1alpha_list_serving_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


