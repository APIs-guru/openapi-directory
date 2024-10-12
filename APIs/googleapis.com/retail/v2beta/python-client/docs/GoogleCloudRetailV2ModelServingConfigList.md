# GoogleCloudRetailV2ModelServingConfigList

Represents an ordered combination of valid serving configs, which can be used for `PAGE_OPTIMIZATION` recommendations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serving_config_ids** | **List[str]** | Optional. A set of valid serving configs that may be used for &#x60;PAGE_OPTIMIZATION&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_model_serving_config_list import GoogleCloudRetailV2ModelServingConfigList

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2ModelServingConfigList from a JSON string
google_cloud_retail_v2_model_serving_config_list_instance = GoogleCloudRetailV2ModelServingConfigList.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2ModelServingConfigList.to_json())

# convert the object into a dict
google_cloud_retail_v2_model_serving_config_list_dict = google_cloud_retail_v2_model_serving_config_list_instance.to_dict()
# create an instance of GoogleCloudRetailV2ModelServingConfigList from a dict
google_cloud_retail_v2_model_serving_config_list_from_dict = GoogleCloudRetailV2ModelServingConfigList.from_dict(google_cloud_retail_v2_model_serving_config_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


