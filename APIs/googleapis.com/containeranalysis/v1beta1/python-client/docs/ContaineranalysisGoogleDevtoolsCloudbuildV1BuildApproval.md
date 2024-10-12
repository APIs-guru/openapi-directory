# ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval

BuildApproval describes a build's approval configuration, state, and result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig**](ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig.md) |  | [optional] 
**result** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult**](ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult.md) |  | [optional] 
**state** | **str** | Output only. The state of this build&#39;s approval. | [optional] [readonly] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_build_approval import ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_build_approval_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_build_approval_dict = containeranalysis_google_devtools_cloudbuild_v1_build_approval_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval from a dict
containeranalysis_google_devtools_cloudbuild_v1_build_approval_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval.from_dict(containeranalysis_google_devtools_cloudbuild_v1_build_approval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


