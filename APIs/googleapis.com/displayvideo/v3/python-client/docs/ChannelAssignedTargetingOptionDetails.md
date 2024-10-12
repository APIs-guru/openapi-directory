# ChannelAssignedTargetingOptionDetails

Details for assigned channel targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CHANNEL`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** | Required. ID of the channel. Should refer to the channel ID field on a [Partner-owned channel](partners.channels#Channel.FIELDS.channel_id) or [advertiser-owned channel](advertisers.channels#Channel.FIELDS.channel_id) resource. | [optional] 
**negative** | **bool** | Indicates if this option is being negatively targeted. For advertiser level assigned targeting option, this field must be true. | [optional] 

## Example

```python
from openapi_client.models.channel_assigned_targeting_option_details import ChannelAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelAssignedTargetingOptionDetails from a JSON string
channel_assigned_targeting_option_details_instance = ChannelAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ChannelAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
channel_assigned_targeting_option_details_dict = channel_assigned_targeting_option_details_instance.to_dict()
# create an instance of ChannelAssignedTargetingOptionDetails from a dict
channel_assigned_targeting_option_details_from_dict = ChannelAssignedTargetingOptionDetails.from_dict(channel_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


