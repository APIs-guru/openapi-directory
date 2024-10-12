# GoogleCloudSecuritycenterV2Finding

Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | [**GoogleCloudSecuritycenterV2Access**](GoogleCloudSecuritycenterV2Access.md) |  | [optional] 
**application** | [**GoogleCloudSecuritycenterV2Application**](GoogleCloudSecuritycenterV2Application.md) |  | [optional] 
**attack_exposure** | [**GoogleCloudSecuritycenterV2AttackExposure**](GoogleCloudSecuritycenterV2AttackExposure.md) |  | [optional] 
**backup_disaster_recovery** | [**GoogleCloudSecuritycenterV2BackupDisasterRecovery**](GoogleCloudSecuritycenterV2BackupDisasterRecovery.md) |  | [optional] 
**canonical_name** | **str** | Output only. The canonical name of the finding. The following list shows some examples: + &#x60;organizations/{organization_id}/sources/{source_id}/findings/{finding_id}&#x60; + &#x60;organizations/{organization_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}&#x60; + &#x60;folders/{folder_id}/sources/{source_id}/findings/{finding_id}&#x60; + &#x60;folders/{folder_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}&#x60; + &#x60;projects/{project_id}/sources/{source_id}/findings/{finding_id}&#x60; + &#x60;projects/{project_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}&#x60; The prefix is the closest CRM ancestor of the resource associated with the finding. | [optional] [readonly] 
**category** | **str** | Immutable. The additional taxonomy group within findings from a given source. Example: \&quot;XSS_FLASH_INJECTION\&quot; | [optional] 
**cloud_dlp_data_profile** | [**GoogleCloudSecuritycenterV2CloudDlpDataProfile**](GoogleCloudSecuritycenterV2CloudDlpDataProfile.md) |  | [optional] 
**cloud_dlp_inspection** | [**GoogleCloudSecuritycenterV2CloudDlpInspection**](GoogleCloudSecuritycenterV2CloudDlpInspection.md) |  | [optional] 
**compliances** | [**List[GoogleCloudSecuritycenterV2Compliance]**](GoogleCloudSecuritycenterV2Compliance.md) | Contains compliance information for security standards associated to the finding. | [optional] 
**connections** | [**List[GoogleCloudSecuritycenterV2Connection]**](GoogleCloudSecuritycenterV2Connection.md) | Contains information about the IP connection associated with the finding. | [optional] 
**contacts** | [**Dict[str, GoogleCloudSecuritycenterV2ContactDetails]**](GoogleCloudSecuritycenterV2ContactDetails.md) | Output only. Map containing the points of contact for the given finding. The key represents the type of contact, while the value contains a list of all the contacts that pertain. Please refer to: https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories { \&quot;security\&quot;: { \&quot;contacts\&quot;: [ { \&quot;email\&quot;: \&quot;person1@company.com\&quot; }, { \&quot;email\&quot;: \&quot;person2@company.com\&quot; } ] } } | [optional] [readonly] 
**containers** | [**List[GoogleCloudSecuritycenterV2Container]**](GoogleCloudSecuritycenterV2Container.md) | Containers associated with the finding. This field provides information for both Kubernetes and non-Kubernetes containers. | [optional] 
**create_time** | **str** | Output only. The time at which the finding was created in Security Command Center. | [optional] [readonly] 
**database** | [**GoogleCloudSecuritycenterV2Database**](GoogleCloudSecuritycenterV2Database.md) |  | [optional] 
**description** | **str** | Contains more details about the finding. | [optional] 
**event_time** | **str** | The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp. | [optional] 
**exfiltration** | [**GoogleCloudSecuritycenterV2Exfiltration**](GoogleCloudSecuritycenterV2Exfiltration.md) |  | [optional] 
**external_systems** | [**Dict[str, GoogleCloudSecuritycenterV2ExternalSystem]**](GoogleCloudSecuritycenterV2ExternalSystem.md) | Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields. | [optional] [readonly] 
**external_uri** | **str** | The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. | [optional] 
**files** | [**List[GoogleCloudSecuritycenterV2File]**](GoogleCloudSecuritycenterV2File.md) | File associated with the finding. | [optional] 
**finding_class** | **str** | The class of the finding. | [optional] 
**iam_bindings** | [**List[GoogleCloudSecuritycenterV2IamBinding]**](GoogleCloudSecuritycenterV2IamBinding.md) | Represents IAM bindings associated with the finding. | [optional] 
**indicator** | [**GoogleCloudSecuritycenterV2Indicator**](GoogleCloudSecuritycenterV2Indicator.md) |  | [optional] 
**kernel_rootkit** | [**GoogleCloudSecuritycenterV2KernelRootkit**](GoogleCloudSecuritycenterV2KernelRootkit.md) |  | [optional] 
**kubernetes** | [**GoogleCloudSecuritycenterV2Kubernetes**](GoogleCloudSecuritycenterV2Kubernetes.md) |  | [optional] 
**load_balancers** | [**List[GoogleCloudSecuritycenterV2LoadBalancer]**](GoogleCloudSecuritycenterV2LoadBalancer.md) | The load balancers associated with the finding. | [optional] 
**log_entries** | [**List[GoogleCloudSecuritycenterV2LogEntry]**](GoogleCloudSecuritycenterV2LogEntry.md) | Log entries that are relevant to the finding. | [optional] 
**mitre_attack** | [**GoogleCloudSecuritycenterV2MitreAttack**](GoogleCloudSecuritycenterV2MitreAttack.md) |  | [optional] 
**module_name** | **str** | Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885 | [optional] 
**mute** | **str** | Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn&#39;t set the value of mute. | [optional] 
**mute_initiator** | **str** | Records additional information about the mute operation, for example, the [mute configuration](https://cloud.google.com/security-command-center/docs/how-to-mute-findings) that muted the finding and the user who muted the finding. | [optional] 
**mute_update_time** | **str** | Output only. The most recent time this finding was muted or unmuted. | [optional] [readonly] 
**name** | **str** | The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. The following list shows some examples: + &#x60;organizations/{organization_id}/sources/{source_id}/findings/{finding_id}&#x60; + &#x60;organizations/{organization_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}&#x60; + &#x60;folders/{folder_id}/sources/{source_id}/findings/{finding_id}&#x60; + &#x60;folders/{folder_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}&#x60; + &#x60;projects/{project_id}/sources/{source_id}/findings/{finding_id}&#x60; + &#x60;projects/{project_id}/sources/{source_id}/locations/{location_id}/findings/{finding_id}&#x60; | [optional] 
**next_steps** | **str** | Steps to address the finding. | [optional] 
**org_policies** | [**List[GoogleCloudSecuritycenterV2OrgPolicy]**](GoogleCloudSecuritycenterV2OrgPolicy.md) | Contains information about the org policies associated with the finding. | [optional] 
**parent** | **str** | The relative resource name of the source and location the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. The following list shows some examples: + &#x60;organizations/{organization_id}/sources/{source_id}&#x60; + &#x60;folders/{folders_id}/sources/{source_id}&#x60; + &#x60;projects/{projects_id}/sources/{source_id}&#x60; + &#x60;organizations/{organization_id}/sources/{source_id}/locations/{location_id}&#x60; + &#x60;folders/{folders_id}/sources/{source_id}/locations/{location_id}&#x60; + &#x60;projects/{projects_id}/sources/{source_id}/locations/{location_id}&#x60; | [optional] 
**parent_display_name** | **str** | Output only. The human readable display name of the finding source such as \&quot;Event Threat Detection\&quot; or \&quot;Security Health Analytics\&quot;. | [optional] [readonly] 
**processes** | [**List[GoogleCloudSecuritycenterV2Process]**](GoogleCloudSecuritycenterV2Process.md) | Represents operating system processes associated with the Finding. | [optional] 
**resource_name** | **str** | Immutable. For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. | [optional] 
**security_marks** | [**GoogleCloudSecuritycenterV2SecurityMarks**](GoogleCloudSecuritycenterV2SecurityMarks.md) |  | [optional] 
**security_posture** | [**GoogleCloudSecuritycenterV2SecurityPosture**](GoogleCloudSecuritycenterV2SecurityPosture.md) |  | [optional] 
**severity** | **str** | The severity of the finding. This field is managed by the source that writes the finding. | [optional] 
**source_properties** | **Dict[str, object]** | Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. | [optional] 
**state** | **str** | Output only. The state of the finding. | [optional] [readonly] 
**vulnerability** | [**GoogleCloudSecuritycenterV2Vulnerability**](GoogleCloudSecuritycenterV2Vulnerability.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_finding import GoogleCloudSecuritycenterV2Finding

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Finding from a JSON string
google_cloud_securitycenter_v2_finding_instance = GoogleCloudSecuritycenterV2Finding.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Finding.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_finding_dict = google_cloud_securitycenter_v2_finding_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Finding from a dict
google_cloud_securitycenter_v2_finding_from_dict = GoogleCloudSecuritycenterV2Finding.from_dict(google_cloud_securitycenter_v2_finding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


