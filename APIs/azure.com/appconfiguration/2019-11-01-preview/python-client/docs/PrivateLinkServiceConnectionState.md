# PrivateLinkServiceConnectionState

The state of a private link service connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions_required** | **str** | Any action that is required beyond basic workflow (approve/ reject/ disconnect) | [optional] [readonly] 
**description** | **str** | The private link service connection description. | [optional] 
**status** | **str** | The private link service connection status. | [optional] 

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


