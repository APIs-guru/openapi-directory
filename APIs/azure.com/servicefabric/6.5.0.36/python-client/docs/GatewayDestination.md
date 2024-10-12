# GatewayDestination

Describes destination endpoint for routing traffic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | Name of the service fabric Mesh application. | 
**endpoint_name** | **str** | name of the endpoint in the service. | 
**service_name** | **str** | service that contains the endpoint. | 

## Example

```python
from openapi_client.models.gateway_destination import GatewayDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayDestination from a JSON string
gateway_destination_instance = GatewayDestination.from_json(json)
# print the JSON string representation of the object
print(GatewayDestination.to_json())

# convert the object into a dict
gateway_destination_dict = gateway_destination_instance.to_dict()
# create an instance of GatewayDestination from a dict
gateway_destination_from_dict = GatewayDestination.from_dict(gateway_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


