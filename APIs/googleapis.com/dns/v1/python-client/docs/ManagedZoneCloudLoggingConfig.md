# ManagedZoneCloudLoggingConfig

Cloud Logging configurations for publicly visible zones.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_logging** | **bool** | If set, enable query logging for this ManagedZone. False by default, making logging opt-in. | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#managedZoneCloudLoggingConfig']

## Example

```python
from openapi_client.models.managed_zone_cloud_logging_config import ManagedZoneCloudLoggingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedZoneCloudLoggingConfig from a JSON string
managed_zone_cloud_logging_config_instance = ManagedZoneCloudLoggingConfig.from_json(json)
# print the JSON string representation of the object
print(ManagedZoneCloudLoggingConfig.to_json())

# convert the object into a dict
managed_zone_cloud_logging_config_dict = managed_zone_cloud_logging_config_instance.to_dict()
# create an instance of ManagedZoneCloudLoggingConfig from a dict
managed_zone_cloud_logging_config_from_dict = ManagedZoneCloudLoggingConfig.from_dict(managed_zone_cloud_logging_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


