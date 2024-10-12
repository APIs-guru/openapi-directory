# VmwareEngineNetwork

VMware Engine network resource that provides connectivity for VMware Engine private clouds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Creation time of this resource. | [optional] [readonly] 
**description** | **str** | User-provided description for this VMware Engine network. | [optional] 
**etag** | **str** | Checksum that may be sent on update and delete requests to ensure that the user-provided value is up to date before the server processes a request. The server computes checksums based on the value of other fields in the request. | [optional] 
**name** | **str** | Output only. The resource name of the VMware Engine network. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: &#x60;projects/my-project/locations/global/vmwareEngineNetworks/my-network&#x60; | [optional] [readonly] 
**state** | **str** | Output only. State of the VMware Engine network. | [optional] [readonly] 
**type** | **str** | Required. VMware Engine network type. | [optional] 
**uid** | **str** | Output only. System-generated unique identifier for the resource. | [optional] [readonly] 
**update_time** | **str** | Output only. Last update time of this resource. | [optional] [readonly] 
**vpc_networks** | [**List[VpcNetwork]**](VpcNetwork.md) | Output only. VMware Engine service VPC networks that provide connectivity from a private cloud to customer projects, the internet, and other Google Cloud services. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vmware_engine_network import VmwareEngineNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareEngineNetwork from a JSON string
vmware_engine_network_instance = VmwareEngineNetwork.from_json(json)
# print the JSON string representation of the object
print(VmwareEngineNetwork.to_json())

# convert the object into a dict
vmware_engine_network_dict = vmware_engine_network_instance.to_dict()
# create an instance of VmwareEngineNetwork from a dict
vmware_engine_network_from_dict = VmwareEngineNetwork.from_dict(vmware_engine_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


