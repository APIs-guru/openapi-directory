# ActiveDirectoryProperties

Settings properties for Active Directory (AD).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_storage_sid** | **str** | Specifies the security identifier (SID) for Azure Storage. | 
**domain_guid** | **str** | Specifies the domain GUID. | 
**domain_name** | **str** | Specifies the primary domain that the AD DNS server is authoritative for. | 
**domain_sid** | **str** | Specifies the security identifier (SID). | 
**forest_name** | **str** | Specifies the Active Directory forest to get. | 
**net_bios_domain_name** | **str** | Specifies the NetBIOS domain name. | 

## Example

```python
from openapi_client.models.active_directory_properties import ActiveDirectoryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ActiveDirectoryProperties from a JSON string
active_directory_properties_instance = ActiveDirectoryProperties.from_json(json)
# print the JSON string representation of the object
print(ActiveDirectoryProperties.to_json())

# convert the object into a dict
active_directory_properties_dict = active_directory_properties_instance.to_dict()
# create an instance of ActiveDirectoryProperties from a dict
active_directory_properties_from_dict = ActiveDirectoryProperties.from_dict(active_directory_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


