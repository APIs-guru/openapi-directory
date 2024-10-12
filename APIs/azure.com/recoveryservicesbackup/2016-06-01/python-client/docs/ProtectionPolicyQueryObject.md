# ProtectionPolicyQueryObject

This object filters the list of backup policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | The backup management type associated with the backup policy. | [optional] 

## Example

```python
from openapi_client.models.protection_policy_query_object import ProtectionPolicyQueryObject

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionPolicyQueryObject from a JSON string
protection_policy_query_object_instance = ProtectionPolicyQueryObject.from_json(json)
# print the JSON string representation of the object
print(ProtectionPolicyQueryObject.to_json())

# convert the object into a dict
protection_policy_query_object_dict = protection_policy_query_object_instance.to_dict()
# create an instance of ProtectionPolicyQueryObject from a dict
protection_policy_query_object_from_dict = ProtectionPolicyQueryObject.from_dict(protection_policy_query_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


