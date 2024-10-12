# CategoryGroupV5

Message containing a category

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of what the category is grouping | [optional] 
**title** | **str** | The human readable title of the group | [optional] 

## Example

```python
from openapi_client.models.category_group_v5 import CategoryGroupV5

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryGroupV5 from a JSON string
category_group_v5_instance = CategoryGroupV5.from_json(json)
# print the JSON string representation of the object
print(CategoryGroupV5.to_json())

# convert the object into a dict
category_group_v5_dict = category_group_v5_instance.to_dict()
# create an instance of CategoryGroupV5 from a dict
category_group_v5_from_dict = CategoryGroupV5.from_dict(category_group_v5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


