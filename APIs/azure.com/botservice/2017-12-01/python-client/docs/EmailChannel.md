# EmailChannel

Email channel definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EmailChannelProperties**](EmailChannelProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.email_channel import EmailChannel

# TODO update the JSON string below
json = "{}"
# create an instance of EmailChannel from a JSON string
email_channel_instance = EmailChannel.from_json(json)
# print the JSON string representation of the object
print(EmailChannel.to_json())

# convert the object into a dict
email_channel_dict = email_channel_instance.to_dict()
# create an instance of EmailChannel from a dict
email_channel_from_dict = EmailChannel.from_dict(email_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


