# OperationListResponse

A list of operations that can be performed by the Data Factory service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to the next page of results, if any remaining results exist. | [optional] 
**value** | [**List[Operation]**](Operation.md) | List of Data Factory operations supported by the Data Factory resource provider. | [optional] 

## Example

```python
from openapi_client.models.operation_list_response import OperationListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OperationListResponse from a JSON string
operation_list_response_instance = OperationListResponse.from_json(json)
# print the JSON string representation of the object
print(OperationListResponse.to_json())

# convert the object into a dict
operation_list_response_dict = operation_list_response_instance.to_dict()
# create an instance of OperationListResponse from a dict
operation_list_response_from_dict = OperationListResponse.from_dict(operation_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


