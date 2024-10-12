# Activity

An *activity* resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_details** | [**ActivityContentDetails**](ActivityContentDetails.md) |  | [optional] 
**etag** | **str** | Etag of this resource | [optional] 
**id** | **str** | The ID that YouTube uses to uniquely identify the activity. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#activity\&quot;. | [optional] [default to 'youtube#activity']
**snippet** | [**ActivitySnippet**](ActivitySnippet.md) |  | [optional] 

## Example

```python
from openapi_client.models.activity import Activity

# TODO update the JSON string below
json = "{}"
# create an instance of Activity from a JSON string
activity_instance = Activity.from_json(json)
# print the JSON string representation of the object
print(Activity.to_json())

# convert the object into a dict
activity_dict = activity_instance.to_dict()
# create an instance of Activity from a dict
activity_from_dict = Activity.from_dict(activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


