# ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult

ApprovalResult describes the decision and associated metadata of a manual approval of a build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_time** | **str** | Output only. The time when the approval decision was made. | [optional] [readonly] 
**approver_account** | **str** | Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called. | [optional] [readonly] 
**comment** | **str** | Optional. An optional comment for this manual approval result. | [optional] 
**decision** | **str** | Required. The decision of this manual approval. | [optional] 
**url** | **str** | Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_approval_result import ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_approval_result_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_approval_result_dict = containeranalysis_google_devtools_cloudbuild_v1_approval_result_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult from a dict
containeranalysis_google_devtools_cloudbuild_v1_approval_result_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult.from_dict(containeranalysis_google_devtools_cloudbuild_v1_approval_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


