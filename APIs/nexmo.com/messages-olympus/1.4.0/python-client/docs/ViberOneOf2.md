# ViberOneOf2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ref** | **str** | Client reference of up to 100 characters. The reference will be present in every message status. | [optional] 
**message_type** | **str** | The type of message to send. You must provide &#x60;video&#x60; in this field | 
**video** | [**ViberOneOf2AllOfVideo**](ViberOneOf2AllOfVideo.md) |  | 
**channel** | **str** | The channel to send to. You must provide &#x60;viber_service&#x60; in this field | 
**var_from** | **str** | The ID of the message sender  | 
**to** | **str** | The phone number of the message **recipient** in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don&#39;t use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.  | 
**viber_service** | [**ChannelOptionsViberVideoViberService**](ChannelOptionsViberVideoViberService.md) |  | [optional] 

## Example

```python
from openapi_client.models.viber_one_of2 import ViberOneOf2

# TODO update the JSON string below
json = "{}"
# create an instance of ViberOneOf2 from a JSON string
viber_one_of2_instance = ViberOneOf2.from_json(json)
# print the JSON string representation of the object
print(ViberOneOf2.to_json())

# convert the object into a dict
viber_one_of2_dict = viber_one_of2_instance.to_dict()
# create an instance of ViberOneOf2 from a dict
viber_one_of2_from_dict = ViberOneOf2.from_dict(viber_one_of2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


