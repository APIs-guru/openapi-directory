# AppStoreVersionLocalization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppStoreVersionLocalizationAttributes**](AppStoreVersionLocalizationAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppStoreVersionLocalizationRelationships**](AppStoreVersionLocalizationRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_store_version_localization import AppStoreVersionLocalization

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionLocalization from a JSON string
app_store_version_localization_instance = AppStoreVersionLocalization.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionLocalization.to_json())

# convert the object into a dict
app_store_version_localization_dict = app_store_version_localization_instance.to_dict()
# create an instance of AppStoreVersionLocalization from a dict
app_store_version_localization_from_dict = AppStoreVersionLocalization.from_dict(app_store_version_localization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


