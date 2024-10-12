# ToProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the message recipient.  **Messenger**: This value should be the &#x60;from.id&#x60; value you received in the inbound messenger event.  **SMS**: or **Viber**: or **WhatsApp** This value is not required.  | [optional] 
**number** | **str** | **SMS**: or **MMS**: or **Viber**: or **WhatsApp** The phone number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.  **Messenger**: This value is not required.  | [optional] 
**type** | **str** | The type of message that you want to send. | 

## Example

```python
from openapi_client.models.to_property import ToProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ToProperty from a JSON string
to_property_instance = ToProperty.from_json(json)
# print the JSON string representation of the object
print(ToProperty.to_json())

# convert the object into a dict
to_property_dict = to_property_instance.to_dict()
# create an instance of ToProperty from a dict
to_property_from_dict = ToProperty.from_dict(to_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


