# SapDiscoveryComponentApplicationProperties

A set of properties describing an SAP Application layer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abap** | **bool** | Optional. Indicates whether this is a Java or ABAP Netweaver instance. true means it is ABAP, false means it is Java. | [optional] 
**application_type** | **str** | Required. Type of the application. Netweaver, etc. | [optional] 
**ascs_uri** | **str** | Optional. Resource URI of the recognized ASCS host of the application. | [optional] 
**kernel_version** | **str** | Optional. Kernel version for Netweaver running in the system. | [optional] 
**nfs_uri** | **str** | Optional. Resource URI of the recognized shared NFS of the application. May be empty if the application server has only a single node. | [optional] 

## Example

```python
from openapi_client.models.sap_discovery_component_application_properties import SapDiscoveryComponentApplicationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SapDiscoveryComponentApplicationProperties from a JSON string
sap_discovery_component_application_properties_instance = SapDiscoveryComponentApplicationProperties.from_json(json)
# print the JSON string representation of the object
print(SapDiscoveryComponentApplicationProperties.to_json())

# convert the object into a dict
sap_discovery_component_application_properties_dict = sap_discovery_component_application_properties_instance.to_dict()
# create an instance of SapDiscoveryComponentApplicationProperties from a dict
sap_discovery_component_application_properties_from_dict = SapDiscoveryComponentApplicationProperties.from_dict(sap_discovery_component_application_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


