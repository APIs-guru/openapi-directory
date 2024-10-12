# APIDefinitionUptimeTestsProxy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_host_against_uptime_tests** | **bool** |  | [optional] 
**enable_load_balancing** | **bool** |  | [optional] 
**listen_path** | **str** |  | [optional] 
**preserve_host_header** | **bool** |  | [optional] 
**service_discovery** | [**ServiceDiscoverConfiguration**](ServiceDiscoverConfiguration.md) |  | [optional] 
**strip_listen_path** | **bool** |  | [optional] 
**target_list** | **List[str]** |  | [optional] 
**target_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_definition_uptime_tests_proxy import APIDefinitionUptimeTestsProxy

# TODO update the JSON string below
json = "{}"
# create an instance of APIDefinitionUptimeTestsProxy from a JSON string
api_definition_uptime_tests_proxy_instance = APIDefinitionUptimeTestsProxy.from_json(json)
# print the JSON string representation of the object
print(APIDefinitionUptimeTestsProxy.to_json())

# convert the object into a dict
api_definition_uptime_tests_proxy_dict = api_definition_uptime_tests_proxy_instance.to_dict()
# create an instance of APIDefinitionUptimeTestsProxy from a dict
api_definition_uptime_tests_proxy_from_dict = APIDefinitionUptimeTestsProxy.from_dict(api_definition_uptime_tests_proxy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


