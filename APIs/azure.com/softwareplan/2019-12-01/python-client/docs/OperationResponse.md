# OperationResponse

Operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**OperationDisplay**](OperationDisplay.md) |  | [optional] 
**name** | **str** | Name of the operation | [optional] 
**origin** | **str** | Origin of the response | [optional] 

## Example

```python
from openapi_client.models.operation_response import OperationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OperationResponse from a JSON string
operation_response_instance = OperationResponse.from_json(json)
# print the JSON string representation of the object
print(OperationResponse.to_json())

# convert the object into a dict
operation_response_dict = operation_response_instance.to_dict()
# create an instance of OperationResponse from a dict
operation_response_from_dict = OperationResponse.from_dict(operation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


