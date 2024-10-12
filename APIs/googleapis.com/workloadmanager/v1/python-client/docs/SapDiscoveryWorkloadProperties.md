# SapDiscoveryWorkloadProperties

A set of properties describing an SAP workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_versions** | [**List[SapDiscoveryWorkloadPropertiesProductVersion]**](SapDiscoveryWorkloadPropertiesProductVersion.md) | Optional. List of SAP Products and their versions running on the system. | [optional] 
**software_component_versions** | [**List[SapDiscoveryWorkloadPropertiesSoftwareComponentProperties]**](SapDiscoveryWorkloadPropertiesSoftwareComponentProperties.md) | Optional. A list of SAP software components and their versions running on the system. | [optional] 

## Example

```python
from openapi_client.models.sap_discovery_workload_properties import SapDiscoveryWorkloadProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SapDiscoveryWorkloadProperties from a JSON string
sap_discovery_workload_properties_instance = SapDiscoveryWorkloadProperties.from_json(json)
# print the JSON string representation of the object
print(SapDiscoveryWorkloadProperties.to_json())

# convert the object into a dict
sap_discovery_workload_properties_dict = sap_discovery_workload_properties_instance.to_dict()
# create an instance of SapDiscoveryWorkloadProperties from a dict
sap_discovery_workload_properties_from_dict = SapDiscoveryWorkloadProperties.from_dict(sap_discovery_workload_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


