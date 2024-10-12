# Stacktrace

a stacktrace in a processed and prettyfied way

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exception** | [**Exception**](Exception.md) |  | [optional] 
**reason** | **str** |  | [optional] 
**threads** | [**List[Thread]**](Thread.md) |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.stacktrace import Stacktrace

# TODO update the JSON string below
json = "{}"
# create an instance of Stacktrace from a JSON string
stacktrace_instance = Stacktrace.from_json(json)
# print the JSON string representation of the object
print(Stacktrace.to_json())

# convert the object into a dict
stacktrace_dict = stacktrace_instance.to_dict()
# create an instance of Stacktrace from a dict
stacktrace_from_dict = Stacktrace.from_dict(stacktrace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


