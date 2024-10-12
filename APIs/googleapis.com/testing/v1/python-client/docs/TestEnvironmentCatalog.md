# TestEnvironmentCatalog

A description of a test environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_device_catalog** | [**AndroidDeviceCatalog**](AndroidDeviceCatalog.md) |  | [optional] 
**device_ip_block_catalog** | [**DeviceIpBlockCatalog**](DeviceIpBlockCatalog.md) |  | [optional] 
**ios_device_catalog** | [**IosDeviceCatalog**](IosDeviceCatalog.md) |  | [optional] 
**network_configuration_catalog** | [**NetworkConfigurationCatalog**](NetworkConfigurationCatalog.md) |  | [optional] 
**software_catalog** | [**ProvidedSoftwareCatalog**](ProvidedSoftwareCatalog.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_environment_catalog import TestEnvironmentCatalog

# TODO update the JSON string below
json = "{}"
# create an instance of TestEnvironmentCatalog from a JSON string
test_environment_catalog_instance = TestEnvironmentCatalog.from_json(json)
# print the JSON string representation of the object
print(TestEnvironmentCatalog.to_json())

# convert the object into a dict
test_environment_catalog_dict = test_environment_catalog_instance.to_dict()
# create an instance of TestEnvironmentCatalog from a dict
test_environment_catalog_from_dict = TestEnvironmentCatalog.from_dict(test_environment_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


