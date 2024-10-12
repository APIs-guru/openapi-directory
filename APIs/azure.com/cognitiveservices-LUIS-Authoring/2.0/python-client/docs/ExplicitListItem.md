# ExplicitListItem

Explicit (exception) list item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit_list_item** | **str** | The explicit list item value. | [optional] 
**id** | **int** | The explicit list item ID. | [optional] 

## Example

```python
from openapi_client.models.explicit_list_item import ExplicitListItem

# TODO update the JSON string below
json = "{}"
# create an instance of ExplicitListItem from a JSON string
explicit_list_item_instance = ExplicitListItem.from_json(json)
# print the JSON string representation of the object
print(ExplicitListItem.to_json())

# convert the object into a dict
explicit_list_item_dict = explicit_list_item_instance.to_dict()
# create an instance of ExplicitListItem from a dict
explicit_list_item_from_dict = ExplicitListItem.from_dict(explicit_list_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


