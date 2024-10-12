# ServerCommunicationLink

Server communication link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Communication link kind.  This property is used for Azure Portal metadata. | [optional] [readonly] 
**location** | **str** | Communication link location. | [optional] [readonly] 
**properties** | [**ServerCommunicationLinkProperties**](ServerCommunicationLinkProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_communication_link import ServerCommunicationLink

# TODO update the JSON string below
json = "{}"
# create an instance of ServerCommunicationLink from a JSON string
server_communication_link_instance = ServerCommunicationLink.from_json(json)
# print the JSON string representation of the object
print(ServerCommunicationLink.to_json())

# convert the object into a dict
server_communication_link_dict = server_communication_link_instance.to_dict()
# create an instance of ServerCommunicationLink from a dict
server_communication_link_from_dict = ServerCommunicationLink.from_dict(server_communication_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


