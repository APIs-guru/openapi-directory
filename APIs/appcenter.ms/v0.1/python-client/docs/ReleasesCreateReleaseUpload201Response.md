# ReleasesCreateReleaseUpload201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID for the newly created upload. It is going to be required later in the process. | 
**package_asset_id** | **str** | The associated asset ID in the file management service associated with this uploaded. | 
**token** | **str** | The access token used for upload permissions. | 
**upload_domain** | **str** | The URL domain used to upload the release. | 
**url_encoded_token** | **str** | The access token used for upload permissions (URL encoded to use as a single query parameter). | 

## Example

```python
from openapi_client.models.releases_create_release_upload201_response import ReleasesCreateReleaseUpload201Response

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesCreateReleaseUpload201Response from a JSON string
releases_create_release_upload201_response_instance = ReleasesCreateReleaseUpload201Response.from_json(json)
# print the JSON string representation of the object
print(ReleasesCreateReleaseUpload201Response.to_json())

# convert the object into a dict
releases_create_release_upload201_response_dict = releases_create_release_upload201_response_instance.to_dict()
# create an instance of ReleasesCreateReleaseUpload201Response from a dict
releases_create_release_upload201_response_from_dict = ReleasesCreateReleaseUpload201Response.from_dict(releases_create_release_upload201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


