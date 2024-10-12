# Request

The kinds of update requests that can be made.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_item** | [**CreateItemRequest**](CreateItemRequest.md) |  | [optional] 
**delete_item** | [**DeleteItemRequest**](DeleteItemRequest.md) |  | [optional] 
**move_item** | [**MoveItemRequest**](MoveItemRequest.md) |  | [optional] 
**update_form_info** | [**UpdateFormInfoRequest**](UpdateFormInfoRequest.md) |  | [optional] 
**update_item** | [**UpdateItemRequest**](UpdateItemRequest.md) |  | [optional] 
**update_settings** | [**UpdateSettingsRequest**](UpdateSettingsRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.request import Request

# TODO update the JSON string below
json = "{}"
# create an instance of Request from a JSON string
request_instance = Request.from_json(json)
# print the JSON string representation of the object
print(Request.to_json())

# convert the object into a dict
request_dict = request_instance.to_dict()
# create an instance of Request from a dict
request_from_dict = Request.from_dict(request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


