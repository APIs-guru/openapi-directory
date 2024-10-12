# DebugSendResponse

Description of a NotificationHub Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DebugSendResult**](DebugSendResult.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.debug_send_response import DebugSendResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DebugSendResponse from a JSON string
debug_send_response_instance = DebugSendResponse.from_json(json)
# print the JSON string representation of the object
print(DebugSendResponse.to_json())

# convert the object into a dict
debug_send_response_dict = debug_send_response_instance.to_dict()
# create an instance of DebugSendResponse from a dict
debug_send_response_from_dict = DebugSendResponse.from_dict(debug_send_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


