# AppInfoRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_rating_declaration** | [**AppInfoRelationshipsAgeRatingDeclaration**](AppInfoRelationshipsAgeRatingDeclaration.md) |  | [optional] 
**app** | [**AppEncryptionDeclarationRelationshipsApp**](AppEncryptionDeclarationRelationshipsApp.md) |  | [optional] 
**app_info_localizations** | [**AppInfoRelationshipsAppInfoLocalizations**](AppInfoRelationshipsAppInfoLocalizations.md) |  | [optional] 
**primary_category** | [**AppCategoryRelationshipsParent**](AppCategoryRelationshipsParent.md) |  | [optional] 
**primary_subcategory_one** | [**AppCategoryRelationshipsParent**](AppCategoryRelationshipsParent.md) |  | [optional] 
**primary_subcategory_two** | [**AppCategoryRelationshipsParent**](AppCategoryRelationshipsParent.md) |  | [optional] 
**secondary_category** | [**AppCategoryRelationshipsParent**](AppCategoryRelationshipsParent.md) |  | [optional] 
**secondary_subcategory_one** | [**AppCategoryRelationshipsParent**](AppCategoryRelationshipsParent.md) |  | [optional] 
**secondary_subcategory_two** | [**AppCategoryRelationshipsParent**](AppCategoryRelationshipsParent.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_info_relationships import AppInfoRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoRelationships from a JSON string
app_info_relationships_instance = AppInfoRelationships.from_json(json)
# print the JSON string representation of the object
print(AppInfoRelationships.to_json())

# convert the object into a dict
app_info_relationships_dict = app_info_relationships_instance.to_dict()
# create an instance of AppInfoRelationships from a dict
app_info_relationships_from_dict = AppInfoRelationships.from_dict(app_info_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


