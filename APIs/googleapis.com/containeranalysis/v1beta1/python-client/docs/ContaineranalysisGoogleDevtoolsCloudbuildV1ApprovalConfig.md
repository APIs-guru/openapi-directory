# ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig

ApprovalConfig describes configuration for manual approval of a build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_required** | **bool** | Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_approval_config import ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_approval_config_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_approval_config_dict = containeranalysis_google_devtools_cloudbuild_v1_approval_config_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig from a dict
containeranalysis_google_devtools_cloudbuild_v1_approval_config_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig.from_dict(containeranalysis_google_devtools_cloudbuild_v1_approval_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


