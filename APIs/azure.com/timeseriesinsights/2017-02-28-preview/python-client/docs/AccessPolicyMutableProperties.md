# AccessPolicyMutableProperties

An object that represents a set of mutable access policy resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | An description of the access policy. | [optional] 
**roles** | **List[str]** | The list of roles the principal is assigned on the environment. | [optional] 

## Example

```python
from openapi_client.models.access_policy_mutable_properties import AccessPolicyMutableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AccessPolicyMutableProperties from a JSON string
access_policy_mutable_properties_instance = AccessPolicyMutableProperties.from_json(json)
# print the JSON string representation of the object
print(AccessPolicyMutableProperties.to_json())

# convert the object into a dict
access_policy_mutable_properties_dict = access_policy_mutable_properties_instance.to_dict()
# create an instance of AccessPolicyMutableProperties from a dict
access_policy_mutable_properties_from_dict = AccessPolicyMutableProperties.from_dict(access_policy_mutable_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


