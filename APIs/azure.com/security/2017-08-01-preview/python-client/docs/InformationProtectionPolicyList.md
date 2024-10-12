# InformationProtectionPolicyList

Information protection policies response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[InformationProtectionPolicy]**](InformationProtectionPolicy.md) | List of information protection policies. | [optional] 

## Example

```python
from openapi_client.models.information_protection_policy_list import InformationProtectionPolicyList

# TODO update the JSON string below
json = "{}"
# create an instance of InformationProtectionPolicyList from a JSON string
information_protection_policy_list_instance = InformationProtectionPolicyList.from_json(json)
# print the JSON string representation of the object
print(InformationProtectionPolicyList.to_json())

# convert the object into a dict
information_protection_policy_list_dict = information_protection_policy_list_instance.to_dict()
# create an instance of InformationProtectionPolicyList from a dict
information_protection_policy_list_from_dict = InformationProtectionPolicyList.from_dict(information_protection_policy_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


