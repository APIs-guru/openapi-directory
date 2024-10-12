# LifetimeAction

Action and its trigger that will be performed by Key Vault over the lifetime of a certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**Action**](Action.md) |  | [optional] 
**trigger** | [**Trigger**](Trigger.md) |  | [optional] 

## Example

```python
from openapi_client.models.lifetime_action import LifetimeAction

# TODO update the JSON string below
json = "{}"
# create an instance of LifetimeAction from a JSON string
lifetime_action_instance = LifetimeAction.from_json(json)
# print the JSON string representation of the object
print(LifetimeAction.to_json())

# convert the object into a dict
lifetime_action_dict = lifetime_action_instance.to_dict()
# create an instance of LifetimeAction from a dict
lifetime_action_from_dict = LifetimeAction.from_dict(lifetime_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


