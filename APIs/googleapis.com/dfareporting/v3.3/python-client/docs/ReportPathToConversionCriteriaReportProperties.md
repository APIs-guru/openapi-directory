# ReportPathToConversionCriteriaReportProperties

The properties of the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clicks_lookback_window** | **int** | CM360 checks to see if a click interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90. | [optional] 
**impressions_lookback_window** | **int** | CM360 checks to see if an impression interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90. | [optional] 
**include_attributed_ip_conversions** | **bool** | Deprecated: has no effect. | [optional] 
**include_unattributed_cookie_conversions** | **bool** | Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window. | [optional] 
**include_unattributed_ip_conversions** | **bool** | Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion. | [optional] 
**maximum_click_interactions** | **int** | The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report. | [optional] 
**maximum_impression_interactions** | **int** | The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report. | [optional] 
**maximum_interaction_gap** | **int** | The maximum amount of time that can take place between interactions (clicks or impressions) by the same user. Valid values: 1-90. | [optional] 
**pivot_on_interaction_path** | **bool** | Enable pivoting on interaction path. | [optional] 

## Example

```python
from openapi_client.models.report_path_to_conversion_criteria_report_properties import ReportPathToConversionCriteriaReportProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReportPathToConversionCriteriaReportProperties from a JSON string
report_path_to_conversion_criteria_report_properties_instance = ReportPathToConversionCriteriaReportProperties.from_json(json)
# print the JSON string representation of the object
print(ReportPathToConversionCriteriaReportProperties.to_json())

# convert the object into a dict
report_path_to_conversion_criteria_report_properties_dict = report_path_to_conversion_criteria_report_properties_instance.to_dict()
# create an instance of ReportPathToConversionCriteriaReportProperties from a dict
report_path_to_conversion_criteria_report_properties_from_dict = ReportPathToConversionCriteriaReportProperties.from_dict(report_path_to_conversion_criteria_report_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


