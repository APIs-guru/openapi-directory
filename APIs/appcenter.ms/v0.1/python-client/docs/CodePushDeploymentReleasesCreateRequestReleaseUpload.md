# CodePushDeploymentReleasesCreateRequestReleaseUpload

The upload metadata from the release initialization step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID for the newly created upload. It is going to be required later in the process. | 
**token** | **str** | The URL encoded token used for upload permissions. | 
**upload_domain** | **str** | The URL domain used to upload the release. | 

## Example

```python
from openapi_client.models.code_push_deployment_releases_create_request_release_upload import CodePushDeploymentReleasesCreateRequestReleaseUpload

# TODO update the JSON string below
json = "{}"
# create an instance of CodePushDeploymentReleasesCreateRequestReleaseUpload from a JSON string
code_push_deployment_releases_create_request_release_upload_instance = CodePushDeploymentReleasesCreateRequestReleaseUpload.from_json(json)
# print the JSON string representation of the object
print(CodePushDeploymentReleasesCreateRequestReleaseUpload.to_json())

# convert the object into a dict
code_push_deployment_releases_create_request_release_upload_dict = code_push_deployment_releases_create_request_release_upload_instance.to_dict()
# create an instance of CodePushDeploymentReleasesCreateRequestReleaseUpload from a dict
code_push_deployment_releases_create_request_release_upload_from_dict = CodePushDeploymentReleasesCreateRequestReleaseUpload.from_dict(code_push_deployment_releases_create_request_release_upload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


