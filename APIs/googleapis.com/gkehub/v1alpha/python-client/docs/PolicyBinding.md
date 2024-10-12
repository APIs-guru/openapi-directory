# PolicyBinding

Binauthz policy that applies to this cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The relative resource name of the binauthz platform policy to audit. GKE platform policies have the following format: &#x60;projects/{project_number}/platforms/gke/policies/{policy_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.policy_binding import PolicyBinding

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyBinding from a JSON string
policy_binding_instance = PolicyBinding.from_json(json)
# print the JSON string representation of the object
print(PolicyBinding.to_json())

# convert the object into a dict
policy_binding_dict = policy_binding_instance.to_dict()
# create an instance of PolicyBinding from a dict
policy_binding_from_dict = PolicyBinding.from_dict(policy_binding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


