# ApplicationGatewayConnectionDraining

Connection draining allows open connections to a backend server to be active for a specified time after the backend server got removed from the configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drain_timeout_in_sec** | **int** | The number of seconds connection draining is active. Acceptable values are from 1 second to 3600 seconds. | 
**enabled** | **bool** | Whether connection draining is enabled or not. | 

## Example

```python
from openapi_client.models.application_gateway_connection_draining import ApplicationGatewayConnectionDraining

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayConnectionDraining from a JSON string
application_gateway_connection_draining_instance = ApplicationGatewayConnectionDraining.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayConnectionDraining.to_json())

# convert the object into a dict
application_gateway_connection_draining_dict = application_gateway_connection_draining_instance.to_dict()
# create an instance of ApplicationGatewayConnectionDraining from a dict
application_gateway_connection_draining_from_dict = ApplicationGatewayConnectionDraining.from_dict(application_gateway_connection_draining_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


