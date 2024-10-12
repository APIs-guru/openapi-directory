# InformationProtectionPolicy

Information protection policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**InformationProtectionPolicyProperties**](InformationProtectionPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.information_protection_policy import InformationProtectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of InformationProtectionPolicy from a JSON string
information_protection_policy_instance = InformationProtectionPolicy.from_json(json)
# print the JSON string representation of the object
print(InformationProtectionPolicy.to_json())

# convert the object into a dict
information_protection_policy_dict = information_protection_policy_instance.to_dict()
# create an instance of InformationProtectionPolicy from a dict
information_protection_policy_from_dict = InformationProtectionPolicy.from_dict(information_protection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


