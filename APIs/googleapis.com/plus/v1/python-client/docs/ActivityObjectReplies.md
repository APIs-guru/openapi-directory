# ActivityObjectReplies

Comments in reply to this activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_link** | **str** | The URL for the collection of comments in reply to this activity. | [optional] 
**total_items** | **int** | Total number of comments on this activity. | [optional] 

## Example

```python
from openapi_client.models.activity_object_replies import ActivityObjectReplies

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityObjectReplies from a JSON string
activity_object_replies_instance = ActivityObjectReplies.from_json(json)
# print the JSON string representation of the object
print(ActivityObjectReplies.to_json())

# convert the object into a dict
activity_object_replies_dict = activity_object_replies_instance.to_dict()
# create an instance of ActivityObjectReplies from a dict
activity_object_replies_from_dict = ActivityObjectReplies.from_dict(activity_object_replies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


