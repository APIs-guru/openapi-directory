# AudienceExport

An audience export is a list of users in an audience at the time of the list's creation. One audience may have multiple audience exports created for different days.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | **str** | Required. The audience resource name. This resource name identifies the audience being listed and is shared between the Analytics Data &amp; Admin APIs. Format: &#x60;properties/{property}/audiences/{audience}&#x60; | [optional] 
**audience_display_name** | **str** | Output only. The descriptive display name for this audience. For example, \&quot;Purchasers\&quot;. | [optional] [readonly] 
**begin_creating_time** | **str** | Output only. The time when CreateAudienceExport was called and the AudienceExport began the &#x60;CREATING&#x60; state. | [optional] [readonly] 
**creation_quota_tokens_charged** | **int** | Output only. The total quota tokens charged during creation of the AudienceExport. Because this token count is based on activity from the &#x60;CREATING&#x60; state, this tokens charged will be fixed once an AudienceExport enters the &#x60;ACTIVE&#x60; or &#x60;FAILED&#x60; states. | [optional] [readonly] 
**dimensions** | [**List[V1betaAudienceDimension]**](V1betaAudienceDimension.md) | Required. The dimensions requested and displayed in the query response. | [optional] 
**error_message** | **str** | Output only. Error message is populated when an audience export fails during creation. A common reason for such a failure is quota exhaustion. | [optional] [readonly] 
**name** | **str** | Output only. Identifier. The audience export resource name assigned during creation. This resource name identifies this &#x60;AudienceExport&#x60;. Format: &#x60;properties/{property}/audienceExports/{audience_export}&#x60; | [optional] [readonly] 
**percentage_completed** | **float** | Output only. The percentage completed for this audience export ranging between 0 to 100. | [optional] [readonly] 
**row_count** | **int** | Output only. The total number of rows in the AudienceExport result. | [optional] [readonly] 
**state** | **str** | Output only. The current state for this AudienceExport. | [optional] [readonly] 

## Example

```python
from openapi_client.models.audience_export import AudienceExport

# TODO update the JSON string below
json = "{}"
# create an instance of AudienceExport from a JSON string
audience_export_instance = AudienceExport.from_json(json)
# print the JSON string representation of the object
print(AudienceExport.to_json())

# convert the object into a dict
audience_export_dict = audience_export_instance.to_dict()
# create an instance of AudienceExport from a dict
audience_export_from_dict = AudienceExport.from_dict(audience_export_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


