# AppCategoryRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | [**AppCategoryRelationshipsParent**](AppCategoryRelationshipsParent.md) |  | [optional] 
**subcategories** | [**AppCategoryRelationshipsSubcategories**](AppCategoryRelationshipsSubcategories.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_category_relationships import AppCategoryRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of AppCategoryRelationships from a JSON string
app_category_relationships_instance = AppCategoryRelationships.from_json(json)
# print the JSON string representation of the object
print(AppCategoryRelationships.to_json())

# convert the object into a dict
app_category_relationships_dict = app_category_relationships_instance.to_dict()
# create an instance of AppCategoryRelationships from a dict
app_category_relationships_from_dict = AppCategoryRelationships.from_dict(app_category_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


