# CategoryEditFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the Category | [optional] 
**parent_id** | **int** | Unique identifier of the Parent Category | [optional] 

## Example

```python
from openapi_client.models.category_edit_fields import CategoryEditFields

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryEditFields from a JSON string
category_edit_fields_instance = CategoryEditFields.from_json(json)
# print the JSON string representation of the object
print(CategoryEditFields.to_json())

# convert the object into a dict
category_edit_fields_dict = category_edit_fields_instance.to_dict()
# create an instance of CategoryEditFields from a dict
category_edit_fields_from_dict = CategoryEditFields.from_dict(category_edit_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


