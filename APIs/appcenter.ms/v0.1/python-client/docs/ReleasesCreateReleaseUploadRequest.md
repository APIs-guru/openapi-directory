# ReleasesCreateReleaseUploadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_number** | **str** | User defined build number | [optional] 
**build_version** | **str** | User defined build version | [optional] 

## Example

```python
from openapi_client.models.releases_create_release_upload_request import ReleasesCreateReleaseUploadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesCreateReleaseUploadRequest from a JSON string
releases_create_release_upload_request_instance = ReleasesCreateReleaseUploadRequest.from_json(json)
# print the JSON string representation of the object
print(ReleasesCreateReleaseUploadRequest.to_json())

# convert the object into a dict
releases_create_release_upload_request_dict = releases_create_release_upload_request_instance.to_dict()
# create an instance of ReleasesCreateReleaseUploadRequest from a dict
releases_create_release_upload_request_from_dict = ReleasesCreateReleaseUploadRequest.from_dict(releases_create_release_upload_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


