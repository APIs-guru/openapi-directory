# FacebookChannelProperties

The parameters to provide for the Facebook channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | Facebook application id | 
**app_secret** | **str** | Facebook application secret. Value only returned through POST to the action Channel List API, otherwise empty. | 
**callback_url** | **str** | Callback Url | [optional] [readonly] 
**is_enabled** | **bool** | Whether this channel is enabled for the bot | 
**pages** | [**List[FacebookPage]**](FacebookPage.md) | The list of Facebook pages | [optional] 
**verify_token** | **str** | Verify token. Value only returned through POST to the action Channel List API, otherwise empty. | [optional] [readonly] 

## Example

```python
from openapi_client.models.facebook_channel_properties import FacebookChannelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FacebookChannelProperties from a JSON string
facebook_channel_properties_instance = FacebookChannelProperties.from_json(json)
# print the JSON string representation of the object
print(FacebookChannelProperties.to_json())

# convert the object into a dict
facebook_channel_properties_dict = facebook_channel_properties_instance.to_dict()
# create an instance of FacebookChannelProperties from a dict
facebook_channel_properties_from_dict = FacebookChannelProperties.from_dict(facebook_channel_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


