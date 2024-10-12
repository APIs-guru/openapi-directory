# StateSponsoredAttack

A state-sponsored attack alert. Derived from audit logs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email of the user this incident was created for. | [optional] 

## Example

```python
from openapi_client.models.state_sponsored_attack import StateSponsoredAttack

# TODO update the JSON string below
json = "{}"
# create an instance of StateSponsoredAttack from a JSON string
state_sponsored_attack_instance = StateSponsoredAttack.from_json(json)
# print the JSON string representation of the object
print(StateSponsoredAttack.to_json())

# convert the object into a dict
state_sponsored_attack_dict = state_sponsored_attack_instance.to_dict()
# create an instance of StateSponsoredAttack from a dict
state_sponsored_attack_from_dict = StateSponsoredAttack.from_dict(state_sponsored_attack_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


