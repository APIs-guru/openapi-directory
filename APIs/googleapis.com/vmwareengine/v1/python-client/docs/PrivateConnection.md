# PrivateConnection

Private connection resource that provides connectivity for VMware Engine private clouds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Creation time of this resource. | [optional] [readonly] 
**description** | **str** | Optional. User-provided description for this private connection. | [optional] 
**name** | **str** | Output only. The resource name of the private connection. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: &#x60;projects/my-project/locations/us-central1/privateConnections/my-connection&#x60; | [optional] [readonly] 
**peering_id** | **str** | Output only. VPC network peering id between given network VPC and VMwareEngineNetwork. | [optional] [readonly] 
**peering_state** | **str** | Output only. Peering state between service network and VMware Engine network. | [optional] [readonly] 
**routing_mode** | **str** | Optional. Routing Mode. Default value is set to GLOBAL. For type &#x3D; PRIVATE_SERVICE_ACCESS, this field can be set to GLOBAL or REGIONAL, for other types only GLOBAL is supported. | [optional] 
**service_network** | **str** | Required. Service network to create private connection. Specify the name in the following form: &#x60;projects/{project}/global/networks/{network_id}&#x60; For type &#x3D; PRIVATE_SERVICE_ACCESS, this field represents servicenetworking VPC, e.g. projects/project-tp/global/networks/servicenetworking. For type &#x3D; NETAPP_CLOUD_VOLUME, this field represents NetApp service VPC, e.g. projects/project-tp/global/networks/netapp-tenant-vpc. For type &#x3D; DELL_POWERSCALE, this field represent Dell service VPC, e.g. projects/project-tp/global/networks/dell-tenant-vpc. For type&#x3D; THIRD_PARTY_SERVICE, this field could represent a consumer VPC or any other producer VPC to which the VMware Engine Network needs to be connected, e.g. projects/project/global/networks/vpc. | [optional] 
**state** | **str** | Output only. State of the private connection. | [optional] [readonly] 
**type** | **str** | Required. Private connection type. | [optional] 
**uid** | **str** | Output only. System-generated unique identifier for the resource. | [optional] [readonly] 
**update_time** | **str** | Output only. Last update time of this resource. | [optional] [readonly] 
**vmware_engine_network** | **str** | Required. The relative resource name of Legacy VMware Engine network. Specify the name in the following form: &#x60;projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}&#x60; where &#x60;{project}&#x60;, &#x60;{location}&#x60; will be same as specified in private connection resource name and &#x60;{vmware_engine_network_id}&#x60; will be in the form of &#x60;{location}&#x60;-default e.g. projects/project/locations/us-central1/vmwareEngineNetworks/us-central1-default. | [optional] 
**vmware_engine_network_canonical** | **str** | Output only. The canonical name of the VMware Engine network in the form: &#x60;projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.private_connection import PrivateConnection

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateConnection from a JSON string
private_connection_instance = PrivateConnection.from_json(json)
# print the JSON string representation of the object
print(PrivateConnection.to_json())

# convert the object into a dict
private_connection_dict = private_connection_instance.to_dict()
# create an instance of PrivateConnection from a dict
private_connection_from_dict = PrivateConnection.from_dict(private_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


