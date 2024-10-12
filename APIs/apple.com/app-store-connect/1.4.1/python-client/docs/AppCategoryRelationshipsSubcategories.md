# AppCategoryRelationshipsSubcategories


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppCategoryRelationshipsParentData]**](AppCategoryRelationshipsParentData.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_category_relationships_subcategories import AppCategoryRelationshipsSubcategories

# TODO update the JSON string below
json = "{}"
# create an instance of AppCategoryRelationshipsSubcategories from a JSON string
app_category_relationships_subcategories_instance = AppCategoryRelationshipsSubcategories.from_json(json)
# print the JSON string representation of the object
print(AppCategoryRelationshipsSubcategories.to_json())

# convert the object into a dict
app_category_relationships_subcategories_dict = app_category_relationships_subcategories_instance.to_dict()
# create an instance of AppCategoryRelationshipsSubcategories from a dict
app_category_relationships_subcategories_from_dict = AppCategoryRelationshipsSubcategories.from_dict(app_category_relationships_subcategories_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


