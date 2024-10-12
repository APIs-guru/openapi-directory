# SapDiscoveryComponent

Message describing the system component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_properties** | [**SapDiscoveryComponentApplicationProperties**](SapDiscoveryComponentApplicationProperties.md) |  | [optional] 
**database_properties** | [**SapDiscoveryComponentDatabaseProperties**](SapDiscoveryComponentDatabaseProperties.md) |  | [optional] 
**ha_hosts** | **List[str]** | Optional. A list of host URIs that are part of the HA configuration if present. An empty list indicates the component is not configured for HA. | [optional] 
**host_project** | **str** | Required. Pantheon Project in which the resources reside. | [optional] 
**resources** | [**List[SapDiscoveryResource]**](SapDiscoveryResource.md) | Optional. The resources in a component. | [optional] 
**sid** | **str** | Optional. The SAP identifier, used by the SAP software and helps differentiate systems for customers. | [optional] 
**topology_type** | **str** | Optional. The detected topology of the component. | [optional] 

## Example

```python
from openapi_client.models.sap_discovery_component import SapDiscoveryComponent

# TODO update the JSON string below
json = "{}"
# create an instance of SapDiscoveryComponent from a JSON string
sap_discovery_component_instance = SapDiscoveryComponent.from_json(json)
# print the JSON string representation of the object
print(SapDiscoveryComponent.to_json())

# convert the object into a dict
sap_discovery_component_dict = sap_discovery_component_instance.to_dict()
# create an instance of SapDiscoveryComponent from a dict
sap_discovery_component_from_dict = SapDiscoveryComponent.from_dict(sap_discovery_component_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


