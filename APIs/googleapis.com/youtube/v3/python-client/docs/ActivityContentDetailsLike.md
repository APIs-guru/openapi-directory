# ActivityContentDetailsLike

Information about a resource that received a positive (like) rating.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | [**ResourceId**](ResourceId.md) |  | [optional] 

## Example

```python
from openapi_client.models.activity_content_details_like import ActivityContentDetailsLike

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityContentDetailsLike from a JSON string
activity_content_details_like_instance = ActivityContentDetailsLike.from_json(json)
# print the JSON string representation of the object
print(ActivityContentDetailsLike.to_json())

# convert the object into a dict
activity_content_details_like_dict = activity_content_details_like_instance.to_dict()
# create an instance of ActivityContentDetailsLike from a dict
activity_content_details_like_from_dict = ActivityContentDetailsLike.from_dict(activity_content_details_like_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


