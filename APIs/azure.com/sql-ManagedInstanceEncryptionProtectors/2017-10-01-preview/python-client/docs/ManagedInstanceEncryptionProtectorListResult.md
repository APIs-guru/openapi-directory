# ManagedInstanceEncryptionProtectorListResult

A list of managed instance encryption protectors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[ManagedInstanceEncryptionProtector]**](ManagedInstanceEncryptionProtector.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_instance_encryption_protector_list_result import ManagedInstanceEncryptionProtectorListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceEncryptionProtectorListResult from a JSON string
managed_instance_encryption_protector_list_result_instance = ManagedInstanceEncryptionProtectorListResult.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceEncryptionProtectorListResult.to_json())

# convert the object into a dict
managed_instance_encryption_protector_list_result_dict = managed_instance_encryption_protector_list_result_instance.to_dict()
# create an instance of ManagedInstanceEncryptionProtectorListResult from a dict
managed_instance_encryption_protector_list_result_from_dict = ManagedInstanceEncryptionProtectorListResult.from_dict(managed_instance_encryption_protector_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


