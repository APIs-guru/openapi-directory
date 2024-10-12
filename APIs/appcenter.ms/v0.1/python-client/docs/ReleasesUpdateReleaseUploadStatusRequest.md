# ReleasesUpdateReleaseUploadStatusRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upload_status** | **str** | The new status of the release upload | 

## Example

```python
from openapi_client.models.releases_update_release_upload_status_request import ReleasesUpdateReleaseUploadStatusRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesUpdateReleaseUploadStatusRequest from a JSON string
releases_update_release_upload_status_request_instance = ReleasesUpdateReleaseUploadStatusRequest.from_json(json)
# print the JSON string representation of the object
print(ReleasesUpdateReleaseUploadStatusRequest.to_json())

# convert the object into a dict
releases_update_release_upload_status_request_dict = releases_update_release_upload_status_request_instance.to_dict()
# create an instance of ReleasesUpdateReleaseUploadStatusRequest from a dict
releases_update_release_upload_status_request_from_dict = ReleasesUpdateReleaseUploadStatusRequest.from_dict(releases_update_release_upload_status_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


