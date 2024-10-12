# AccessApprovalSettings

Settings on a Project/Folder/Organization related to Access Approval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_key_version** | **str** | The asymmetric crypto key version to use for signing approval requests. Empty active_key_version indicates that a Google-managed key should be used for signing. This property will be ignored if set by an ancestor of this resource, and new non-empty values may not be set. | [optional] 
**ancestor_has_active_key_version** | **bool** | Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that an ancestor of this Project or Folder has set active_key_version (this field will always be unset for the organization since organizations do not have ancestors). | [optional] [readonly] 
**enrolled_ancestor** | **bool** | Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors). | [optional] [readonly] 
**enrolled_services** | [**List[EnrolledService]**](EnrolledService.md) | A list of Google Cloud Services for which the given resource has Access Approval enrolled. Access requests for the resource given by name against any of these services contained here will be required to have explicit approval. If name refers to an organization, enrollment can be done for individual services. If name refers to a folder or project, enrollment can only be done on an all or nothing basis. If a cloud_product is repeated in this list, the first entry will be honored and all following entries will be discarded. A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded. | [optional] 
**invalid_key_version** | **bool** | Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that there is some configuration issue with the active_key_version configured at this level in the resource hierarchy (e.g. it doesn&#39;t exist or the Access Approval service account doesn&#39;t have the correct permissions on it, etc.) This key version is not necessarily the effective key version at this level, as key versions are inherited top-down. | [optional] [readonly] 
**name** | **str** | The resource name of the settings. Format is one of: * \&quot;projects/{project}/accessApprovalSettings\&quot; * \&quot;folders/{folder}/accessApprovalSettings\&quot; * \&quot;organizations/{organization}/accessApprovalSettings\&quot; | [optional] 
**notification_emails** | **List[str]** | A list of email addresses to which notifications relating to approval requests should be sent. Notifications relating to a resource will be sent to all emails in the settings of ancestor resources of that resource. A maximum of 50 email addresses are allowed. | [optional] 
**notification_pubsub_topic** | **str** | Optional. A pubsub topic to which notifications relating to approval requests should be sent. | [optional] 
**prefer_no_broad_approval_requests** | **bool** | This preference is communicated to Google personnel when sending an approval request but can be overridden if necessary. | [optional] 
**preferred_request_expiration_days** | **int** | This preference is shared with Google personnel, but can be overridden if said personnel deems necessary. The approver ultimately can set the expiration at approval time. | [optional] 

## Example

```python
from openapi_client.models.access_approval_settings import AccessApprovalSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AccessApprovalSettings from a JSON string
access_approval_settings_instance = AccessApprovalSettings.from_json(json)
# print the JSON string representation of the object
print(AccessApprovalSettings.to_json())

# convert the object into a dict
access_approval_settings_dict = access_approval_settings_instance.to_dict()
# create an instance of AccessApprovalSettings from a dict
access_approval_settings_from_dict = AccessApprovalSettings.from_dict(access_approval_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


