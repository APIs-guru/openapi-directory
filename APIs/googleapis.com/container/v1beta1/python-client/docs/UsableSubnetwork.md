# UsableSubnetwork

UsableSubnetwork resource returns the subnetwork name, its associated network and the primary CIDR range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_cidr_range** | **str** | The range of internal addresses that are owned by this subnetwork. | [optional] 
**network** | **str** | Network Name. Example: projects/my-project/global/networks/my-network | [optional] 
**secondary_ip_ranges** | [**List[UsableSubnetworkSecondaryRange]**](UsableSubnetworkSecondaryRange.md) | Secondary IP ranges. | [optional] 
**status_message** | **str** | A human readable status message representing the reasons for cases where the caller cannot use the secondary ranges under the subnet. For example if the secondary_ip_ranges is empty due to a permission issue, an insufficient permission message will be given by status_message. | [optional] 
**subnetwork** | **str** | Subnetwork Name. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet | [optional] 

## Example

```python
from openapi_client.models.usable_subnetwork import UsableSubnetwork

# TODO update the JSON string below
json = "{}"
# create an instance of UsableSubnetwork from a JSON string
usable_subnetwork_instance = UsableSubnetwork.from_json(json)
# print the JSON string representation of the object
print(UsableSubnetwork.to_json())

# convert the object into a dict
usable_subnetwork_dict = usable_subnetwork_instance.to_dict()
# create an instance of UsableSubnetwork from a dict
usable_subnetwork_from_dict = UsableSubnetwork.from_dict(usable_subnetwork_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


