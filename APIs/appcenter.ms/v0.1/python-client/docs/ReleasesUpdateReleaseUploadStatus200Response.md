# ReleasesUpdateReleaseUploadStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID for the upload. | 
**upload_status** | **str** | The current upload status. | 

## Example

```python
from openapi_client.models.releases_update_release_upload_status200_response import ReleasesUpdateReleaseUploadStatus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesUpdateReleaseUploadStatus200Response from a JSON string
releases_update_release_upload_status200_response_instance = ReleasesUpdateReleaseUploadStatus200Response.from_json(json)
# print the JSON string representation of the object
print(ReleasesUpdateReleaseUploadStatus200Response.to_json())

# convert the object into a dict
releases_update_release_upload_status200_response_dict = releases_update_release_upload_status200_response_instance.to_dict()
# create an instance of ReleasesUpdateReleaseUploadStatus200Response from a dict
releases_update_release_upload_status200_response_from_dict = ReleasesUpdateReleaseUploadStatus200Response.from_dict(releases_update_release_upload_status200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


