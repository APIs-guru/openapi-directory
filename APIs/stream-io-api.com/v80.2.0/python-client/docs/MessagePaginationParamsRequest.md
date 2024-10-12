# MessagePaginationParamsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at_after** | **datetime** |  | [optional] 
**created_at_after_or_equal** | **datetime** |  | [optional] 
**created_at_around** | **datetime** |  | [optional] 
**created_at_before** | **datetime** |  | [optional] 
**created_at_before_or_equal** | **datetime** |  | [optional] 
**id_around** | **str** |  | [optional] 
**id_gt** | **str** |  | [optional] 
**id_gte** | **str** |  | [optional] 
**id_lt** | **str** |  | [optional] 
**id_lte** | **str** |  | [optional] 
**limit** | **int** |  | [optional] 
**offset** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.message_pagination_params_request import MessagePaginationParamsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MessagePaginationParamsRequest from a JSON string
message_pagination_params_request_instance = MessagePaginationParamsRequest.from_json(json)
# print the JSON string representation of the object
print(MessagePaginationParamsRequest.to_json())

# convert the object into a dict
message_pagination_params_request_dict = message_pagination_params_request_instance.to_dict()
# create an instance of MessagePaginationParamsRequest from a dict
message_pagination_params_request_from_dict = MessagePaginationParamsRequest.from_dict(message_pagination_params_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


