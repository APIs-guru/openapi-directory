# ActivityContentDetailsComment

Information about a resource that received a comment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | [**ResourceId**](ResourceId.md) |  | [optional] 

## Example

```python
from openapi_client.models.activity_content_details_comment import ActivityContentDetailsComment

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityContentDetailsComment from a JSON string
activity_content_details_comment_instance = ActivityContentDetailsComment.from_json(json)
# print the JSON string representation of the object
print(ActivityContentDetailsComment.to_json())

# convert the object into a dict
activity_content_details_comment_dict = activity_content_details_comment_instance.to_dict()
# create an instance of ActivityContentDetailsComment from a dict
activity_content_details_comment_from_dict = ActivityContentDetailsComment.from_dict(activity_content_details_comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


