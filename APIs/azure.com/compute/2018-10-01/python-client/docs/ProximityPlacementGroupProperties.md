# ProximityPlacementGroupProperties

Describes the properties of a Proximity Placement Group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_sets** | [**List[SubResource]**](SubResource.md) | A list of references to all availability sets in the proximity placement group. | [optional] [readonly] 
**proximity_placement_group_type** | **str** | Specifies the type of the proximity placement group. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **Standard** : Co-locate resources within an Azure region or Availability Zone. &lt;br&gt;&lt;br&gt; **Ultra** : For future use. | [optional] 
**virtual_machine_scale_sets** | [**List[SubResource]**](SubResource.md) | A list of references to all virtual machine scale sets in the proximity placement group. | [optional] [readonly] 
**virtual_machines** | [**List[SubResource]**](SubResource.md) | A list of references to all virtual machines in the proximity placement group. | [optional] [readonly] 

## Example

```python
from openapi_client.models.proximity_placement_group_properties import ProximityPlacementGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProximityPlacementGroupProperties from a JSON string
proximity_placement_group_properties_instance = ProximityPlacementGroupProperties.from_json(json)
# print the JSON string representation of the object
print(ProximityPlacementGroupProperties.to_json())

# convert the object into a dict
proximity_placement_group_properties_dict = proximity_placement_group_properties_instance.to_dict()
# create an instance of ProximityPlacementGroupProperties from a dict
proximity_placement_group_properties_from_dict = ProximityPlacementGroupProperties.from_dict(proximity_placement_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


