# UsableSubnetworkSecondaryRange

Secondary IP range of a usable subnetwork.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_cidr_range** | **str** | The range of IP addresses belonging to this subnetwork secondary range. | [optional] 
**range_name** | **str** | The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance. | [optional] 
**status** | **str** | This field is to determine the status of the secondary range programmably. | [optional] 

## Example

```python
from openapi_client.models.usable_subnetwork_secondary_range import UsableSubnetworkSecondaryRange

# TODO update the JSON string below
json = "{}"
# create an instance of UsableSubnetworkSecondaryRange from a JSON string
usable_subnetwork_secondary_range_instance = UsableSubnetworkSecondaryRange.from_json(json)
# print the JSON string representation of the object
print(UsableSubnetworkSecondaryRange.to_json())

# convert the object into a dict
usable_subnetwork_secondary_range_dict = usable_subnetwork_secondary_range_instance.to_dict()
# create an instance of UsableSubnetworkSecondaryRange from a dict
usable_subnetwork_secondary_range_from_dict = UsableSubnetworkSecondaryRange.from_dict(usable_subnetwork_secondary_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


