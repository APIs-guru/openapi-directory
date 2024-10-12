# GetAllInputsResponseListInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | 
**created_at** | **datetime** |  | 
**created_by** | **str** |  | 
**id** | **str** |  | 
**name** | **str** |  | 
**owner** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.get_all_inputs_response_list_inner import GetAllInputsResponseListInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllInputsResponseListInner from a JSON string
get_all_inputs_response_list_inner_instance = GetAllInputsResponseListInner.from_json(json)
# print the JSON string representation of the object
print(GetAllInputsResponseListInner.to_json())

# convert the object into a dict
get_all_inputs_response_list_inner_dict = get_all_inputs_response_list_inner_instance.to_dict()
# create an instance of GetAllInputsResponseListInner from a dict
get_all_inputs_response_list_inner_from_dict = GetAllInputsResponseListInner.from_dict(get_all_inputs_response_list_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


