# CustomChannelTargetingInfo

The targeting information of this custom channel, if activated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ads_appear_on** | **str** | The name used to describe this channel externally. | [optional] 
**description** | **str** | The external description of the channel. | [optional] 
**location** | **str** | The locations in which ads appear. (Only valid for content and mobile content ads (deprecated)). Acceptable values for content ads are: TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, MIDDLE_CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT, MULTIPLE_LOCATIONS. Acceptable values for mobile content ads (deprecated) are: TOP, MIDDLE, BOTTOM, MULTIPLE_LOCATIONS. | [optional] 
**site_language** | **str** | The language of the sites ads will be displayed on. | [optional] 

## Example

```python
from openapi_client.models.custom_channel_targeting_info import CustomChannelTargetingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CustomChannelTargetingInfo from a JSON string
custom_channel_targeting_info_instance = CustomChannelTargetingInfo.from_json(json)
# print the JSON string representation of the object
print(CustomChannelTargetingInfo.to_json())

# convert the object into a dict
custom_channel_targeting_info_dict = custom_channel_targeting_info_instance.to_dict()
# create an instance of CustomChannelTargetingInfo from a dict
custom_channel_targeting_info_from_dict = CustomChannelTargetingInfo.from_dict(custom_channel_targeting_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


