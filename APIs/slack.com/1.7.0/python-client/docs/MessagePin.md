# MessagePin


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** |  | [optional] 
**created** | **int** |  | [optional] 
**created_by** | **str** |  | [optional] 
**message** | [**ObjsMessage**](ObjsMessage.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.message_pin import MessagePin

# TODO update the JSON string below
json = "{}"
# create an instance of MessagePin from a JSON string
message_pin_instance = MessagePin.from_json(json)
# print the JSON string representation of the object
print(MessagePin.to_json())

# convert the object into a dict
message_pin_dict = message_pin_instance.to_dict()
# create an instance of MessagePin from a dict
message_pin_from_dict = MessagePin.from_dict(message_pin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


