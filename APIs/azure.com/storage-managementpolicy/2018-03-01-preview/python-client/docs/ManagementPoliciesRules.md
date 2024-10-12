# ManagementPoliciesRules

The Storage Account ManagementPolicies Rules, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | **object** | The Storage Account ManagementPolicies Rules, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts. | [optional] 

## Example

```python
from openapi_client.models.management_policies_rules import ManagementPoliciesRules

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementPoliciesRules from a JSON string
management_policies_rules_instance = ManagementPoliciesRules.from_json(json)
# print the JSON string representation of the object
print(ManagementPoliciesRules.to_json())

# convert the object into a dict
management_policies_rules_dict = management_policies_rules_instance.to_dict()
# create an instance of ManagementPoliciesRules from a dict
management_policies_rules_from_dict = ManagementPoliciesRules.from_dict(management_policies_rules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


