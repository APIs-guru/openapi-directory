# ManagementPolicyProperties

The Storage Account ManagementPolicy properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_modified_time** | **datetime** | Returns the date and time the ManagementPolicies was last modified. | [optional] [readonly] 
**policy** | [**ManagementPolicySchema**](ManagementPolicySchema.md) |  | 

## Example

```python
from openapi_client.models.management_policy_properties import ManagementPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementPolicyProperties from a JSON string
management_policy_properties_instance = ManagementPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(ManagementPolicyProperties.to_json())

# convert the object into a dict
management_policy_properties_dict = management_policy_properties_instance.to_dict()
# create an instance of ManagementPolicyProperties from a dict
management_policy_properties_from_dict = ManagementPolicyProperties.from_dict(management_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


