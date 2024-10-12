# ServerCommunicationLinkProperties

The properties of a server communication link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner_server** | **str** | The name of the partner server. | 
**state** | **str** | The state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_communication_link_properties import ServerCommunicationLinkProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServerCommunicationLinkProperties from a JSON string
server_communication_link_properties_instance = ServerCommunicationLinkProperties.from_json(json)
# print the JSON string representation of the object
print(ServerCommunicationLinkProperties.to_json())

# convert the object into a dict
server_communication_link_properties_dict = server_communication_link_properties_instance.to_dict()
# create an instance of ServerCommunicationLinkProperties from a dict
server_communication_link_properties_from_dict = ServerCommunicationLinkProperties.from_dict(server_communication_link_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


