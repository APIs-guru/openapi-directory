# SimulateSecurityHealthAnalyticsCustomModuleRequest

Request message to simulate a CustomConfig against a given test resource. Maximum size of the request is 4 MB by default.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_config** | [**GoogleCloudSecuritycenterV1CustomConfig**](GoogleCloudSecuritycenterV1CustomConfig.md) |  | [optional] 
**resource** | [**SimulatedResource**](SimulatedResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.simulate_security_health_analytics_custom_module_request import SimulateSecurityHealthAnalyticsCustomModuleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SimulateSecurityHealthAnalyticsCustomModuleRequest from a JSON string
simulate_security_health_analytics_custom_module_request_instance = SimulateSecurityHealthAnalyticsCustomModuleRequest.from_json(json)
# print the JSON string representation of the object
print(SimulateSecurityHealthAnalyticsCustomModuleRequest.to_json())

# convert the object into a dict
simulate_security_health_analytics_custom_module_request_dict = simulate_security_health_analytics_custom_module_request_instance.to_dict()
# create an instance of SimulateSecurityHealthAnalyticsCustomModuleRequest from a dict
simulate_security_health_analytics_custom_module_request_from_dict = SimulateSecurityHealthAnalyticsCustomModuleRequest.from_dict(simulate_security_health_analytics_custom_module_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


