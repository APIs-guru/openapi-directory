# SimulateSecurityHealthAnalyticsCustomModuleResponse

Response message for simulating a `SecurityHealthAnalyticsCustomModule` against a given resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**SimulatedResult**](SimulatedResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.simulate_security_health_analytics_custom_module_response import SimulateSecurityHealthAnalyticsCustomModuleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SimulateSecurityHealthAnalyticsCustomModuleResponse from a JSON string
simulate_security_health_analytics_custom_module_response_instance = SimulateSecurityHealthAnalyticsCustomModuleResponse.from_json(json)
# print the JSON string representation of the object
print(SimulateSecurityHealthAnalyticsCustomModuleResponse.to_json())

# convert the object into a dict
simulate_security_health_analytics_custom_module_response_dict = simulate_security_health_analytics_custom_module_response_instance.to_dict()
# create an instance of SimulateSecurityHealthAnalyticsCustomModuleResponse from a dict
simulate_security_health_analytics_custom_module_response_from_dict = SimulateSecurityHealthAnalyticsCustomModuleResponse.from_dict(simulate_security_health_analytics_custom_module_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


