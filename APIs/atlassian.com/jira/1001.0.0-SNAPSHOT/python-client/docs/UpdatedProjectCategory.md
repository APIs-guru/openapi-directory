# UpdatedProjectCategory

A project category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The name of the project category. | [optional] [readonly] 
**id** | **str** | The ID of the project category. | [optional] [readonly] 
**name** | **str** | The description of the project category. | [optional] [readonly] 
**var_self** | **str** | The URL of the project category. | [optional] [readonly] 

## Example

```python
from openapi_client.models.updated_project_category import UpdatedProjectCategory

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatedProjectCategory from a JSON string
updated_project_category_instance = UpdatedProjectCategory.from_json(json)
# print the JSON string representation of the object
print(UpdatedProjectCategory.to_json())

# convert the object into a dict
updated_project_category_dict = updated_project_category_instance.to_dict()
# create an instance of UpdatedProjectCategory from a dict
updated_project_category_from_dict = UpdatedProjectCategory.from_dict(updated_project_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


