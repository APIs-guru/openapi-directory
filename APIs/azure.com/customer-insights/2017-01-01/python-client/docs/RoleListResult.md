# RoleListResult

The response of list role assignment operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] 
**value** | [**List[RoleResourceFormat]**](RoleResourceFormat.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.role_list_result import RoleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RoleListResult from a JSON string
role_list_result_instance = RoleListResult.from_json(json)
# print the JSON string representation of the object
print(RoleListResult.to_json())

# convert the object into a dict
role_list_result_dict = role_list_result_instance.to_dict()
# create an instance of RoleListResult from a dict
role_list_result_from_dict = RoleListResult.from_dict(role_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


