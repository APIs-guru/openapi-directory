# AppStoreVersionLocalizationUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppStoreVersionLocalizationUpdateRequestDataAttributes**](AppStoreVersionLocalizationUpdateRequestDataAttributes.md) |  | [optional] 
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_store_version_localization_update_request_data import AppStoreVersionLocalizationUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionLocalizationUpdateRequestData from a JSON string
app_store_version_localization_update_request_data_instance = AppStoreVersionLocalizationUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionLocalizationUpdateRequestData.to_json())

# convert the object into a dict
app_store_version_localization_update_request_data_dict = app_store_version_localization_update_request_data_instance.to_dict()
# create an instance of AppStoreVersionLocalizationUpdateRequestData from a dict
app_store_version_localization_update_request_data_from_dict = AppStoreVersionLocalizationUpdateRequestData.from_dict(app_store_version_localization_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


