# Viber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ref** | **str** | Client reference of up to 100 characters. The reference will be present in every message status. | [optional] 
**message_type** | **str** | The type of message to send. You must provide &#x60;file&#x60; in this field | 
**text** | **object** | The text of message to send; limited to 1000 characters, including unicode.  | 
**channel** | **str** | The channel to send to. You must provide &#x60;viber_service&#x60; in this field | 
**var_from** | **str** | The ID of the message sender  | 
**to** | **str** | The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.  | 
**viber_service** | [**ChannelOptionsViberViberService**](ChannelOptionsViberViberService.md) |  | [optional] 
**image** | [**ViberOneOf1AllOfImage**](ViberOneOf1AllOfImage.md) |  | 
**video** | [**ViberOneOf2AllOfVideo**](ViberOneOf2AllOfVideo.md) |  | 
**file** | [**ViberOneOf3AllOfFile**](ViberOneOf3AllOfFile.md) |  | 

## Example

```python
from openapi_client.models.viber import Viber

# TODO update the JSON string below
json = "{}"
# create an instance of Viber from a JSON string
viber_instance = Viber.from_json(json)
# print the JSON string representation of the object
print(Viber.to_json())

# convert the object into a dict
viber_dict = viber_instance.to_dict()
# create an instance of Viber from a dict
viber_from_dict = Viber.from_dict(viber_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


