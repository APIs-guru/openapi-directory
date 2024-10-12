# SimpleListWrapperApplicationRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **object** |  | [optional] 
**items** | [**List[ApplicationRole]**](ApplicationRole.md) |  | [optional] 
**max_results** | **int** |  | [optional] 
**paging_callback** | **object** |  | [optional] 
**size** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.simple_list_wrapper_application_role import SimpleListWrapperApplicationRole

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleListWrapperApplicationRole from a JSON string
simple_list_wrapper_application_role_instance = SimpleListWrapperApplicationRole.from_json(json)
# print the JSON string representation of the object
print(SimpleListWrapperApplicationRole.to_json())

# convert the object into a dict
simple_list_wrapper_application_role_dict = simple_list_wrapper_application_role_instance.to_dict()
# create an instance of SimpleListWrapperApplicationRole from a dict
simple_list_wrapper_application_role_from_dict = SimpleListWrapperApplicationRole.from_dict(simple_list_wrapper_application_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


