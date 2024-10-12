# PostPlaceholderReleaseUploadForDeleteRequest

Set additional details for the placeholder ReleaseUpload that will be scheduled for delete.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_details** | **str** | Additional details to identify why the placeholder ReleaseUpload is being created. | [optional] 

## Example

```python
from openapi_client.models.post_placeholder_release_upload_for_delete_request import PostPlaceholderReleaseUploadForDeleteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostPlaceholderReleaseUploadForDeleteRequest from a JSON string
post_placeholder_release_upload_for_delete_request_instance = PostPlaceholderReleaseUploadForDeleteRequest.from_json(json)
# print the JSON string representation of the object
print(PostPlaceholderReleaseUploadForDeleteRequest.to_json())

# convert the object into a dict
post_placeholder_release_upload_for_delete_request_dict = post_placeholder_release_upload_for_delete_request_instance.to_dict()
# create an instance of PostPlaceholderReleaseUploadForDeleteRequest from a dict
post_placeholder_release_upload_for_delete_request_from_dict = PostPlaceholderReleaseUploadForDeleteRequest.from_dict(post_placeholder_release_upload_for_delete_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


