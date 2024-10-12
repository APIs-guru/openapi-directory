# AppInfoLocalizationRelationshipsAppInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppRelationshipsAppInfosDataInner**](AppRelationshipsAppInfosDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_info_localization_relationships_app_info import AppInfoLocalizationRelationshipsAppInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoLocalizationRelationshipsAppInfo from a JSON string
app_info_localization_relationships_app_info_instance = AppInfoLocalizationRelationshipsAppInfo.from_json(json)
# print the JSON string representation of the object
print(AppInfoLocalizationRelationshipsAppInfo.to_json())

# convert the object into a dict
app_info_localization_relationships_app_info_dict = app_info_localization_relationships_app_info_instance.to_dict()
# create an instance of AppInfoLocalizationRelationshipsAppInfo from a dict
app_info_localization_relationships_app_info_from_dict = AppInfoLocalizationRelationshipsAppInfo.from_dict(app_info_localization_relationships_app_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


