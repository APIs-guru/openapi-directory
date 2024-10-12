# ApplicationPackageLockingPolicyDefinition

Managed application locking policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_actions** | **List[str]** | The deny assignment excluded actions. | [optional] 

## Example

```python
from openapi_client.models.application_package_locking_policy_definition import ApplicationPackageLockingPolicyDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPackageLockingPolicyDefinition from a JSON string
application_package_locking_policy_definition_instance = ApplicationPackageLockingPolicyDefinition.from_json(json)
# print the JSON string representation of the object
print(ApplicationPackageLockingPolicyDefinition.to_json())

# convert the object into a dict
application_package_locking_policy_definition_dict = application_package_locking_policy_definition_instance.to_dict()
# create an instance of ApplicationPackageLockingPolicyDefinition from a dict
application_package_locking_policy_definition_from_dict = ApplicationPackageLockingPolicyDefinition.from_dict(application_package_locking_policy_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


