# AlertsSummaryProperties

Summary of the alerts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to fetch the next set of results. | [optional] 
**smart_groups_count** | **int** | Total number of smart groups. | [optional] 
**summary_by_monitor_service** | [**AlertsSummaryByMonitorService**](AlertsSummaryByMonitorService.md) | Summary of alerts by severity | [optional] 
**summary_by_severity** | [**AlertsSummaryPropertiesSummaryBySeverity**](AlertsSummaryPropertiesSummaryBySeverity.md) |  | [optional] 
**summary_by_severity_and_monitor_condition** | [**AlertsSummaryBySeverityAndMonitorCondition**](AlertsSummaryBySeverityAndMonitorCondition.md) | Summary of alerts by severity and monitor condition | [optional] 
**summary_by_state** | [**AlertsSummaryByState**](AlertsSummaryByState.md) | Summary of alerts by state | [optional] 
**total** | **int** | Total number of alerts. | [optional] 

## Example

```python
from openapi_client.models.alerts_summary_properties import AlertsSummaryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AlertsSummaryProperties from a JSON string
alerts_summary_properties_instance = AlertsSummaryProperties.from_json(json)
# print the JSON string representation of the object
print(AlertsSummaryProperties.to_json())

# convert the object into a dict
alerts_summary_properties_dict = alerts_summary_properties_instance.to_dict()
# create an instance of AlertsSummaryProperties from a dict
alerts_summary_properties_from_dict = AlertsSummaryProperties.from_dict(alerts_summary_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


