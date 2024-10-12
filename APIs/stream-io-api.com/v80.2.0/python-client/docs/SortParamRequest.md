# SortParamRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **int** |  | [optional] 
**var_field** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.sort_param_request import SortParamRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SortParamRequest from a JSON string
sort_param_request_instance = SortParamRequest.from_json(json)
# print the JSON string representation of the object
print(SortParamRequest.to_json())

# convert the object into a dict
sort_param_request_dict = sort_param_request_instance.to_dict()
# create an instance of SortParamRequest from a dict
sort_param_request_from_dict = SortParamRequest.from_dict(sort_param_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


