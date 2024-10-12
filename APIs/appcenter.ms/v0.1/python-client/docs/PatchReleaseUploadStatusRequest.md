# PatchReleaseUploadStatusRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upload_status** | **str** | The new status of the release upload | 

## Example

```python
from openapi_client.models.patch_release_upload_status_request import PatchReleaseUploadStatusRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchReleaseUploadStatusRequest from a JSON string
patch_release_upload_status_request_instance = PatchReleaseUploadStatusRequest.from_json(json)
# print the JSON string representation of the object
print(PatchReleaseUploadStatusRequest.to_json())

# convert the object into a dict
patch_release_upload_status_request_dict = patch_release_upload_status_request_instance.to_dict()
# create an instance of PatchReleaseUploadStatusRequest from a dict
patch_release_upload_status_request_from_dict = PatchReleaseUploadStatusRequest.from_dict(patch_release_upload_status_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


