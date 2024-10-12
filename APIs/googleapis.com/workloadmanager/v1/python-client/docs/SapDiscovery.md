# SapDiscovery

The schema of SAP system discovery data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_layer** | [**SapDiscoveryComponent**](SapDiscoveryComponent.md) |  | [optional] 
**database_layer** | [**SapDiscoveryComponent**](SapDiscoveryComponent.md) |  | [optional] 
**metadata** | [**SapDiscoveryMetadata**](SapDiscoveryMetadata.md) |  | [optional] 
**project_number** | **str** | Optional. The GCP project number that this SapSystem belongs to. | [optional] 
**system_id** | **str** | Output only. A combination of database SID, database instance URI and tenant DB name to make a unique identifier per-system. | [optional] [readonly] 
**update_time** | **str** | Required. Unix timestamp this system has been updated last. | [optional] 
**workload_properties** | [**SapDiscoveryWorkloadProperties**](SapDiscoveryWorkloadProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.sap_discovery import SapDiscovery

# TODO update the JSON string below
json = "{}"
# create an instance of SapDiscovery from a JSON string
sap_discovery_instance = SapDiscovery.from_json(json)
# print the JSON string representation of the object
print(SapDiscovery.to_json())

# convert the object into a dict
sap_discovery_dict = sap_discovery_instance.to_dict()
# create an instance of SapDiscovery from a dict
sap_discovery_from_dict = SapDiscovery.from_dict(sap_discovery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


