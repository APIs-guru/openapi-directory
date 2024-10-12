# PatchReleaseUploadStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID for the upload. | 
**upload_status** | **str** | The current upload status. | 

## Example

```python
from openapi_client.models.patch_release_upload_status_response import PatchReleaseUploadStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PatchReleaseUploadStatusResponse from a JSON string
patch_release_upload_status_response_instance = PatchReleaseUploadStatusResponse.from_json(json)
# print the JSON string representation of the object
print(PatchReleaseUploadStatusResponse.to_json())

# convert the object into a dict
patch_release_upload_status_response_dict = patch_release_upload_status_response_instance.to_dict()
# create an instance of PatchReleaseUploadStatusResponse from a dict
patch_release_upload_status_response_from_dict = PatchReleaseUploadStatusResponse.from_dict(patch_release_upload_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


