# ActivityFeed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of this response for caching purposes. | [optional] 
**id** | **str** | The ID of this collection of activities. Deprecated. | [optional] 
**items** | [**List[Activity]**](Activity.md) | The activities in this page of results. | [optional] 
**kind** | **str** | Identifies this resource as a collection of activities. Value: \&quot;plus#activityFeed\&quot;. | [optional] [default to 'plus#activityFeed']
**next_link** | **str** | Link to the next page of activities. | [optional] 
**next_page_token** | **str** | The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 
**self_link** | **str** | Link to this activity resource. | [optional] 
**title** | **str** | The title of this collection of activities, which is a truncated portion of the content. | [optional] 
**updated** | **datetime** | The time at which this collection of activities was last updated. Formatted as an RFC 3339 timestamp. | [optional] 

## Example

```python
from openapi_client.models.activity_feed import ActivityFeed

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityFeed from a JSON string
activity_feed_instance = ActivityFeed.from_json(json)
# print the JSON string representation of the object
print(ActivityFeed.to_json())

# convert the object into a dict
activity_feed_dict = activity_feed_instance.to_dict()
# create an instance of ActivityFeed from a dict
activity_feed_from_dict = ActivityFeed.from_dict(activity_feed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


