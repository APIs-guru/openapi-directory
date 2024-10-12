# EscalationPolicyList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policies** | [**List[EscalationPolicy]**](EscalationPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.escalation_policy_list import EscalationPolicyList

# TODO update the JSON string below
json = "{}"
# create an instance of EscalationPolicyList from a JSON string
escalation_policy_list_instance = EscalationPolicyList.from_json(json)
# print the JSON string representation of the object
print(EscalationPolicyList.to_json())

# convert the object into a dict
escalation_policy_list_dict = escalation_policy_list_instance.to_dict()
# create an instance of EscalationPolicyList from a dict
escalation_policy_list_from_dict = EscalationPolicyList.from_dict(escalation_policy_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


