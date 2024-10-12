# ProximityPlacementGroup

Specifies information about the proximity placement group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProximityPlacementGroupProperties**](ProximityPlacementGroupProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.proximity_placement_group import ProximityPlacementGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ProximityPlacementGroup from a JSON string
proximity_placement_group_instance = ProximityPlacementGroup.from_json(json)
# print the JSON string representation of the object
print(ProximityPlacementGroup.to_json())

# convert the object into a dict
proximity_placement_group_dict = proximity_placement_group_instance.to_dict()
# create an instance of ProximityPlacementGroup from a dict
proximity_placement_group_from_dict = ProximityPlacementGroup.from_dict(proximity_placement_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


