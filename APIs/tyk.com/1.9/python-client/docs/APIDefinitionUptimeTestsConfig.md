# APIDefinitionUptimeTestsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_utime_after** | **float** |  | [optional] 
**recheck_wait** | **float** |  | [optional] 
**service_discovery** | [**ServiceDiscoverConfiguration**](ServiceDiscoverConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_definition_uptime_tests_config import APIDefinitionUptimeTestsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of APIDefinitionUptimeTestsConfig from a JSON string
api_definition_uptime_tests_config_instance = APIDefinitionUptimeTestsConfig.from_json(json)
# print the JSON string representation of the object
print(APIDefinitionUptimeTestsConfig.to_json())

# convert the object into a dict
api_definition_uptime_tests_config_dict = api_definition_uptime_tests_config_instance.to_dict()
# create an instance of APIDefinitionUptimeTestsConfig from a dict
api_definition_uptime_tests_config_from_dict = APIDefinitionUptimeTestsConfig.from_dict(api_definition_uptime_tests_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


