# AppInfoLocalization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppInfoLocalizationAttributes**](AppInfoLocalizationAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppInfoLocalizationRelationships**](AppInfoLocalizationRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_info_localization import AppInfoLocalization

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoLocalization from a JSON string
app_info_localization_instance = AppInfoLocalization.from_json(json)
# print the JSON string representation of the object
print(AppInfoLocalization.to_json())

# convert the object into a dict
app_info_localization_dict = app_info_localization_instance.to_dict()
# create an instance of AppInfoLocalization from a dict
app_info_localization_from_dict = AppInfoLocalization.from_dict(app_info_localization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


