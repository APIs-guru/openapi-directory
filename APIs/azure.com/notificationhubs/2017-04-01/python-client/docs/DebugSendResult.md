# DebugSendResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure** | **float** | send failure | [optional] 
**results** | **object** | actual failure description | [optional] 
**success** | **float** | successful send | [optional] 

## Example

```python
from openapi_client.models.debug_send_result import DebugSendResult

# TODO update the JSON string below
json = "{}"
# create an instance of DebugSendResult from a JSON string
debug_send_result_instance = DebugSendResult.from_json(json)
# print the JSON string representation of the object
print(DebugSendResult.to_json())

# convert the object into a dict
debug_send_result_dict = debug_send_result_instance.to_dict()
# create an instance of DebugSendResult from a dict
debug_send_result_from_dict = DebugSendResult.from_dict(debug_send_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


