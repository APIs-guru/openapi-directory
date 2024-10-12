# ManagementPolicyDefinition

An object that defines the Lifecycle rule. Each definition is made up with a filters set and an actions set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**ManagementPolicyAction**](ManagementPolicyAction.md) |  | 
**filters** | [**ManagementPolicyFilter**](ManagementPolicyFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.management_policy_definition import ManagementPolicyDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementPolicyDefinition from a JSON string
management_policy_definition_instance = ManagementPolicyDefinition.from_json(json)
# print the JSON string representation of the object
print(ManagementPolicyDefinition.to_json())

# convert the object into a dict
management_policy_definition_dict = management_policy_definition_instance.to_dict()
# create an instance of ManagementPolicyDefinition from a dict
management_policy_definition_from_dict = ManagementPolicyDefinition.from_dict(management_policy_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


