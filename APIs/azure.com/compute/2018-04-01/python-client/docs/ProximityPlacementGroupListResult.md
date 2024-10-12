# ProximityPlacementGroupListResult

The List Proximity Placement Group operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of proximity placement groups. | [optional] 
**value** | [**List[ProximityPlacementGroup]**](ProximityPlacementGroup.md) | The list of proximity placement groups | 

## Example

```python
from openapi_client.models.proximity_placement_group_list_result import ProximityPlacementGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProximityPlacementGroupListResult from a JSON string
proximity_placement_group_list_result_instance = ProximityPlacementGroupListResult.from_json(json)
# print the JSON string representation of the object
print(ProximityPlacementGroupListResult.to_json())

# convert the object into a dict
proximity_placement_group_list_result_dict = proximity_placement_group_list_result_instance.to_dict()
# create an instance of ProximityPlacementGroupListResult from a dict
proximity_placement_group_list_result_from_dict = ProximityPlacementGroupListResult.from_dict(proximity_placement_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


