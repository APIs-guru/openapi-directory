# RegistryPolicies

An object that represents policies for a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quarantine_policy** | [**QuarantinePolicy**](QuarantinePolicy.md) |  | [optional] 
**trust_policy** | [**TrustPolicy**](TrustPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.registry_policies import RegistryPolicies

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryPolicies from a JSON string
registry_policies_instance = RegistryPolicies.from_json(json)
# print the JSON string representation of the object
print(RegistryPolicies.to_json())

# convert the object into a dict
registry_policies_dict = registry_policies_instance.to_dict()
# create an instance of RegistryPolicies from a dict
registry_policies_from_dict = RegistryPolicies.from_dict(registry_policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


