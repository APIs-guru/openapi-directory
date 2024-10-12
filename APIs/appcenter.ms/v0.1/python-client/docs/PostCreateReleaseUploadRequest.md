# PostCreateReleaseUploadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_number** | **str** | User defined build number | [optional] 
**build_version** | **str** | User defined build version | [optional] 

## Example

```python
from openapi_client.models.post_create_release_upload_request import PostCreateReleaseUploadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostCreateReleaseUploadRequest from a JSON string
post_create_release_upload_request_instance = PostCreateReleaseUploadRequest.from_json(json)
# print the JSON string representation of the object
print(PostCreateReleaseUploadRequest.to_json())

# convert the object into a dict
post_create_release_upload_request_dict = post_create_release_upload_request_instance.to_dict()
# create an instance of PostCreateReleaseUploadRequest from a dict
post_create_release_upload_request_from_dict = PostCreateReleaseUploadRequest.from_dict(post_create_release_upload_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


