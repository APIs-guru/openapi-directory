# SupportTicketDetailsProperties

Describes the properties of a support ticket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_details** | [**ContactProfile**](ContactProfile.md) |  | 
**created_date** | **datetime** | Time in UTC (ISO 8601 format) when support ticket was created. | [optional] [readonly] 
**description** | **str** | Detailed description of the question or issue. | 
**enrollment_id** | **str** | Enrollment ID associated with the support ticket. | [optional] [readonly] 
**modified_date** | **datetime** | Time in UTC (ISO 8601 format) when support ticket was last modified. | [optional] [readonly] 
**problem_classification_display_name** | **str** | Localized name of problem classification. | [optional] [readonly] 
**problem_classification_id** | **str** | Each Azure service has its own set of issue category called problem classification that corresponds to the type of problem you&#39;re experiencing. This parameter is the resource id of ProblemClassification resource. | 
**problem_start_time** | **datetime** | Time in UTC (ISO 8601 format) when the problem started. | [optional] 
**production_outage** | **bool** | Indicates if this issue is a production outage. | [optional] [readonly] 
**quota_ticket_details** | [**QuotaTicketDetails**](QuotaTicketDetails.md) |  | [optional] 
**require24_x7_response** | **bool** | Indicates if this requires a 24x7 response from Azure. | [optional] 
**service_display_name** | **str** | Localized name of Azure service. | [optional] [readonly] 
**service_id** | **str** | This is the resource id of the Azure service resource associated with the support ticket. | 
**service_level_agreement** | [**ServiceLevelAgreement**](ServiceLevelAgreement.md) |  | [optional] 
**severity** | **str** | A value that indicates the urgency of the case, which in turn determines the response time according to the service level agreement of the technical support plan you have with Azure. | 
**status** | **str** | Status of the support ticket. | [optional] [readonly] 
**support_engineer** | [**SupportEngineer**](SupportEngineer.md) |  | [optional] 
**support_plan_type** | **str** | Support plan type associated with the support ticket. | [optional] [readonly] 
**support_ticket_id** | **str** | System generated support ticket id that is unique. | [optional] 
**technical_ticket_details** | [**TechnicalTicketDetails**](TechnicalTicketDetails.md) |  | [optional] 
**title** | **str** | Title of the support ticket. | 

## Example

```python
from openapi_client.models.support_ticket_details_properties import SupportTicketDetailsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SupportTicketDetailsProperties from a JSON string
support_ticket_details_properties_instance = SupportTicketDetailsProperties.from_json(json)
# print the JSON string representation of the object
print(SupportTicketDetailsProperties.to_json())

# convert the object into a dict
support_ticket_details_properties_dict = support_ticket_details_properties_instance.to_dict()
# create an instance of SupportTicketDetailsProperties from a dict
support_ticket_details_properties_from_dict = SupportTicketDetailsProperties.from_dict(support_ticket_details_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


