# ViberOneOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ref** | **str** | Client reference of up to 100 characters. The reference will be present in every message status. | [optional] 
**message_type** | **str** | The type of message to send. You must provide &#x60;text&#x60; in this field | 
**text** | **object** | The text of message to send; limited to 1000 characters, including unicode.  | 
**channel** | **str** | The channel to send to. You must provide &#x60;viber_service&#x60; in this field | 
**var_from** | **str** | The ID of the message sender  | 
**to** | **str** | The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.  | 
**viber_service** | [**ChannelOptionsViberWithButtonViberService**](ChannelOptionsViberWithButtonViberService.md) |  | [optional] 

## Example

```python
from openapi_client.models.viber_one_of import ViberOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of ViberOneOf from a JSON string
viber_one_of_instance = ViberOneOf.from_json(json)
# print the JSON string representation of the object
print(ViberOneOf.to_json())

# convert the object into a dict
viber_one_of_dict = viber_one_of_instance.to_dict()
# create an instance of ViberOneOf from a dict
viber_one_of_from_dict = ViberOneOf.from_dict(viber_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


