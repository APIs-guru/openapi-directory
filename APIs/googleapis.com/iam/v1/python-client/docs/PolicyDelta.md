# PolicyDelta

The difference delta between two policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binding_deltas** | [**List[BindingDelta]**](BindingDelta.md) | The delta for Bindings between two policies. | [optional] 

## Example

```python
from openapi_client.models.policy_delta import PolicyDelta

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyDelta from a JSON string
policy_delta_instance = PolicyDelta.from_json(json)
# print the JSON string representation of the object
print(PolicyDelta.to_json())

# convert the object into a dict
policy_delta_dict = policy_delta_instance.to_dict()
# create an instance of PolicyDelta from a dict
policy_delta_from_dict = PolicyDelta.from_dict(policy_delta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


