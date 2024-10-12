# SimpleListWrapperGroupName


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **object** |  | [optional] 
**items** | [**List[GroupName]**](GroupName.md) |  | [optional] 
**max_results** | **int** |  | [optional] 
**paging_callback** | **object** |  | [optional] 
**size** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.simple_list_wrapper_group_name import SimpleListWrapperGroupName

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleListWrapperGroupName from a JSON string
simple_list_wrapper_group_name_instance = SimpleListWrapperGroupName.from_json(json)
# print the JSON string representation of the object
print(SimpleListWrapperGroupName.to_json())

# convert the object into a dict
simple_list_wrapper_group_name_dict = simple_list_wrapper_group_name_instance.to_dict()
# create an instance of SimpleListWrapperGroupName from a dict
simple_list_wrapper_group_name_from_dict = SimpleListWrapperGroupName.from_dict(simple_list_wrapper_group_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


