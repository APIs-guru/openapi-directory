# ServerCommunicationLinkListResult

A list of server communication links.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ServerCommunicationLink]**](ServerCommunicationLink.md) | The list of server communication links. | [optional] 

## Example

```python
from openapi_client.models.server_communication_link_list_result import ServerCommunicationLinkListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ServerCommunicationLinkListResult from a JSON string
server_communication_link_list_result_instance = ServerCommunicationLinkListResult.from_json(json)
# print the JSON string representation of the object
print(ServerCommunicationLinkListResult.to_json())

# convert the object into a dict
server_communication_link_list_result_dict = server_communication_link_list_result_instance.to_dict()
# create an instance of ServerCommunicationLinkListResult from a dict
server_communication_link_list_result_from_dict = ServerCommunicationLinkListResult.from_dict(server_communication_link_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


