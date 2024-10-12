# GoogleCloudSecuritycenterV2Access

Represents an access event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caller_ip** | **str** | Caller&#39;s IP address, such as \&quot;1.1.1.1\&quot;. | [optional] 
**caller_ip_geo** | [**GoogleCloudSecuritycenterV2Geolocation**](GoogleCloudSecuritycenterV2Geolocation.md) |  | [optional] 
**method_name** | **str** | The method that the service account called, e.g. \&quot;SetIamPolicy\&quot;. | [optional] 
**principal_email** | **str** | Associated email, such as \&quot;foo@google.com\&quot;. The email address of the authenticated user or a service account acting on behalf of a third party principal making the request. For third party identity callers, the &#x60;principal_subject&#x60; field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id). | [optional] 
**principal_subject** | **str** | A string that represents the principal_subject that is associated with the identity. Unlike &#x60;principal_email&#x60;, &#x60;principal_subject&#x60; supports principals that aren&#39;t associated with email addresses, such as third party principals. For most identities, the format is &#x60;principal://iam.googleapis.com/{identity pool name}/subject/{subject}&#x60;. Some GKE identities, such as GKE_WORKLOAD, FREEFORM, and GKE_HUB_WORKLOAD, still use the legacy format &#x60;serviceAccount:{identity pool name}[{subject}]&#x60;. | [optional] 
**service_account_delegation_info** | [**List[GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo]**](GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo.md) | The identity delegation history of an authenticated service account that made the request. The &#x60;serviceAccountDelegationInfo[]&#x60; object contains information about the real authorities that try to access Google Cloud resources by delegating on a service account. When multiple authorities are present, they are guaranteed to be sorted based on the original ordering of the identity delegation events. | [optional] 
**service_account_key_name** | **str** | The name of the service account key that was used to create or exchange credentials when authenticating the service account that made the request. This is a scheme-less URI full resource name. For example: \&quot;//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}\&quot;.  | [optional] 
**service_name** | **str** | This is the API service that the service account made a call to, e.g. \&quot;iam.googleapis.com\&quot; | [optional] 
**user_agent** | **str** | The caller&#39;s user agent string associated with the finding. | [optional] 
**user_agent_family** | **str** | Type of user agent associated with the finding. For example, an operating system shell or an embedded or standalone application. | [optional] 
**user_name** | **str** | A string that represents a username. The username provided depends on the type of the finding and is likely not an IAM principal. For example, this can be a system username if the finding is related to a virtual machine, or it can be an application login username. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_access import GoogleCloudSecuritycenterV2Access

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Access from a JSON string
google_cloud_securitycenter_v2_access_instance = GoogleCloudSecuritycenterV2Access.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Access.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_access_dict = google_cloud_securitycenter_v2_access_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Access from a dict
google_cloud_securitycenter_v2_access_from_dict = GoogleCloudSecuritycenterV2Access.from_dict(google_cloud_securitycenter_v2_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


