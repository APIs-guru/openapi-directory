# AlertsSummaryPropertiesSummaryBySeverity

Summary of alerts by severity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sev0** | [**AlertsSummaryByState**](AlertsSummaryByState.md) | Summary of alerts by severity &#39;Sev0&#39; | [optional] 
**sev1** | [**AlertsSummaryByState**](AlertsSummaryByState.md) | Summary of alerts by severity &#39;Sev1&#39; | [optional] 
**sev2** | [**AlertsSummaryByState**](AlertsSummaryByState.md) | Summary of alerts by severity &#39;Sev2&#39; | [optional] 
**sev3** | [**AlertsSummaryByState**](AlertsSummaryByState.md) | Summary of alerts by severity &#39;Sev3&#39; | [optional] 
**sev4** | [**AlertsSummaryByState**](AlertsSummaryByState.md) | Summary of alerts by severity &#39;Sev4&#39; | [optional] 

## Example

```python
from openapi_client.models.alerts_summary_properties_summary_by_severity import AlertsSummaryPropertiesSummaryBySeverity

# TODO update the JSON string below
json = "{}"
# create an instance of AlertsSummaryPropertiesSummaryBySeverity from a JSON string
alerts_summary_properties_summary_by_severity_instance = AlertsSummaryPropertiesSummaryBySeverity.from_json(json)
# print the JSON string representation of the object
print(AlertsSummaryPropertiesSummaryBySeverity.to_json())

# convert the object into a dict
alerts_summary_properties_summary_by_severity_dict = alerts_summary_properties_summary_by_severity_instance.to_dict()
# create an instance of AlertsSummaryPropertiesSummaryBySeverity from a dict
alerts_summary_properties_summary_by_severity_from_dict = AlertsSummaryPropertiesSummaryBySeverity.from_dict(alerts_summary_properties_summary_by_severity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


