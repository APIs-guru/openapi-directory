# SortParam


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **int** |  | [optional] 
**var_field** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.sort_param import SortParam

# TODO update the JSON string below
json = "{}"
# create an instance of SortParam from a JSON string
sort_param_instance = SortParam.from_json(json)
# print the JSON string representation of the object
print(SortParam.to_json())

# convert the object into a dict
sort_param_dict = sort_param_instance.to_dict()
# create an instance of SortParam from a dict
sort_param_from_dict = SortParam.from_dict(sort_param_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


