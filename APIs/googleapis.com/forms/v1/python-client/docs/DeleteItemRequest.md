# DeleteItemRequest

Delete an item in a form.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**Location**](Location.md) |  | [optional] 

## Example

```python
from openapi_client.models.delete_item_request import DeleteItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteItemRequest from a JSON string
delete_item_request_instance = DeleteItemRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteItemRequest.to_json())

# convert the object into a dict
delete_item_request_dict = delete_item_request_instance.to_dict()
# create an instance of DeleteItemRequest from a dict
delete_item_request_from_dict = DeleteItemRequest.from_dict(delete_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


