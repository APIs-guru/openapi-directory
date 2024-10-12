# YoutubeAdGroupAssignedTargetingOption

Wrapper object associating an AssignedTargetingOption resource and the youtube ad group it is assigned to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_targeting_option** | [**AssignedTargetingOption**](AssignedTargetingOption.md) |  | [optional] 
**youtube_ad_group_id** | **str** | The ID of the youtube ad group the assigned targeting option is assigned to. | [optional] 

## Example

```python
from openapi_client.models.youtube_ad_group_assigned_targeting_option import YoutubeAdGroupAssignedTargetingOption

# TODO update the JSON string below
json = "{}"
# create an instance of YoutubeAdGroupAssignedTargetingOption from a JSON string
youtube_ad_group_assigned_targeting_option_instance = YoutubeAdGroupAssignedTargetingOption.from_json(json)
# print the JSON string representation of the object
print(YoutubeAdGroupAssignedTargetingOption.to_json())

# convert the object into a dict
youtube_ad_group_assigned_targeting_option_dict = youtube_ad_group_assigned_targeting_option_instance.to_dict()
# create an instance of YoutubeAdGroupAssignedTargetingOption from a dict
youtube_ad_group_assigned_targeting_option_from_dict = YoutubeAdGroupAssignedTargetingOption.from_dict(youtube_ad_group_assigned_targeting_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


