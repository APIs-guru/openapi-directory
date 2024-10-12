# ActivityContentDetailsUpload

Information about the uploaded video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**video_id** | **str** | The ID that YouTube uses to uniquely identify the uploaded video. | [optional] 

## Example

```python
from openapi_client.models.activity_content_details_upload import ActivityContentDetailsUpload

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityContentDetailsUpload from a JSON string
activity_content_details_upload_instance = ActivityContentDetailsUpload.from_json(json)
# print the JSON string representation of the object
print(ActivityContentDetailsUpload.to_json())

# convert the object into a dict
activity_content_details_upload_dict = activity_content_details_upload_instance.to_dict()
# create an instance of ActivityContentDetailsUpload from a dict
activity_content_details_upload_from_dict = ActivityContentDetailsUpload.from_dict(activity_content_details_upload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


