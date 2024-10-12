# AppStoreVersionLocalizationUpdateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**keywords** | **str** |  | [optional] 
**marketing_url** | **str** |  | [optional] 
**promotional_text** | **str** |  | [optional] 
**support_url** | **str** |  | [optional] 
**whats_new** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.app_store_version_localization_update_request_data_attributes import AppStoreVersionLocalizationUpdateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionLocalizationUpdateRequestDataAttributes from a JSON string
app_store_version_localization_update_request_data_attributes_instance = AppStoreVersionLocalizationUpdateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionLocalizationUpdateRequestDataAttributes.to_json())

# convert the object into a dict
app_store_version_localization_update_request_data_attributes_dict = app_store_version_localization_update_request_data_attributes_instance.to_dict()
# create an instance of AppStoreVersionLocalizationUpdateRequestDataAttributes from a dict
app_store_version_localization_update_request_data_attributes_from_dict = AppStoreVersionLocalizationUpdateRequestDataAttributes.from_dict(app_store_version_localization_update_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


