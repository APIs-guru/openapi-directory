# EscalationPolicyInfoList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policies** | [**List[EscalationPolicyInfo]**](EscalationPolicyInfo.md) |  | 

## Example

```python
from openapi_client.models.escalation_policy_info_list import EscalationPolicyInfoList

# TODO update the JSON string below
json = "{}"
# create an instance of EscalationPolicyInfoList from a JSON string
escalation_policy_info_list_instance = EscalationPolicyInfoList.from_json(json)
# print the JSON string representation of the object
print(EscalationPolicyInfoList.to_json())

# convert the object into a dict
escalation_policy_info_list_dict = escalation_policy_info_list_instance.to_dict()
# create an instance of EscalationPolicyInfoList from a dict
escalation_policy_info_list_from_dict = EscalationPolicyInfoList.from_dict(escalation_policy_info_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


