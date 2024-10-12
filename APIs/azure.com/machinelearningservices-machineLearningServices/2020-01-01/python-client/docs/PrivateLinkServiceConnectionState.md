# PrivateLinkServiceConnectionState

A collection of information about the state of the connection between service consumer and provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_required** | **str** | A message indicating if changes on the service provider require any updates on the consumer. | [optional] 
**description** | **str** | The reason for approval/rejection of the connection. | [optional] 
**status** | [**PrivateEndpointServiceConnectionStatus**](PrivateEndpointServiceConnectionStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.private_link_service_connection_state import PrivateLinkServiceConnectionState

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkServiceConnectionState from a JSON string
private_link_service_connection_state_instance = PrivateLinkServiceConnectionState.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkServiceConnectionState.to_json())

# convert the object into a dict
private_link_service_connection_state_dict = private_link_service_connection_state_instance.to_dict()
# create an instance of PrivateLinkServiceConnectionState from a dict
private_link_service_connection_state_from_dict = PrivateLinkServiceConnectionState.from_dict(private_link_service_connection_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


