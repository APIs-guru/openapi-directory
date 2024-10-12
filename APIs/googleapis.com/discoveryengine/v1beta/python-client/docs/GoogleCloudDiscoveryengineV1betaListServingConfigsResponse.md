# GoogleCloudDiscoveryengineV1betaListServingConfigsResponse

Response for ListServingConfigs method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pagination token, if not returned indicates the last page. | [optional] 
**serving_configs** | [**List[GoogleCloudDiscoveryengineV1betaServingConfig]**](GoogleCloudDiscoveryengineV1betaServingConfig.md) | All the ServingConfigs for a given dataStore. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_list_serving_configs_response import GoogleCloudDiscoveryengineV1betaListServingConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaListServingConfigsResponse from a JSON string
google_cloud_discoveryengine_v1beta_list_serving_configs_response_instance = GoogleCloudDiscoveryengineV1betaListServingConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaListServingConfigsResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_list_serving_configs_response_dict = google_cloud_discoveryengine_v1beta_list_serving_configs_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaListServingConfigsResponse from a dict
google_cloud_discoveryengine_v1beta_list_serving_configs_response_from_dict = GoogleCloudDiscoveryengineV1betaListServingConfigsResponse.from_dict(google_cloud_discoveryengine_v1beta_list_serving_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


