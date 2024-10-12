# ActivityContentDetailsFavorite

Information about a video that was marked as a favorite video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | [**ResourceId**](ResourceId.md) |  | [optional] 

## Example

```python
from openapi_client.models.activity_content_details_favorite import ActivityContentDetailsFavorite

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityContentDetailsFavorite from a JSON string
activity_content_details_favorite_instance = ActivityContentDetailsFavorite.from_json(json)
# print the JSON string representation of the object
print(ActivityContentDetailsFavorite.to_json())

# convert the object into a dict
activity_content_details_favorite_dict = activity_content_details_favorite_instance.to_dict()
# create an instance of ActivityContentDetailsFavorite from a dict
activity_content_details_favorite_from_dict = ActivityContentDetailsFavorite.from_dict(activity_content_details_favorite_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


