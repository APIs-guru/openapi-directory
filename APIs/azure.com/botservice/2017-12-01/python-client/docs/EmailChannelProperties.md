# EmailChannelProperties

The parameters to provide for the Email channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **str** | The email address | 
**is_enabled** | **bool** | Whether this channel is enabled for the bot | 
**password** | **str** | The password for the email address. Value only returned through POST to the action Channel List API, otherwise empty. | 

## Example

```python
from openapi_client.models.email_channel_properties import EmailChannelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EmailChannelProperties from a JSON string
email_channel_properties_instance = EmailChannelProperties.from_json(json)
# print the JSON string representation of the object
print(EmailChannelProperties.to_json())

# convert the object into a dict
email_channel_properties_dict = email_channel_properties_instance.to_dict()
# create an instance of EmailChannelProperties from a dict
email_channel_properties_from_dict = EmailChannelProperties.from_dict(email_channel_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


