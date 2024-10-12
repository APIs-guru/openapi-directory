# OperationsListDefaultResponse

The resource management error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_info** | [**List[OperationsListDefaultResponseAdditionalInfoInner]**](OperationsListDefaultResponseAdditionalInfoInner.md) | The error additional info. | [optional] [readonly] 
**code** | **str** | The error code. | [optional] [readonly] 
**details** | **List[object]** | The error details. | [optional] [readonly] 
**message** | **str** | The error message. | [optional] [readonly] 
**target** | **str** | The error target. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operations_list_default_response import OperationsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsListDefaultResponse from a JSON string
operations_list_default_response_instance = OperationsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(OperationsListDefaultResponse.to_json())

# convert the object into a dict
operations_list_default_response_dict = operations_list_default_response_instance.to_dict()
# create an instance of OperationsListDefaultResponse from a dict
operations_list_default_response_from_dict = OperationsListDefaultResponse.from_dict(operations_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


