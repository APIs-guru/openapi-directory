# GoogleCloudRetailV2ListServingConfigsResponse

Response for ListServingConfigs method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pagination token, if not returned indicates the last page. | [optional] 
**serving_configs** | [**List[GoogleCloudRetailV2ServingConfig]**](GoogleCloudRetailV2ServingConfig.md) | All the ServingConfigs for a given catalog. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_list_serving_configs_response import GoogleCloudRetailV2ListServingConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2ListServingConfigsResponse from a JSON string
google_cloud_retail_v2_list_serving_configs_response_instance = GoogleCloudRetailV2ListServingConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2ListServingConfigsResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2_list_serving_configs_response_dict = google_cloud_retail_v2_list_serving_configs_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2ListServingConfigsResponse from a dict
google_cloud_retail_v2_list_serving_configs_response_from_dict = GoogleCloudRetailV2ListServingConfigsResponse.from_dict(google_cloud_retail_v2_list_serving_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


