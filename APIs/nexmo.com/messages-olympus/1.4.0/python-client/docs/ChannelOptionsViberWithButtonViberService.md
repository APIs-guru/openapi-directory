# ChannelOptionsViberWithButtonViberService


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**ChannelOptionsViberWithButtonViberServiceAction**](ChannelOptionsViberWithButtonViberServiceAction.md) |  | [optional] 
**category** | **str** | The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative &amp; a targeted message - not promotional. By default Vonage sends the &#x60;transaction&#x60; category to Viber Business Messages. | [optional] 
**ttl** | **int** | Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message. | [optional] 
**type** | **str** | Viber-specific type definition. To use \&quot;template\&quot;, please contact your Vonage Account Manager to setup your templates. To find out more please visit the [product page](https://www.vonage.com/communications-apis/messages/) | [optional] 

## Example

```python
from openapi_client.models.channel_options_viber_with_button_viber_service import ChannelOptionsViberWithButtonViberService

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelOptionsViberWithButtonViberService from a JSON string
channel_options_viber_with_button_viber_service_instance = ChannelOptionsViberWithButtonViberService.from_json(json)
# print the JSON string representation of the object
print(ChannelOptionsViberWithButtonViberService.to_json())

# convert the object into a dict
channel_options_viber_with_button_viber_service_dict = channel_options_viber_with_button_viber_service_instance.to_dict()
# create an instance of ChannelOptionsViberWithButtonViberService from a dict
channel_options_viber_with_button_viber_service_from_dict = ChannelOptionsViberWithButtonViberService.from_dict(channel_options_viber_with_button_viber_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


