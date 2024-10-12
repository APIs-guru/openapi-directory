# MoveItemRequest

Move an item in a form.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_location** | [**Location**](Location.md) |  | [optional] 
**original_location** | [**Location**](Location.md) |  | [optional] 

## Example

```python
from openapi_client.models.move_item_request import MoveItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MoveItemRequest from a JSON string
move_item_request_instance = MoveItemRequest.from_json(json)
# print the JSON string representation of the object
print(MoveItemRequest.to_json())

# convert the object into a dict
move_item_request_dict = move_item_request_instance.to_dict()
# create an instance of MoveItemRequest from a dict
move_item_request_from_dict = MoveItemRequest.from_dict(move_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


