# AppStoreVersionLocalizationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**keywords** | **str** |  | [optional] 
**locale** | **str** |  | [optional] 
**marketing_url** | **str** |  | [optional] 
**promotional_text** | **str** |  | [optional] 
**support_url** | **str** |  | [optional] 
**whats_new** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.app_store_version_localization_attributes import AppStoreVersionLocalizationAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionLocalizationAttributes from a JSON string
app_store_version_localization_attributes_instance = AppStoreVersionLocalizationAttributes.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionLocalizationAttributes.to_json())

# convert the object into a dict
app_store_version_localization_attributes_dict = app_store_version_localization_attributes_instance.to_dict()
# create an instance of AppStoreVersionLocalizationAttributes from a dict
app_store_version_localization_attributes_from_dict = AppStoreVersionLocalizationAttributes.from_dict(app_store_version_localization_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


