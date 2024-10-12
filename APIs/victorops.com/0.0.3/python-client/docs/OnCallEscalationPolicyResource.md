# OnCallEscalationPolicyResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.on_call_escalation_policy_resource import OnCallEscalationPolicyResource

# TODO update the JSON string below
json = "{}"
# create an instance of OnCallEscalationPolicyResource from a JSON string
on_call_escalation_policy_resource_instance = OnCallEscalationPolicyResource.from_json(json)
# print the JSON string representation of the object
print(OnCallEscalationPolicyResource.to_json())

# convert the object into a dict
on_call_escalation_policy_resource_dict = on_call_escalation_policy_resource_instance.to_dict()
# create an instance of OnCallEscalationPolicyResource from a dict
on_call_escalation_policy_resource_from_dict = OnCallEscalationPolicyResource.from_dict(on_call_escalation_policy_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


