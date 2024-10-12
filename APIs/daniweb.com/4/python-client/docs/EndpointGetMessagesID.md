# EndpointGetMessagesID


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Message]**](Message.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_messages_id import EndpointGetMessagesID

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetMessagesID from a JSON string
endpoint_get_messages_id_instance = EndpointGetMessagesID.from_json(json)
# print the JSON string representation of the object
print(EndpointGetMessagesID.to_json())

# convert the object into a dict
endpoint_get_messages_id_dict = endpoint_get_messages_id_instance.to_dict()
# create an instance of EndpointGetMessagesID from a dict
endpoint_get_messages_id_from_dict = EndpointGetMessagesID.from_dict(endpoint_get_messages_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


