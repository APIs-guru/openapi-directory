# PolicyContractProperties

Policy contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_content** | **str** | Json escaped Xml Encoded contents of the Policy. | 

## Example

```python
from openapi_client.models.policy_contract_properties import PolicyContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyContractProperties from a JSON string
policy_contract_properties_instance = PolicyContractProperties.from_json(json)
# print the JSON string representation of the object
print(PolicyContractProperties.to_json())

# convert the object into a dict
policy_contract_properties_dict = policy_contract_properties_instance.to_dict()
# create an instance of PolicyContractProperties from a dict
policy_contract_properties_from_dict = PolicyContractProperties.from_dict(policy_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


