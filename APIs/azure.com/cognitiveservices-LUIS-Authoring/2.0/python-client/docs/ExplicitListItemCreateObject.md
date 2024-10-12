# ExplicitListItemCreateObject

Object model for creating an explicit (exception) list item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit_list_item** | **str** | The explicit list item. | [optional] 

## Example

```python
from openapi_client.models.explicit_list_item_create_object import ExplicitListItemCreateObject

# TODO update the JSON string below
json = "{}"
# create an instance of ExplicitListItemCreateObject from a JSON string
explicit_list_item_create_object_instance = ExplicitListItemCreateObject.from_json(json)
# print the JSON string representation of the object
print(ExplicitListItemCreateObject.to_json())

# convert the object into a dict
explicit_list_item_create_object_dict = explicit_list_item_create_object_instance.to_dict()
# create an instance of ExplicitListItemCreateObject from a dict
explicit_list_item_create_object_from_dict = ExplicitListItemCreateObject.from_dict(explicit_list_item_create_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


