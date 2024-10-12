# OperationWorkerResponse

The base class for operation result responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | **Dict[str, List[str]]** | The HTTP headers associated with this operation. | [optional] 
**status_code** | **str** | The HTTP status code of the operation. | [optional] 

## Example

```python
from openapi_client.models.operation_worker_response import OperationWorkerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OperationWorkerResponse from a JSON string
operation_worker_response_instance = OperationWorkerResponse.from_json(json)
# print the JSON string representation of the object
print(OperationWorkerResponse.to_json())

# convert the object into a dict
operation_worker_response_dict = operation_worker_response_instance.to_dict()
# create an instance of OperationWorkerResponse from a dict
operation_worker_response_from_dict = OperationWorkerResponse.from_dict(operation_worker_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


