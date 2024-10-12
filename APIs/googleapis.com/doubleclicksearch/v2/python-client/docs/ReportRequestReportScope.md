# ReportRequestReportScope

The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_id** | **str** | DS ad group ID. | [optional] 
**ad_id** | **str** | DS ad ID. | [optional] 
**advertiser_id** | **str** | DS advertiser ID. | [optional] 
**agency_id** | **str** | DS agency ID. | [optional] 
**campaign_id** | **str** | DS campaign ID. | [optional] 
**engine_account_id** | **str** | DS engine account ID. | [optional] 
**keyword_id** | **str** | DS keyword ID. | [optional] 

## Example

```python
from openapi_client.models.report_request_report_scope import ReportRequestReportScope

# TODO update the JSON string below
json = "{}"
# create an instance of ReportRequestReportScope from a JSON string
report_request_report_scope_instance = ReportRequestReportScope.from_json(json)
# print the JSON string representation of the object
print(ReportRequestReportScope.to_json())

# convert the object into a dict
report_request_report_scope_dict = report_request_report_scope_instance.to_dict()
# create an instance of ReportRequestReportScope from a dict
report_request_report_scope_from_dict = ReportRequestReportScope.from_dict(report_request_report_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


