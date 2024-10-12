# ReleasesGetReleaseUploadStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_details** | **str** | Details describing what went wrong processing the upload. Will only be set if status &#x3D; &#39;error&#39;. | [optional] 
**id** | **str** | The ID for the upload. | 
**release_distinct_id** | **float** | The distinct ID of the release. Will only be set when the status &#x3D; &#39;readyToBePublished&#39;. | [optional] 
**release_url** | **object** | The URL of the release. Will only be set when the status &#x3D; &#39;readyToBePublished&#39;. | [optional] 
**upload_status** | **str** | The current upload status. | 

## Example

```python
from openapi_client.models.releases_get_release_upload_status200_response import ReleasesGetReleaseUploadStatus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesGetReleaseUploadStatus200Response from a JSON string
releases_get_release_upload_status200_response_instance = ReleasesGetReleaseUploadStatus200Response.from_json(json)
# print the JSON string representation of the object
print(ReleasesGetReleaseUploadStatus200Response.to_json())

# convert the object into a dict
releases_get_release_upload_status200_response_dict = releases_get_release_upload_status200_response_instance.to_dict()
# create an instance of ReleasesGetReleaseUploadStatus200Response from a dict
releases_get_release_upload_status200_response_from_dict = ReleasesGetReleaseUploadStatus200Response.from_dict(releases_get_release_upload_status200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


