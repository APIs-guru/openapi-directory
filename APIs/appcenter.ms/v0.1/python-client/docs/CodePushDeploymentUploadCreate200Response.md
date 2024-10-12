# CodePushDeploymentUploadCreate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID for the newly created upload. It is going to be required later in the process. | 
**token** | **str** | The URL encoded token used for upload permissions. | 
**upload_domain** | **str** | The URL domain used to upload the release. | 

## Example

```python
from openapi_client.models.code_push_deployment_upload_create200_response import CodePushDeploymentUploadCreate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CodePushDeploymentUploadCreate200Response from a JSON string
code_push_deployment_upload_create200_response_instance = CodePushDeploymentUploadCreate200Response.from_json(json)
# print the JSON string representation of the object
print(CodePushDeploymentUploadCreate200Response.to_json())

# convert the object into a dict
code_push_deployment_upload_create200_response_dict = code_push_deployment_upload_create200_response_instance.to_dict()
# create an instance of CodePushDeploymentUploadCreate200Response from a dict
code_push_deployment_upload_create200_response_from_dict = CodePushDeploymentUploadCreate200Response.from_dict(code_push_deployment_upload_create200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


