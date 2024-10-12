# StartupConfig

Configuration to handle the startup of instances during cluster create and update process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**required_registration_fraction** | **float** | Optional. The config setting to enable cluster creation/ updation to be successful only after required_registration_fraction of instances are up and running. This configuration is applicable to only secondary workers for now. The cluster will fail if required_registration_fraction of instances are not available. This will include instance creation, agent registration, and service registration (if enabled). | [optional] 

## Example

```python
from openapi_client.models.startup_config import StartupConfig

# TODO update the JSON string below
json = "{}"
# create an instance of StartupConfig from a JSON string
startup_config_instance = StartupConfig.from_json(json)
# print the JSON string representation of the object
print(StartupConfig.to_json())

# convert the object into a dict
startup_config_dict = startup_config_instance.to_dict()
# create an instance of StartupConfig from a dict
startup_config_from_dict = StartupConfig.from_dict(startup_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


