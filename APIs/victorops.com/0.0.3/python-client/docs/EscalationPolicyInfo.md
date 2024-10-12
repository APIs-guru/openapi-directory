# EscalationPolicyInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | [**EscalationPolicy**](EscalationPolicy.md) |  | 
**team** | [**Team**](Team.md) |  | [optional] 

## Example

```python
from openapi_client.models.escalation_policy_info import EscalationPolicyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EscalationPolicyInfo from a JSON string
escalation_policy_info_instance = EscalationPolicyInfo.from_json(json)
# print the JSON string representation of the object
print(EscalationPolicyInfo.to_json())

# convert the object into a dict
escalation_policy_info_dict = escalation_policy_info_instance.to_dict()
# create an instance of EscalationPolicyInfo from a dict
escalation_policy_info_from_dict = EscalationPolicyInfo.from_dict(escalation_policy_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


