# SapDiscoveryWorkloadPropertiesProductVersion

A product name and version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Optional. Name of the product. | [optional] 
**version** | **str** | Optional. Version of the product. | [optional] 

## Example

```python
from openapi_client.models.sap_discovery_workload_properties_product_version import SapDiscoveryWorkloadPropertiesProductVersion

# TODO update the JSON string below
json = "{}"
# create an instance of SapDiscoveryWorkloadPropertiesProductVersion from a JSON string
sap_discovery_workload_properties_product_version_instance = SapDiscoveryWorkloadPropertiesProductVersion.from_json(json)
# print the JSON string representation of the object
print(SapDiscoveryWorkloadPropertiesProductVersion.to_json())

# convert the object into a dict
sap_discovery_workload_properties_product_version_dict = sap_discovery_workload_properties_product_version_instance.to_dict()
# create an instance of SapDiscoveryWorkloadPropertiesProductVersion from a dict
sap_discovery_workload_properties_product_version_from_dict = SapDiscoveryWorkloadPropertiesProductVersion.from_dict(sap_discovery_workload_properties_product_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


