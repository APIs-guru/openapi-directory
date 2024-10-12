# ManagedZoneServiceDirectoryConfig

Contains information about Service Directory-backed zones.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'dns#managedZoneServiceDirectoryConfig']
**namespace** | [**ManagedZoneServiceDirectoryConfigNamespace**](ManagedZoneServiceDirectoryConfigNamespace.md) |  | [optional] 

## Example

```python
from openapi_client.models.managed_zone_service_directory_config import ManagedZoneServiceDirectoryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedZoneServiceDirectoryConfig from a JSON string
managed_zone_service_directory_config_instance = ManagedZoneServiceDirectoryConfig.from_json(json)
# print the JSON string representation of the object
print(ManagedZoneServiceDirectoryConfig.to_json())

# convert the object into a dict
managed_zone_service_directory_config_dict = managed_zone_service_directory_config_instance.to_dict()
# create an instance of ManagedZoneServiceDirectoryConfig from a dict
managed_zone_service_directory_config_from_dict = ManagedZoneServiceDirectoryConfig.from_dict(managed_zone_service_directory_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


