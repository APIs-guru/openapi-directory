# V1LogEntryOperation

Additional information about a potentially long-running operation with which a log entry is associated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | **bool** | Optional. Set this to True if this is the first log entry in the operation. | [optional] 
**id** | **str** | Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation. | [optional] 
**last** | **bool** | Optional. Set this to True if this is the last log entry in the operation. | [optional] 
**producer** | **str** | Optional. An arbitrary producer identifier. The combination of &#x60;id&#x60; and &#x60;producer&#x60; must be globally unique. Examples for &#x60;producer&#x60;: &#x60;\&quot;MyDivision.MyBigCompany.com\&quot;&#x60;, &#x60;\&quot;github.com/MyProject/MyApplication\&quot;&#x60;. | [optional] 

## Example

```python
from openapi_client.models.v1_log_entry_operation import V1LogEntryOperation

# TODO update the JSON string below
json = "{}"
# create an instance of V1LogEntryOperation from a JSON string
v1_log_entry_operation_instance = V1LogEntryOperation.from_json(json)
# print the JSON string representation of the object
print(V1LogEntryOperation.to_json())

# convert the object into a dict
v1_log_entry_operation_dict = v1_log_entry_operation_instance.to_dict()
# create an instance of V1LogEntryOperation from a dict
v1_log_entry_operation_from_dict = V1LogEntryOperation.from_dict(v1_log_entry_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


