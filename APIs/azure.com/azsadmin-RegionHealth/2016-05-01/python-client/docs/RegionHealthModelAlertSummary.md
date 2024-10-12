# RegionHealthModelAlertSummary

Summary of the alerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**critical_alert_count** | **int** | The number of critical alerts for the service. | [optional] 
**warning_alert_count** | **int** | The number of warning alerts for the service. | [optional] 

## Example

```python
from openapi_client.models.region_health_model_alert_summary import RegionHealthModelAlertSummary

# TODO update the JSON string below
json = "{}"
# create an instance of RegionHealthModelAlertSummary from a JSON string
region_health_model_alert_summary_instance = RegionHealthModelAlertSummary.from_json(json)
# print the JSON string representation of the object
print(RegionHealthModelAlertSummary.to_json())

# convert the object into a dict
region_health_model_alert_summary_dict = region_health_model_alert_summary_instance.to_dict()
# create an instance of RegionHealthModelAlertSummary from a dict
region_health_model_alert_summary_from_dict = RegionHealthModelAlertSummary.from_dict(region_health_model_alert_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


