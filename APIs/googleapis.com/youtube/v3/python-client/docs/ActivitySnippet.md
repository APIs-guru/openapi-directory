# ActivitySnippet

Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** | The ID that YouTube uses to uniquely identify the channel associated with the activity. | [optional] 
**channel_title** | **str** | Channel title for the channel responsible for this activity | [optional] 
**description** | **str** | The description of the resource primarily associated with the activity. @mutable youtube.activities.insert | [optional] 
**group_id** | **str** | The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user&#39;s activity feed. In your user interface, you can avoid repetition by grouping events with the same groupId value. | [optional] 
**published_at** | **datetime** | The date and time that the video was uploaded. | [optional] 
**thumbnails** | [**ThumbnailDetails**](ThumbnailDetails.md) |  | [optional] 
**title** | **str** | The title of the resource primarily associated with the activity. | [optional] 
**type** | **str** | The type of activity that the resource describes. | [optional] 

## Example

```python
from openapi_client.models.activity_snippet import ActivitySnippet

# TODO update the JSON string below
json = "{}"
# create an instance of ActivitySnippet from a JSON string
activity_snippet_instance = ActivitySnippet.from_json(json)
# print the JSON string representation of the object
print(ActivitySnippet.to_json())

# convert the object into a dict
activity_snippet_dict = activity_snippet_instance.to_dict()
# create an instance of ActivitySnippet from a dict
activity_snippet_from_dict = ActivitySnippet.from_dict(activity_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


