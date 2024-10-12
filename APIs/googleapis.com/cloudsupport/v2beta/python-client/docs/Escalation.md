# Escalation

An escalation of a support case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**justification** | **str** | Required. A free text description to accompany the &#x60;reason&#x60; field above. Provides additional context on why the case is being escalated. | [optional] 
**reason** | **str** | Required. The reason why the Case is being escalated. | [optional] 

## Example

```python
from openapi_client.models.escalation import Escalation

# TODO update the JSON string below
json = "{}"
# create an instance of Escalation from a JSON string
escalation_instance = Escalation.from_json(json)
# print the JSON string representation of the object
print(Escalation.to_json())

# convert the object into a dict
escalation_dict = escalation_instance.to_dict()
# create an instance of Escalation from a dict
escalation_from_dict = Escalation.from_dict(escalation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


