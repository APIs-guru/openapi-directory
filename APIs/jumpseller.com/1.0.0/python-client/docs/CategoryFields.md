# CategoryFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique identifier of the Category | [optional] 
**name** | **str** | Name of the Category | [optional] 
**parent_id** | **int** | Unique identifier of the Parent Category | [optional] 
**permalink** | **str** | Category unique URL path | [optional] 

## Example

```python
from openapi_client.models.category_fields import CategoryFields

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryFields from a JSON string
category_fields_instance = CategoryFields.from_json(json)
# print the JSON string representation of the object
print(CategoryFields.to_json())

# convert the object into a dict
category_fields_dict = category_fields_instance.to_dict()
# create an instance of CategoryFields from a dict
category_fields_from_dict = CategoryFields.from_dict(category_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


