# CodePushDeploymentReleasesCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_name** | **str** | This specifies which deployment you want to release the update to. Default is Staging. | [optional] 
**description** | **str** | This provides an optional \&quot;change log\&quot; for the deployment. | [optional] 
**disabled** | **bool** | This specifies whether an update should be downloadable by end users or not. | [optional] 
**mandatory** | **bool** | This specifies whether the update should be considered mandatory or not (e.g. it includes a critical security fix). | [optional] 
**no_duplicate_release_error** | **bool** | This specifies that if the update is identical to the latest release on the deployment, the CLI should generate a warning instead of an error. | [optional] 
**release_upload** | [**CodePushDeploymentReleasesCreateRequestReleaseUpload**](CodePushDeploymentReleasesCreateRequestReleaseUpload.md) |  | 
**rollout** | **int** | This specifies the percentage of users (as an integer between 1 and 100) that should be eligible to receive this update. | [optional] 
**target_binary_version** | **str** | the binary version of the application | 

## Example

```python
from openapi_client.models.code_push_deployment_releases_create_request import CodePushDeploymentReleasesCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CodePushDeploymentReleasesCreateRequest from a JSON string
code_push_deployment_releases_create_request_instance = CodePushDeploymentReleasesCreateRequest.from_json(json)
# print the JSON string representation of the object
print(CodePushDeploymentReleasesCreateRequest.to_json())

# convert the object into a dict
code_push_deployment_releases_create_request_dict = code_push_deployment_releases_create_request_instance.to_dict()
# create an instance of CodePushDeploymentReleasesCreateRequest from a dict
code_push_deployment_releases_create_request_from_dict = CodePushDeploymentReleasesCreateRequest.from_dict(code_push_deployment_releases_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


