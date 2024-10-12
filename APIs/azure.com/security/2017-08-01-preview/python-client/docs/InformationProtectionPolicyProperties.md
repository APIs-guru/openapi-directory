# InformationProtectionPolicyProperties

describes properties of an information protection policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**information_types** | [**Dict[str, InformationType]**](InformationType.md) | The sensitivity information types. | [optional] 
**labels** | [**Dict[str, SensitivityLabel]**](SensitivityLabel.md) | Dictionary of sensitivity labels. | [optional] 
**last_modified_utc** | **datetime** | Describes the last UTC time the policy was modified. | [optional] [readonly] 

## Example

```python
from openapi_client.models.information_protection_policy_properties import InformationProtectionPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of InformationProtectionPolicyProperties from a JSON string
information_protection_policy_properties_instance = InformationProtectionPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(InformationProtectionPolicyProperties.to_json())

# convert the object into a dict
information_protection_policy_properties_dict = information_protection_policy_properties_instance.to_dict()
# create an instance of InformationProtectionPolicyProperties from a dict
information_protection_policy_properties_from_dict = InformationProtectionPolicyProperties.from_dict(information_protection_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


