# ManagedInstanceAdministratorListResult

A list of managed instance administrators.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[ManagedInstanceAdministrator]**](ManagedInstanceAdministrator.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_instance_administrator_list_result import ManagedInstanceAdministratorListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceAdministratorListResult from a JSON string
managed_instance_administrator_list_result_instance = ManagedInstanceAdministratorListResult.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceAdministratorListResult.to_json())

# convert the object into a dict
managed_instance_administrator_list_result_dict = managed_instance_administrator_list_result_instance.to_dict()
# create an instance of ManagedInstanceAdministratorListResult from a dict
managed_instance_administrator_list_result_from_dict = ManagedInstanceAdministratorListResult.from_dict(managed_instance_administrator_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


