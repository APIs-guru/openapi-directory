# OperationStatusResponse

Status Details of the long running operation for an environment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | status of the long running operation for an environment | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_status_response import OperationStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OperationStatusResponse from a JSON string
operation_status_response_instance = OperationStatusResponse.from_json(json)
# print the JSON string representation of the object
print(OperationStatusResponse.to_json())

# convert the object into a dict
operation_status_response_dict = operation_status_response_instance.to_dict()
# create an instance of OperationStatusResponse from a dict
operation_status_response_from_dict = OperationStatusResponse.from_dict(operation_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


