# MessageProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**MessagePropertyContent**](MessagePropertyContent.md) |  | 
**messenger** | [**MessagePropertyMessenger**](MessagePropertyMessenger.md) |  | [optional] 
**viber_service_msg** | [**MessagePropertyViberServiceMsg**](MessagePropertyViberServiceMsg.md) |  | [optional] 
**whatsapp** | [**MessagePropertyWhatsapp**](MessagePropertyWhatsapp.md) |  | [optional] 

## Example

```python
from openapi_client.models.message_property import MessageProperty

# TODO update the JSON string below
json = "{}"
# create an instance of MessageProperty from a JSON string
message_property_instance = MessageProperty.from_json(json)
# print the JSON string representation of the object
print(MessageProperty.to_json())

# convert the object into a dict
message_property_dict = message_property_instance.to_dict()
# create an instance of MessageProperty from a dict
message_property_from_dict = MessageProperty.from_dict(message_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


