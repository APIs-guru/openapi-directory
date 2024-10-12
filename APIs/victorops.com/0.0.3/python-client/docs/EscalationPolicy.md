# EscalationPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.escalation_policy import EscalationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of EscalationPolicy from a JSON string
escalation_policy_instance = EscalationPolicy.from_json(json)
# print the JSON string representation of the object
print(EscalationPolicy.to_json())

# convert the object into a dict
escalation_policy_dict = escalation_policy_instance.to_dict()
# create an instance of EscalationPolicy from a dict
escalation_policy_from_dict = EscalationPolicy.from_dict(escalation_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


