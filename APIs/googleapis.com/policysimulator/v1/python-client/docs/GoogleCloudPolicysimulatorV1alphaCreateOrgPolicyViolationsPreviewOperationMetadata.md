# GoogleCloudPolicysimulatorV1alphaCreateOrgPolicyViolationsPreviewOperationMetadata

CreateOrgPolicyViolationsPreviewOperationMetadata is metadata about an OrgPolicyViolationsPreview generations operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_time** | **str** | Time when the request was received. | [optional] 
**resources_found** | **int** | Total number of resources that need scanning. Should equal resource_scanned + resources_pending | [optional] 
**resources_pending** | **int** | Number of resources still to scan. | [optional] 
**resources_scanned** | **int** | Number of resources already scanned. | [optional] 
**start_time** | **str** | Time when the request started processing, i.e., when the state was set to RUNNING. | [optional] 
**state** | **str** | Output only. The current state of the operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_policysimulator_v1alpha_create_org_policy_violations_preview_operation_metadata import GoogleCloudPolicysimulatorV1alphaCreateOrgPolicyViolationsPreviewOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPolicysimulatorV1alphaCreateOrgPolicyViolationsPreviewOperationMetadata from a JSON string
google_cloud_policysimulator_v1alpha_create_org_policy_violations_preview_operation_metadata_instance = GoogleCloudPolicysimulatorV1alphaCreateOrgPolicyViolationsPreviewOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPolicysimulatorV1alphaCreateOrgPolicyViolationsPreviewOperationMetadata.to_json())

# convert the object into a dict
google_cloud_policysimulator_v1alpha_create_org_policy_violations_preview_operation_metadata_dict = google_cloud_policysimulator_v1alpha_create_org_policy_violations_preview_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudPolicysimulatorV1alphaCreateOrgPolicyViolationsPreviewOperationMetadata from a dict
google_cloud_policysimulator_v1alpha_create_org_policy_violations_preview_operation_metadata_from_dict = GoogleCloudPolicysimulatorV1alphaCreateOrgPolicyViolationsPreviewOperationMetadata.from_dict(google_cloud_policysimulator_v1alpha_create_org_policy_violations_preview_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


