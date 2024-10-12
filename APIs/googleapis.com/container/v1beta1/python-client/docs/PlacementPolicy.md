# PlacementPolicy

PlacementPolicy defines the placement policy used by the node pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_name** | **str** | If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned. | [optional] 
**tpu_topology** | **str** | TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies | [optional] 
**type** | **str** | The type of placement. | [optional] 

## Example

```python
from openapi_client.models.placement_policy import PlacementPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of PlacementPolicy from a JSON string
placement_policy_instance = PlacementPolicy.from_json(json)
# print the JSON string representation of the object
print(PlacementPolicy.to_json())

# convert the object into a dict
placement_policy_dict = placement_policy_instance.to_dict()
# create an instance of PlacementPolicy from a dict
placement_policy_from_dict = PlacementPolicy.from_dict(placement_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


