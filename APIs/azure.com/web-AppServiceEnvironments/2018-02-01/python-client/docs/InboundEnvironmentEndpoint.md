# InboundEnvironmentEndpoint

The IP Addresses and Ports that require inbound network access to and within the subnet of the App Service Environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Short text describing the purpose of the network traffic. | [optional] 
**endpoints** | **List[str]** | The IP addresses that network traffic will originate from in cidr notation. | [optional] 
**ports** | **List[str]** | The ports that network traffic will arrive to the App Service Environment at. | [optional] 

## Example

```python
from openapi_client.models.inbound_environment_endpoint import InboundEnvironmentEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of InboundEnvironmentEndpoint from a JSON string
inbound_environment_endpoint_instance = InboundEnvironmentEndpoint.from_json(json)
# print the JSON string representation of the object
print(InboundEnvironmentEndpoint.to_json())

# convert the object into a dict
inbound_environment_endpoint_dict = inbound_environment_endpoint_instance.to_dict()
# create an instance of InboundEnvironmentEndpoint from a dict
inbound_environment_endpoint_from_dict = InboundEnvironmentEndpoint.from_dict(inbound_environment_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


