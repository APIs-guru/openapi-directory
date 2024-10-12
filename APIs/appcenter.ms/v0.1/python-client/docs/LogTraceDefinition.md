# LogTraceDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_secret** | **str** |  | 
**expiration** | **datetime** |  | [optional] 
**install_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.log_trace_definition import LogTraceDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of LogTraceDefinition from a JSON string
log_trace_definition_instance = LogTraceDefinition.from_json(json)
# print the JSON string representation of the object
print(LogTraceDefinition.to_json())

# convert the object into a dict
log_trace_definition_dict = log_trace_definition_instance.to_dict()
# create an instance of LogTraceDefinition from a dict
log_trace_definition_from_dict = LogTraceDefinition.from_dict(log_trace_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


