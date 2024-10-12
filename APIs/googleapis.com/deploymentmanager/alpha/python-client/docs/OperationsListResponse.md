# OperationsListResponse

A response containing a partial list of operations and a page token used to build the next request if the request has been truncated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Output only. A token used to continue a truncated list request. | [optional] 
**operations** | [**List[Operation]**](Operation.md) | Output only. Operations contained in this list response. | [optional] 

## Example

```python
from openapi_client.models.operations_list_response import OperationsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsListResponse from a JSON string
operations_list_response_instance = OperationsListResponse.from_json(json)
# print the JSON string representation of the object
print(OperationsListResponse.to_json())

# convert the object into a dict
operations_list_response_dict = operations_list_response_instance.to_dict()
# create an instance of OperationsListResponse from a dict
operations_list_response_from_dict = OperationsListResponse.from_dict(operations_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


