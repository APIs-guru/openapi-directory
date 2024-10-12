# EnvironmentConfig

Environment configuration for a workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_config** | [**ExecutionConfig**](ExecutionConfig.md) |  | [optional] 
**peripherals_config** | [**PeripheralsConfig**](PeripheralsConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.environment_config import EnvironmentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentConfig from a JSON string
environment_config_instance = EnvironmentConfig.from_json(json)
# print the JSON string representation of the object
print(EnvironmentConfig.to_json())

# convert the object into a dict
environment_config_dict = environment_config_instance.to_dict()
# create an instance of EnvironmentConfig from a dict
environment_config_from_dict = EnvironmentConfig.from_dict(environment_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


