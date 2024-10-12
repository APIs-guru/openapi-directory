# PlacementPolicy

PlacementPolicy describes a group placement policy for the VMs controlled by this AllocationPolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collocation** | **str** | UNSPECIFIED vs. COLLOCATED (default UNSPECIFIED). Use COLLOCATED when you want VMs to be located close to each other for low network latency between the VMs. No placement policy will be generated when collocation is UNSPECIFIED. | [optional] 
**max_distance** | **str** | When specified, causes the job to fail if more than max_distance logical switches are required between VMs. Batch uses the most compact possible placement of VMs even when max_distance is not specified. An explicit max_distance makes that level of compactness a strict requirement. Not yet implemented | [optional] 

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


