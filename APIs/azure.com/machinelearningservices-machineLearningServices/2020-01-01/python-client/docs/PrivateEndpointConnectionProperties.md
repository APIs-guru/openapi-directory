# PrivateEndpointConnectionProperties

Properties of the PrivateEndpointConnectProperties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_endpoint** | [**PrivateEndpoint**](PrivateEndpoint.md) |  | [optional] 
**private_link_service_connection_state** | [**PrivateLinkServiceConnectionState**](PrivateLinkServiceConnectionState.md) |  | 
**provisioning_state** | [**PrivateEndpointConnectionProvisioningState**](PrivateEndpointConnectionProvisioningState.md) |  | [optional] 

## Example

```python
from openapi_client.models.private_endpoint_connection_properties import PrivateEndpointConnectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateEndpointConnectionProperties from a JSON string
private_endpoint_connection_properties_instance = PrivateEndpointConnectionProperties.from_json(json)
# print the JSON string representation of the object
print(PrivateEndpointConnectionProperties.to_json())

# convert the object into a dict
private_endpoint_connection_properties_dict = private_endpoint_connection_properties_instance.to_dict()
# create an instance of PrivateEndpointConnectionProperties from a dict
private_endpoint_connection_properties_from_dict = PrivateEndpointConnectionProperties.from_dict(private_endpoint_connection_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


