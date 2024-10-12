# SapDiscoveryComponentDatabaseProperties

A set of properties describing an SAP Database layer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_type** | **str** | Required. Type of the database. HANA, DB2, etc. | [optional] 
**database_version** | **str** | Optional. The version of the database software running in the system. | [optional] 
**primary_instance_uri** | **str** | Required. URI of the recognized primary instance of the database. | [optional] 
**shared_nfs_uri** | **str** | Optional. URI of the recognized shared NFS of the database. May be empty if the database has only a single node. | [optional] 

## Example

```python
from openapi_client.models.sap_discovery_component_database_properties import SapDiscoveryComponentDatabaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SapDiscoveryComponentDatabaseProperties from a JSON string
sap_discovery_component_database_properties_instance = SapDiscoveryComponentDatabaseProperties.from_json(json)
# print the JSON string representation of the object
print(SapDiscoveryComponentDatabaseProperties.to_json())

# convert the object into a dict
sap_discovery_component_database_properties_dict = sap_discovery_component_database_properties_instance.to_dict()
# create an instance of SapDiscoveryComponentDatabaseProperties from a dict
sap_discovery_component_database_properties_from_dict = SapDiscoveryComponentDatabaseProperties.from_dict(sap_discovery_component_database_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


