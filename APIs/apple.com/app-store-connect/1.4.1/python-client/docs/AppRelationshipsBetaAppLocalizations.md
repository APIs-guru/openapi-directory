# AppRelationshipsBetaAppLocalizations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppRelationshipsBetaAppLocalizationsDataInner]**](AppRelationshipsBetaAppLocalizationsDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_relationships_beta_app_localizations import AppRelationshipsBetaAppLocalizations

# TODO update the JSON string below
json = "{}"
# create an instance of AppRelationshipsBetaAppLocalizations from a JSON string
app_relationships_beta_app_localizations_instance = AppRelationshipsBetaAppLocalizations.from_json(json)
# print the JSON string representation of the object
print(AppRelationshipsBetaAppLocalizations.to_json())

# convert the object into a dict
app_relationships_beta_app_localizations_dict = app_relationships_beta_app_localizations_instance.to_dict()
# create an instance of AppRelationshipsBetaAppLocalizations from a dict
app_relationships_beta_app_localizations_from_dict = AppRelationshipsBetaAppLocalizations.from_dict(app_relationships_beta_app_localizations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


