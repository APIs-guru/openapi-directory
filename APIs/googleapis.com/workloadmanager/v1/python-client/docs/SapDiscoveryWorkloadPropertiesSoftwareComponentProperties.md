# SapDiscoveryWorkloadPropertiesSoftwareComponentProperties

A SAP software component name, version, and type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ext_version** | **str** | Optional. The component&#39;s minor version. | [optional] 
**name** | **str** | Optional. Name of the component. | [optional] 
**type** | **str** | Optional. The component&#39;s type. | [optional] 
**version** | **str** | Optional. The component&#39;s major version. | [optional] 

## Example

```python
from openapi_client.models.sap_discovery_workload_properties_software_component_properties import SapDiscoveryWorkloadPropertiesSoftwareComponentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SapDiscoveryWorkloadPropertiesSoftwareComponentProperties from a JSON string
sap_discovery_workload_properties_software_component_properties_instance = SapDiscoveryWorkloadPropertiesSoftwareComponentProperties.from_json(json)
# print the JSON string representation of the object
print(SapDiscoveryWorkloadPropertiesSoftwareComponentProperties.to_json())

# convert the object into a dict
sap_discovery_workload_properties_software_component_properties_dict = sap_discovery_workload_properties_software_component_properties_instance.to_dict()
# create an instance of SapDiscoveryWorkloadPropertiesSoftwareComponentProperties from a dict
sap_discovery_workload_properties_software_component_properties_from_dict = SapDiscoveryWorkloadPropertiesSoftwareComponentProperties.from_dict(sap_discovery_workload_properties_software_component_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


