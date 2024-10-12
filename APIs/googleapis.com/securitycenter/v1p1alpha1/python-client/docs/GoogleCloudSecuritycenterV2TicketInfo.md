# GoogleCloudSecuritycenterV2TicketInfo

Information about the ticket, if any, that is being used to track the resolution of the issue that is identified by this finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee** | **str** | The assignee of the ticket in the ticket system. | [optional] 
**description** | **str** | The description of the ticket in the ticket system. | [optional] 
**id** | **str** | The identifier of the ticket in the ticket system. | [optional] 
**status** | **str** | The latest status of the ticket, as reported by the ticket system. | [optional] 
**update_time** | **str** | The time when the ticket was last updated, as reported by the ticket system. | [optional] 
**uri** | **str** | The link to the ticket in the ticket system. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_ticket_info import GoogleCloudSecuritycenterV2TicketInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2TicketInfo from a JSON string
google_cloud_securitycenter_v2_ticket_info_instance = GoogleCloudSecuritycenterV2TicketInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2TicketInfo.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_ticket_info_dict = google_cloud_securitycenter_v2_ticket_info_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2TicketInfo from a dict
google_cloud_securitycenter_v2_ticket_info_from_dict = GoogleCloudSecuritycenterV2TicketInfo.from_dict(google_cloud_securitycenter_v2_ticket_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


