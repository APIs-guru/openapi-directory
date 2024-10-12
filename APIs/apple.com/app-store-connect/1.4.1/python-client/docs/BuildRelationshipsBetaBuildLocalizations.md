# BuildRelationshipsBetaBuildLocalizations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BuildRelationshipsBetaBuildLocalizationsDataInner]**](BuildRelationshipsBetaBuildLocalizationsDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_relationships_beta_build_localizations import BuildRelationshipsBetaBuildLocalizations

# TODO update the JSON string below
json = "{}"
# create an instance of BuildRelationshipsBetaBuildLocalizations from a JSON string
build_relationships_beta_build_localizations_instance = BuildRelationshipsBetaBuildLocalizations.from_json(json)
# print the JSON string representation of the object
print(BuildRelationshipsBetaBuildLocalizations.to_json())

# convert the object into a dict
build_relationships_beta_build_localizations_dict = build_relationships_beta_build_localizations_instance.to_dict()
# create an instance of BuildRelationshipsBetaBuildLocalizations from a dict
build_relationships_beta_build_localizations_from_dict = BuildRelationshipsBetaBuildLocalizations.from_dict(build_relationships_beta_build_localizations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


