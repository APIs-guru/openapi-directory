# GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration

Expiration configs for the approval request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_time** | **str** | Output only. Time after which the suspension expires, if no action taken. | [optional] [readonly] 
**lift_when_expired** | **bool** | Whether the suspension will be REJECTED or LIFTED upon expiration. REJECTED is the default behavior. | [optional] 
**remind_time** | **str** | Time after the previous suspension action reminder, if any, is sent using the selected notification option, for a suspension which is still PENDING_UNSPECIFIED. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_suspension_approval_expiration import GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration from a JSON string
google_cloud_integrations_v1alpha_suspension_approval_expiration_instance = GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_suspension_approval_expiration_dict = google_cloud_integrations_v1alpha_suspension_approval_expiration_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration from a dict
google_cloud_integrations_v1alpha_suspension_approval_expiration_from_dict = GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration.from_dict(google_cloud_integrations_v1alpha_suspension_approval_expiration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


