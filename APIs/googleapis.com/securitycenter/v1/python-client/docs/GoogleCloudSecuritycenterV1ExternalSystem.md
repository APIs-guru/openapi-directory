# GoogleCloudSecuritycenterV1ExternalSystem

Representation of third party SIEM/SOAR fields within SCC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignees** | **List[str]** | References primary/secondary etc assignees in the external system. | [optional] 
**case_close_time** | **str** | The time when the case was closed, as reported by the external system. | [optional] 
**case_create_time** | **str** | The time when the case was created, as reported by the external system. | [optional] 
**case_priority** | **str** | The priority of the finding&#39;s corresponding case in the external system. | [optional] 
**case_sla** | **str** | The SLA of the finding&#39;s corresponding case in the external system. | [optional] 
**case_uri** | **str** | The link to the finding&#39;s corresponding case in the external system. | [optional] 
**external_system_update_time** | **str** | The time when the case was last updated, as reported by the external system. | [optional] 
**external_uid** | **str** | The identifier that&#39;s used to track the finding&#39;s corresponding case in the external system. | [optional] 
**name** | **str** | Full resource name of the external system, for example: \&quot;organizations/1234/sources/5678/findings/123456/externalSystems/jira\&quot;, \&quot;folders/1234/sources/5678/findings/123456/externalSystems/jira\&quot;, \&quot;projects/1234/sources/5678/findings/123456/externalSystems/jira\&quot; | [optional] 
**status** | **str** | The most recent status of the finding&#39;s corresponding case, as reported by the external system. | [optional] 
**ticket_info** | [**TicketInfo**](TicketInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v1_external_system import GoogleCloudSecuritycenterV1ExternalSystem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV1ExternalSystem from a JSON string
google_cloud_securitycenter_v1_external_system_instance = GoogleCloudSecuritycenterV1ExternalSystem.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV1ExternalSystem.to_json())

# convert the object into a dict
google_cloud_securitycenter_v1_external_system_dict = google_cloud_securitycenter_v1_external_system_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV1ExternalSystem from a dict
google_cloud_securitycenter_v1_external_system_from_dict = GoogleCloudSecuritycenterV1ExternalSystem.from_dict(google_cloud_securitycenter_v1_external_system_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


