# OperationsListResponse

Operations list response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Operation]**](Operation.md) | List of operation resources. | [optional] 
**kind** | **str** | This is always &#x60;sql#operationsList&#x60;. | [optional] 
**next_page_token** | **str** | The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 

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


