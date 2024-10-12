# CreateReleaseUploadResponse


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
from openapi_client.models.create_release_upload_response import CreateReleaseUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateReleaseUploadResponse from a JSON string
create_release_upload_response_instance = CreateReleaseUploadResponse.from_json(json)
# print the JSON string representation of the object
print(CreateReleaseUploadResponse.to_json())

# convert the object into a dict
create_release_upload_response_dict = create_release_upload_response_instance.to_dict()
# create an instance of CreateReleaseUploadResponse from a dict
create_release_upload_response_from_dict = CreateReleaseUploadResponse.from_dict(create_release_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


