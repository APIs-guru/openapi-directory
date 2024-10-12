# APIDefinitionUptimeTests


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cors** | [**APIDefinitionUptimeTestsCORS**](APIDefinitionUptimeTestsCORS.md) |  | [optional] 
**active** | **bool** |  | [optional] 
**allowed_ips** | **List[str]** |  | [optional] 
**cache_options** | [**APIDefinitionUptimeTestsCacheOptions**](APIDefinitionUptimeTestsCacheOptions.md) |  | [optional] 
**check_list** | [**List[APIDefinitionUptimeTestsCheckListInner]**](APIDefinitionUptimeTestsCheckListInner.md) |  | [optional] 
**config** | [**APIDefinitionUptimeTestsConfig**](APIDefinitionUptimeTestsConfig.md) |  | [optional] 
**custom_middleware** | [**APIDefinitionUptimeTestsCustomMiddleware**](APIDefinitionUptimeTestsCustomMiddleware.md) |  | [optional] 
**do_not_track** | **str** |  | [optional] 
**domain** | **str** |  | [optional] 
**dont_set_quota_on_create** | **bool** |  | [optional] 
**enable_batch_request_support** | **bool** |  | [optional] 
**enable_ip_whitelisting** | **bool** |  | [optional] 
**event_handlers** | **object** |  | [optional] 
**expire_analytics_after** | **float** |  | [optional] 
**proxy** | [**APIDefinitionUptimeTestsProxy**](APIDefinitionUptimeTestsProxy.md) |  | [optional] 
**response_processors** | [**List[APIDefinitionUptimeTestsResponseProcessorsInner]**](APIDefinitionUptimeTestsResponseProcessorsInner.md) |  | [optional] 
**session_lifetime** | **float** |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.api_definition_uptime_tests import APIDefinitionUptimeTests

# TODO update the JSON string below
json = "{}"
# create an instance of APIDefinitionUptimeTests from a JSON string
api_definition_uptime_tests_instance = APIDefinitionUptimeTests.from_json(json)
# print the JSON string representation of the object
print(APIDefinitionUptimeTests.to_json())

# convert the object into a dict
api_definition_uptime_tests_dict = api_definition_uptime_tests_instance.to_dict()
# create an instance of APIDefinitionUptimeTests from a dict
api_definition_uptime_tests_from_dict = APIDefinitionUptimeTests.from_dict(api_definition_uptime_tests_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


