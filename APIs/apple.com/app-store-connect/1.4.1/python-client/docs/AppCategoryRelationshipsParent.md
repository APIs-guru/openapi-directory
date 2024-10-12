# AppCategoryRelationshipsParent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppCategoryRelationshipsParentData**](AppCategoryRelationshipsParentData.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_category_relationships_parent import AppCategoryRelationshipsParent

# TODO update the JSON string below
json = "{}"
# create an instance of AppCategoryRelationshipsParent from a JSON string
app_category_relationships_parent_instance = AppCategoryRelationshipsParent.from_json(json)
# print the JSON string representation of the object
print(AppCategoryRelationshipsParent.to_json())

# convert the object into a dict
app_category_relationships_parent_dict = app_category_relationships_parent_instance.to_dict()
# create an instance of AppCategoryRelationshipsParent from a dict
app_category_relationships_parent_from_dict = AppCategoryRelationshipsParent.from_dict(app_category_relationships_parent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


