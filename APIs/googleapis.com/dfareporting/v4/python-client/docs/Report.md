# Report

Represents a Report resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID to which this report belongs. | [optional] 
**criteria** | [**ReportCriteria**](ReportCriteria.md) |  | [optional] 
**cross_dimension_reach_criteria** | [**ReportCrossDimensionReachCriteria**](ReportCrossDimensionReachCriteria.md) |  | [optional] 
**delivery** | [**ReportDelivery**](ReportDelivery.md) |  | [optional] 
**etag** | **str** | The eTag of this response for caching purposes. | [optional] 
**file_name** | **str** | The filename used when generating report files for this report. | [optional] 
**floodlight_criteria** | [**ReportFloodlightCriteria**](ReportFloodlightCriteria.md) |  | [optional] 
**format** | **str** | The output format of the report. If not specified, default format is \&quot;CSV\&quot;. Note that the actual format in the completed report file might differ if for instance the report&#39;s size exceeds the format&#39;s capabilities. \&quot;CSV\&quot; will then be the fallback format. | [optional] 
**id** | **str** | The unique ID identifying this report resource. | [optional] 
**kind** | **str** | The kind of resource this is, in this case dfareporting#report. | [optional] 
**last_modified_time** | **str** | The timestamp (in milliseconds since epoch) of when this report was last modified. | [optional] 
**name** | **str** | The name of the report. | [optional] 
**owner_profile_id** | **str** | The user profile id of the owner of this report. | [optional] 
**path_attribution_criteria** | [**ReportPathAttributionCriteria**](ReportPathAttributionCriteria.md) |  | [optional] 
**path_criteria** | [**ReportPathCriteria**](ReportPathCriteria.md) |  | [optional] 
**path_to_conversion_criteria** | [**ReportPathToConversionCriteria**](ReportPathToConversionCriteria.md) |  | [optional] 
**reach_criteria** | [**ReportReachCriteria**](ReportReachCriteria.md) |  | [optional] 
**schedule** | [**ReportSchedule**](ReportSchedule.md) |  | [optional] 
**sub_account_id** | **str** | The subaccount ID to which this report belongs if applicable. | [optional] 
**type** | **str** | The type of the report. | [optional] 

## Example

```python
from openapi_client.models.report import Report

# TODO update the JSON string below
json = "{}"
# create an instance of Report from a JSON string
report_instance = Report.from_json(json)
# print the JSON string representation of the object
print(Report.to_json())

# convert the object into a dict
report_dict = report_instance.to_dict()
# create an instance of Report from a dict
report_from_dict = Report.from_dict(report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


