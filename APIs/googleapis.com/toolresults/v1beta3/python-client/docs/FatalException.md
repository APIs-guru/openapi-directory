# FatalException

Additional details for a fatal exception.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stack_trace** | [**StackTrace**](StackTrace.md) |  | [optional] 

## Example

```python
from openapi_client.models.fatal_exception import FatalException

# TODO update the JSON string below
json = "{}"
# create an instance of FatalException from a JSON string
fatal_exception_instance = FatalException.from_json(json)
# print the JSON string representation of the object
print(FatalException.to_json())

# convert the object into a dict
fatal_exception_dict = fatal_exception_instance.to_dict()
# create an instance of FatalException from a dict
fatal_exception_from_dict = FatalException.from_dict(fatal_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


