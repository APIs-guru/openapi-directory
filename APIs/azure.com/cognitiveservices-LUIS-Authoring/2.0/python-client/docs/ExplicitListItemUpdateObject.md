# ExplicitListItemUpdateObject

Model object for updating an explicit (exception) list item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit_list_item** | **str** | The explicit list item. | [optional] 

## Example

```python
from openapi_client.models.explicit_list_item_update_object import ExplicitListItemUpdateObject

# TODO update the JSON string below
json = "{}"
# create an instance of ExplicitListItemUpdateObject from a JSON string
explicit_list_item_update_object_instance = ExplicitListItemUpdateObject.from_json(json)
# print the JSON string representation of the object
print(ExplicitListItemUpdateObject.to_json())

# convert the object into a dict
explicit_list_item_update_object_dict = explicit_list_item_update_object_instance.to_dict()
# create an instance of ExplicitListItemUpdateObject from a dict
explicit_list_item_update_object_from_dict = ExplicitListItemUpdateObject.from_dict(explicit_list_item_update_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


