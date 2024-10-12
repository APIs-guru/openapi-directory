# APIDefinitionUptimeTestsCacheOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_all_safe_requests** | **bool** |  | [optional] 
**cache_timeout** | **float** |  | [optional] 
**enable_cache** | **bool** |  | [optional] 
**enable_upstream_cache_control** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.api_definition_uptime_tests_cache_options import APIDefinitionUptimeTestsCacheOptions

# TODO update the JSON string below
json = "{}"
# create an instance of APIDefinitionUptimeTestsCacheOptions from a JSON string
api_definition_uptime_tests_cache_options_instance = APIDefinitionUptimeTestsCacheOptions.from_json(json)
# print the JSON string representation of the object
print(APIDefinitionUptimeTestsCacheOptions.to_json())

# convert the object into a dict
api_definition_uptime_tests_cache_options_dict = api_definition_uptime_tests_cache_options_instance.to_dict()
# create an instance of APIDefinitionUptimeTestsCacheOptions from a dict
api_definition_uptime_tests_cache_options_from_dict = APIDefinitionUptimeTestsCacheOptions.from_dict(api_definition_uptime_tests_cache_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


