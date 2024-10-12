# FromProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Your ID for the platform that you are sending from.  **Messenger**: This value should be the &#x60;to.id&#x60; value you received in the inbound messenger event.  **Viber**: This is your Service Message ID given to you by your Vonage Account Manager. To find out more please visit [vonage.com](https://www.vonage.com/communications-apis/messages/).  **SMS**: **MMS**: or **WhatsApp** This value is not required.  | [optional] 
**number** | **str** | **SMS**: or **MMS**: The phone number of the message sender in the [E.164](https://en.wikipedia.org/wiki/E.164) format.  **WhatsApp**: This is your WhatsApp Business Number given to you by your Vonage Account Manager. To find out more please visit [vonage.com](https://www.vonage.com/communications-apis/messages/).  **Messenger**: or **Viber**: This value is not required.  | [optional] 
**type** | **str** | The type of message that you want to send. | 

## Example

```python
from openapi_client.models.from_property import FromProperty

# TODO update the JSON string below
json = "{}"
# create an instance of FromProperty from a JSON string
from_property_instance = FromProperty.from_json(json)
# print the JSON string representation of the object
print(FromProperty.to_json())

# convert the object into a dict
from_property_dict = from_property_instance.to_dict()
# create an instance of FromProperty from a dict
from_property_from_dict = FromProperty.from_dict(from_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


