# RoutingMessage

Routing message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_properties** | **Dict[str, str]** | App properties | [optional] 
**body** | **str** | Body of routing message | [optional] 
**system_properties** | **Dict[str, str]** | System properties | [optional] 

## Example

```python
from openapi_client.models.routing_message import RoutingMessage

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingMessage from a JSON string
routing_message_instance = RoutingMessage.from_json(json)
# print the JSON string representation of the object
print(RoutingMessage.to_json())

# convert the object into a dict
routing_message_dict = routing_message_instance.to_dict()
# create an instance of RoutingMessage from a dict
routing_message_from_dict = RoutingMessage.from_dict(routing_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


