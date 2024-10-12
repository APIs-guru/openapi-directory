# AppStoreVersionRelationshipsAgeRatingDeclaration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppInfoRelationshipsAgeRatingDeclarationData**](AppInfoRelationshipsAgeRatingDeclarationData.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_store_version_relationships_age_rating_declaration import AppStoreVersionRelationshipsAgeRatingDeclaration

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionRelationshipsAgeRatingDeclaration from a JSON string
app_store_version_relationships_age_rating_declaration_instance = AppStoreVersionRelationshipsAgeRatingDeclaration.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionRelationshipsAgeRatingDeclaration.to_json())

# convert the object into a dict
app_store_version_relationships_age_rating_declaration_dict = app_store_version_relationships_age_rating_declaration_instance.to_dict()
# create an instance of AppStoreVersionRelationshipsAgeRatingDeclaration from a dict
app_store_version_relationships_age_rating_declaration_from_dict = AppStoreVersionRelationshipsAgeRatingDeclaration.from_dict(app_store_version_relationships_age_rating_declaration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


