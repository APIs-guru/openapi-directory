# ManagedInstanceKeyListResult

A list of managed instance keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[ManagedInstanceKey]**](ManagedInstanceKey.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_instance_key_list_result import ManagedInstanceKeyListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceKeyListResult from a JSON string
managed_instance_key_list_result_instance = ManagedInstanceKeyListResult.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceKeyListResult.to_json())

# convert the object into a dict
managed_instance_key_list_result_dict = managed_instance_key_list_result_instance.to_dict()
# create an instance of ManagedInstanceKeyListResult from a dict
managed_instance_key_list_result_from_dict = ManagedInstanceKeyListResult.from_dict(managed_instance_key_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


