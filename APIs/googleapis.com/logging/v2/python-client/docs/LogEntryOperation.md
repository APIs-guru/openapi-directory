# LogEntryOperation

Additional information about a potentially long-running operation with which a log entry is associated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | **bool** | Optional. Set this to True if this is the first log entry in the operation. | [optional] 
**id** | **str** | Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation. | [optional] 
**last** | **bool** | Optional. Set this to True if this is the last log entry in the operation. | [optional] 
**producer** | **str** | Optional. An arbitrary producer identifier. The combination of id and producer must be globally unique. Examples for producer: \&quot;MyDivision.MyBigCompany.com\&quot;, \&quot;github.com/MyProject/MyApplication\&quot;. | [optional] 

## Example

```python
from openapi_client.models.log_entry_operation import LogEntryOperation

# TODO update the JSON string below
json = "{}"
# create an instance of LogEntryOperation from a JSON string
log_entry_operation_instance = LogEntryOperation.from_json(json)
# print the JSON string representation of the object
print(LogEntryOperation.to_json())

# convert the object into a dict
log_entry_operation_dict = log_entry_operation_instance.to_dict()
# create an instance of LogEntryOperation from a dict
log_entry_operation_from_dict = LogEntryOperation.from_dict(log_entry_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


