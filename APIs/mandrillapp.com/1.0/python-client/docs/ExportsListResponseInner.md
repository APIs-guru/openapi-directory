# ExportsListResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**finished_at** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**result_url** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.exports_list_response_inner import ExportsListResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ExportsListResponseInner from a JSON string
exports_list_response_inner_instance = ExportsListResponseInner.from_json(json)
# print the JSON string representation of the object
print(ExportsListResponseInner.to_json())

# convert the object into a dict
exports_list_response_inner_dict = exports_list_response_inner_instance.to_dict()
# create an instance of ExportsListResponseInner from a dict
exports_list_response_inner_from_dict = ExportsListResponseInner.from_dict(exports_list_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


