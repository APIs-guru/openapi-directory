# WorkstationCluster

A workstation cluster resource in the Cloud Workstations API. Defines a group of workstations in a particular region and the VPC network they're attached to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Optional. Client-specified annotations. | [optional] 
**conditions** | [**List[Status]**](Status.md) | Output only. Status conditions describing the workstation cluster&#39;s current state. | [optional] [readonly] 
**control_plane_ip** | **str** | Output only. The private IP address of the control plane for this workstation cluster. Workstation VMs need access to this IP address to work with the service, so make sure that your firewall rules allow egress from the workstation VMs to this address. | [optional] [readonly] 
**create_time** | **str** | Output only. Time when this workstation cluster was created. | [optional] [readonly] 
**degraded** | **bool** | Output only. Whether this workstation cluster is in degraded mode, in which case it may require user action to restore full functionality. Details can be found in conditions. | [optional] [readonly] 
**delete_time** | **str** | Output only. Time when this workstation cluster was soft-deleted. | [optional] [readonly] 
**display_name** | **str** | Optional. Human-readable name for this workstation cluster. | [optional] 
**domain_config** | [**DomainConfig**](DomainConfig.md) |  | [optional] 
**etag** | **str** | Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding. | [optional] 
**labels** | **Dict[str, str]** | Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation cluster and that are also propagated to the underlying Compute Engine resources. | [optional] 
**name** | **str** | Identifier. Full name of this workstation cluster. | [optional] 
**network** | **str** | Immutable. Name of the Compute Engine network in which instances associated with this workstation cluster will be created. | [optional] 
**private_cluster_config** | [**PrivateClusterConfig**](PrivateClusterConfig.md) |  | [optional] 
**reconciling** | **bool** | Output only. Indicates whether this workstation cluster is currently being updated to match its intended state. | [optional] [readonly] 
**subnetwork** | **str** | Immutable. Name of the Compute Engine subnetwork in which instances associated with this workstation cluster will be created. Must be part of the subnetwork specified for this workstation cluster. | [optional] 
**uid** | **str** | Output only. A system-assigned unique identifier for this workstation cluster. | [optional] [readonly] 
**update_time** | **str** | Output only. Time when this workstation cluster was most recently updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workstation_cluster import WorkstationCluster

# TODO update the JSON string below
json = "{}"
# create an instance of WorkstationCluster from a JSON string
workstation_cluster_instance = WorkstationCluster.from_json(json)
# print the JSON string representation of the object
print(WorkstationCluster.to_json())

# convert the object into a dict
workstation_cluster_dict = workstation_cluster_instance.to_dict()
# create an instance of WorkstationCluster from a dict
workstation_cluster_from_dict = WorkstationCluster.from_dict(workstation_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


