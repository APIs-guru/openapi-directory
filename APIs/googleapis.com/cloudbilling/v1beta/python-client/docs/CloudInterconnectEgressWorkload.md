# CloudInterconnectEgressWorkload

Includes the estimate for Interconnect Data Transfer only. To specify usage for data transfer between VMs and internet end-points, use the Standard Tier Internet Data Transfer interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**egress_rate** | [**Usage**](Usage.md) |  | [optional] 
**interconnect_connection_location** | **str** | Locations in the [Interconnect connection location table](https://cloud.google.com/vpc/network-pricing#interconnect-pricing). These are the Interconnect Data Transfer charges. | [optional] 

## Example

```python
from openapi_client.models.cloud_interconnect_egress_workload import CloudInterconnectEgressWorkload

# TODO update the JSON string below
json = "{}"
# create an instance of CloudInterconnectEgressWorkload from a JSON string
cloud_interconnect_egress_workload_instance = CloudInterconnectEgressWorkload.from_json(json)
# print the JSON string representation of the object
print(CloudInterconnectEgressWorkload.to_json())

# convert the object into a dict
cloud_interconnect_egress_workload_dict = cloud_interconnect_egress_workload_instance.to_dict()
# create an instance of CloudInterconnectEgressWorkload from a dict
cloud_interconnect_egress_workload_from_dict = CloudInterconnectEgressWorkload.from_dict(cloud_interconnect_egress_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


