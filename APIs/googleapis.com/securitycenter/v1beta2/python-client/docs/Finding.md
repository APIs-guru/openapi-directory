# Finding

Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | [**Access**](Access.md) |  | [optional] 
**application** | [**Application**](Application.md) |  | [optional] 
**attack_exposure** | [**AttackExposure**](AttackExposure.md) |  | [optional] 
**backup_disaster_recovery** | [**BackupDisasterRecovery**](BackupDisasterRecovery.md) |  | [optional] 
**canonical_name** | **str** | The canonical name of the finding. It&#39;s either \&quot;organizations/{organization_id}/sources/{source_id}/findings/{finding_id}\&quot;, \&quot;folders/{folder_id}/sources/{source_id}/findings/{finding_id}\&quot; or \&quot;projects/{project_number}/sources/{source_id}/findings/{finding_id}\&quot;, depending on the closest CRM ancestor of the resource associated with the finding. | [optional] 
**category** | **str** | The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: \&quot;XSS_FLASH_INJECTION\&quot; | [optional] 
**cloud_dlp_data_profile** | [**CloudDlpDataProfile**](CloudDlpDataProfile.md) |  | [optional] 
**cloud_dlp_inspection** | [**CloudDlpInspection**](CloudDlpInspection.md) |  | [optional] 
**compliances** | [**List[Compliance]**](Compliance.md) | Contains compliance information for security standards associated to the finding. | [optional] 
**connections** | [**List[Connection]**](Connection.md) | Contains information about the IP connection associated with the finding. | [optional] 
**contacts** | [**Dict[str, ContactDetails]**](ContactDetails.md) | Output only. Map containing the points of contact for the given finding. The key represents the type of contact, while the value contains a list of all the contacts that pertain. Please refer to: https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories { \&quot;security\&quot;: { \&quot;contacts\&quot;: [ { \&quot;email\&quot;: \&quot;person1@company.com\&quot; }, { \&quot;email\&quot;: \&quot;person2@company.com\&quot; } ] } } | [optional] [readonly] 
**containers** | [**List[Container]**](Container.md) | Containers associated with the finding. This field provides information for both Kubernetes and non-Kubernetes containers. | [optional] 
**create_time** | **str** | The time at which the finding was created in Security Command Center. | [optional] 
**database** | [**Database**](Database.md) |  | [optional] 
**description** | **str** | Contains more details about the finding. | [optional] 
**event_time** | **str** | The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp. | [optional] 
**exfiltration** | [**Exfiltration**](Exfiltration.md) |  | [optional] 
**external_systems** | [**Dict[str, GoogleCloudSecuritycenterV1ExternalSystem]**](GoogleCloudSecuritycenterV1ExternalSystem.md) | Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields. | [optional] [readonly] 
**external_uri** | **str** | The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. | [optional] 
**files** | [**List[File]**](File.md) | File associated with the finding. | [optional] 
**finding_class** | **str** | The class of the finding. | [optional] 
**iam_bindings** | [**List[IamBinding]**](IamBinding.md) | Represents IAM bindings associated with the finding. | [optional] 
**indicator** | [**Indicator**](Indicator.md) |  | [optional] 
**kernel_rootkit** | [**KernelRootkit**](KernelRootkit.md) |  | [optional] 
**kubernetes** | [**Kubernetes**](Kubernetes.md) |  | [optional] 
**load_balancers** | [**List[LoadBalancer]**](LoadBalancer.md) | The load balancers associated with the finding. | [optional] 
**log_entries** | [**List[LogEntry]**](LogEntry.md) | Log entries that are relevant to the finding. | [optional] 
**mitre_attack** | [**MitreAttack**](MitreAttack.md) |  | [optional] 
**module_name** | **str** | Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885 | [optional] 
**mute** | **str** | Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn&#39;t set the value of mute. | [optional] 
**mute_initiator** | **str** | Records additional information about the mute operation, for example, the [mute configuration](/security-command-center/docs/how-to-mute-findings) that muted the finding and the user who muted the finding. | [optional] 
**mute_update_time** | **str** | Output only. The most recent time this finding was muted or unmuted. | [optional] [readonly] 
**name** | **str** | The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: \&quot;organizations/{organization_id}/sources/{source_id}/findings/{finding_id}\&quot;, \&quot;folders/{folder_id}/sources/{source_id}/findings/{finding_id}\&quot;, \&quot;projects/{project_id}/sources/{source_id}/findings/{finding_id}\&quot;. | [optional] 
**next_steps** | **str** | Steps to address the finding. | [optional] 
**org_policies** | [**List[OrgPolicy]**](OrgPolicy.md) | Contains information about the org policies associated with the finding. | [optional] 
**parent** | **str** | The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: \&quot;organizations/{organization_id}/sources/{source_id}\&quot; | [optional] 
**parent_display_name** | **str** | Output only. The human readable display name of the finding source such as \&quot;Event Threat Detection\&quot; or \&quot;Security Health Analytics\&quot;. | [optional] [readonly] 
**processes** | [**List[Process]**](Process.md) | Represents operating system processes associated with the Finding. | [optional] 
**resource_name** | **str** | For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time. | [optional] 
**security_marks** | [**SecurityMarks**](SecurityMarks.md) |  | [optional] 
**security_posture** | [**SecurityPosture**](SecurityPosture.md) |  | [optional] 
**severity** | **str** | The severity of the finding. This field is managed by the source that writes the finding. | [optional] 
**source_properties** | **Dict[str, object]** | Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. | [optional] 
**state** | **str** | The state of the finding. | [optional] 
**vulnerability** | [**Vulnerability**](Vulnerability.md) |  | [optional] 

## Example

```python
from openapi_client.models.finding import Finding

# TODO update the JSON string below
json = "{}"
# create an instance of Finding from a JSON string
finding_instance = Finding.from_json(json)
# print the JSON string representation of the object
print(Finding.to_json())

# convert the object into a dict
finding_dict = finding_instance.to_dict()
# create an instance of Finding from a dict
finding_from_dict = Finding.from_dict(finding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


