# ReportFloodlightCriteriaReportProperties

The properties of the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_attributed_ip_conversions** | **bool** | Include conversions that have no cookie, but do have an exposure path. | [optional] 
**include_unattributed_cookie_conversions** | **bool** | Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window. | [optional] 
**include_unattributed_ip_conversions** | **bool** | Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion. | [optional] 

## Example

```python
from openapi_client.models.report_floodlight_criteria_report_properties import ReportFloodlightCriteriaReportProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReportFloodlightCriteriaReportProperties from a JSON string
report_floodlight_criteria_report_properties_instance = ReportFloodlightCriteriaReportProperties.from_json(json)
# print the JSON string representation of the object
print(ReportFloodlightCriteriaReportProperties.to_json())

# convert the object into a dict
report_floodlight_criteria_report_properties_dict = report_floodlight_criteria_report_properties_instance.to_dict()
# create an instance of ReportFloodlightCriteriaReportProperties from a dict
report_floodlight_criteria_report_properties_from_dict = ReportFloodlightCriteriaReportProperties.from_dict(report_floodlight_criteria_report_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


