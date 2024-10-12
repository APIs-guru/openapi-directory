# OperationListResponse

Lists all of the available REST API operations for Azure Active Directory Connect Health.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token to get next set of operations. | [optional] 
**next_link** | **str** | URL to get the next set of operation list results if there are any. | [optional] [readonly] 
**total_count** | **int** | The total count of operations. | [optional] 
**value** | [**List[Operation]**](Operation.md) | List of operations supported by the Microsoft.ADHybridHealthService resource provider. | [optional] [readonly] 

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


