# PolicyControllerToleration

Toleration of a node taint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effect** | **str** | Matches a taint effect. | [optional] 
**key** | **str** | Matches a taint key (not necessarily unique). | [optional] 
**operator** | **str** | Matches a taint operator. | [optional] 
**value** | **str** | Matches a taint value. | [optional] 

## Example

```python
from openapi_client.models.policy_controller_toleration import PolicyControllerToleration

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyControllerToleration from a JSON string
policy_controller_toleration_instance = PolicyControllerToleration.from_json(json)
# print the JSON string representation of the object
print(PolicyControllerToleration.to_json())

# convert the object into a dict
policy_controller_toleration_dict = policy_controller_toleration_instance.to_dict()
# create an instance of PolicyControllerToleration from a dict
policy_controller_toleration_from_dict = PolicyControllerToleration.from_dict(policy_controller_toleration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


