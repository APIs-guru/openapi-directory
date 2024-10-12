# ManagedInstanceOperationListResult

The response to a list managed instance operations request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[ManagedInstanceOperation]**](ManagedInstanceOperation.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_instance_operation_list_result import ManagedInstanceOperationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceOperationListResult from a JSON string
managed_instance_operation_list_result_instance = ManagedInstanceOperationListResult.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceOperationListResult.to_json())

# convert the object into a dict
managed_instance_operation_list_result_dict = managed_instance_operation_list_result_instance.to_dict()
# create an instance of ManagedInstanceOperationListResult from a dict
managed_instance_operation_list_result_from_dict = ManagedInstanceOperationListResult.from_dict(managed_instance_operation_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


