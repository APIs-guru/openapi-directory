# PaginationParamsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_gt** | **int** |  | [optional] 
**id_gte** | **int** |  | [optional] 
**id_lt** | **int** |  | [optional] 
**id_lte** | **int** |  | [optional] 
**limit** | **int** |  | [optional] 
**offset** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.pagination_params_request import PaginationParamsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PaginationParamsRequest from a JSON string
pagination_params_request_instance = PaginationParamsRequest.from_json(json)
# print the JSON string representation of the object
print(PaginationParamsRequest.to_json())

# convert the object into a dict
pagination_params_request_dict = pagination_params_request_instance.to_dict()
# create an instance of PaginationParamsRequest from a dict
pagination_params_request_from_dict = PaginationParamsRequest.from_dict(pagination_params_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


