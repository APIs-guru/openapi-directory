# AppInfoRelationshipsAppInfoLocalizations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppInfoRelationshipsAppInfoLocalizationsDataInner]**](AppInfoRelationshipsAppInfoLocalizationsDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_info_relationships_app_info_localizations import AppInfoRelationshipsAppInfoLocalizations

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoRelationshipsAppInfoLocalizations from a JSON string
app_info_relationships_app_info_localizations_instance = AppInfoRelationshipsAppInfoLocalizations.from_json(json)
# print the JSON string representation of the object
print(AppInfoRelationshipsAppInfoLocalizations.to_json())

# convert the object into a dict
app_info_relationships_app_info_localizations_dict = app_info_relationships_app_info_localizations_instance.to_dict()
# create an instance of AppInfoRelationshipsAppInfoLocalizations from a dict
app_info_relationships_app_info_localizations_from_dict = AppInfoRelationshipsAppInfoLocalizations.from_dict(app_info_relationships_app_info_localizations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


