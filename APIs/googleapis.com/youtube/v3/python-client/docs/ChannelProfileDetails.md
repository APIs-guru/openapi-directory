# ChannelProfileDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** | The YouTube channel ID. | [optional] 
**channel_url** | **str** | The channel&#39;s URL. | [optional] 
**display_name** | **str** | The channel&#39;s display name. | [optional] 
**profile_image_url** | **str** | The channels&#39;s avatar URL. | [optional] 

## Example

```python
from openapi_client.models.channel_profile_details import ChannelProfileDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelProfileDetails from a JSON string
channel_profile_details_instance = ChannelProfileDetails.from_json(json)
# print the JSON string representation of the object
print(ChannelProfileDetails.to_json())

# convert the object into a dict
channel_profile_details_dict = channel_profile_details_instance.to_dict()
# create an instance of ChannelProfileDetails from a dict
channel_profile_details_from_dict = ChannelProfileDetails.from_dict(channel_profile_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


