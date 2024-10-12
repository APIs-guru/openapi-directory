# ApplicationGatewayBackendHealthOnDemand

Result of on demand test probe

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_address_pool** | **object** |  | [optional] 
**backend_health_http_settings** | [**ApplicationGatewayBackendHealthHttpSettings**](ApplicationGatewayBackendHealthHttpSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_on_demand import ApplicationGatewayBackendHealthOnDemand

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthOnDemand from a JSON string
application_gateway_backend_health_on_demand_instance = ApplicationGatewayBackendHealthOnDemand.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthOnDemand.to_json())

# convert the object into a dict
application_gateway_backend_health_on_demand_dict = application_gateway_backend_health_on_demand_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthOnDemand from a dict
application_gateway_backend_health_on_demand_from_dict = ApplicationGatewayBackendHealthOnDemand.from_dict(application_gateway_backend_health_on_demand_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


