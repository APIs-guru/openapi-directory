# ConnectionMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** | The connection id | [optional] 

## Example

```python
from openapi_client.models.connection_message import ConnectionMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMessage from a JSON string
connection_message_instance = ConnectionMessage.from_json(json)
# print the JSON string representation of the object
print(ConnectionMessage.to_json())

# convert the object into a dict
connection_message_dict = connection_message_instance.to_dict()
# create an instance of ConnectionMessage from a dict
connection_message_from_dict = ConnectionMessage.from_dict(connection_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


