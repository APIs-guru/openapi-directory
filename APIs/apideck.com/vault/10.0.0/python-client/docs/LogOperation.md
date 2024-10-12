# LogOperation

The request as defined in OpenApi Spec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The OpenApi Operation Id associated with the request | 
**name** | **str** | The OpenApi Operation name associated with the request | 

## Example

```python
from openapi_client.models.log_operation import LogOperation

# TODO update the JSON string below
json = "{}"
# create an instance of LogOperation from a JSON string
log_operation_instance = LogOperation.from_json(json)
# print the JSON string representation of the object
print(LogOperation.to_json())

# convert the object into a dict
log_operation_dict = log_operation_instance.to_dict()
# create an instance of LogOperation from a dict
log_operation_from_dict = LogOperation.from_dict(log_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


