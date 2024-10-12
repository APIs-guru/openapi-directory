# ProtectionPolicy

The base class for a backup policy. Workload-specific backup policies are derived from this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | This property is used as the discriminator for deciding the specific types in the polymorphic chain of types. | [optional] 
**protected_items_count** | **int** | The number of items associated with this policy. | [optional] 

## Example

```python
from openapi_client.models.protection_policy import ProtectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionPolicy from a JSON string
protection_policy_instance = ProtectionPolicy.from_json(json)
# print the JSON string representation of the object
print(ProtectionPolicy.to_json())

# convert the object into a dict
protection_policy_dict = protection_policy_instance.to_dict()
# create an instance of ProtectionPolicy from a dict
protection_policy_from_dict = ProtectionPolicy.from_dict(protection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


