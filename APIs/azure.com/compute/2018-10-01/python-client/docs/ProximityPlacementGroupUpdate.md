# ProximityPlacementGroupUpdate

Specifies information about the proximity placement group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.proximity_placement_group_update import ProximityPlacementGroupUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ProximityPlacementGroupUpdate from a JSON string
proximity_placement_group_update_instance = ProximityPlacementGroupUpdate.from_json(json)
# print the JSON string representation of the object
print(ProximityPlacementGroupUpdate.to_json())

# convert the object into a dict
proximity_placement_group_update_dict = proximity_placement_group_update_instance.to_dict()
# create an instance of ProximityPlacementGroupUpdate from a dict
proximity_placement_group_update_from_dict = ProximityPlacementGroupUpdate.from_dict(proximity_placement_group_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


