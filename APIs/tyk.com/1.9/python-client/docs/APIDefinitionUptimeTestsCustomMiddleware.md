# APIDefinitionUptimeTestsCustomMiddleware


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**post** | [**List[MiddlewareDefinition]**](MiddlewareDefinition.md) |  | [optional] 
**pre** | [**List[MiddlewareDefinition]**](MiddlewareDefinition.md) |  | [optional] 
**response** | [**List[MiddlewareDefinition]**](MiddlewareDefinition.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_definition_uptime_tests_custom_middleware import APIDefinitionUptimeTestsCustomMiddleware

# TODO update the JSON string below
json = "{}"
# create an instance of APIDefinitionUptimeTestsCustomMiddleware from a JSON string
api_definition_uptime_tests_custom_middleware_instance = APIDefinitionUptimeTestsCustomMiddleware.from_json(json)
# print the JSON string representation of the object
print(APIDefinitionUptimeTestsCustomMiddleware.to_json())

# convert the object into a dict
api_definition_uptime_tests_custom_middleware_dict = api_definition_uptime_tests_custom_middleware_instance.to_dict()
# create an instance of APIDefinitionUptimeTestsCustomMiddleware from a dict
api_definition_uptime_tests_custom_middleware_from_dict = APIDefinitionUptimeTestsCustomMiddleware.from_dict(api_definition_uptime_tests_custom_middleware_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


