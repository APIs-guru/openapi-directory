# ServiceHealthModelAllOfAlertSummary

Summary of the alerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**critical_alert_count** | **int** | The number of critical alerts for the service. | [optional] 
**warning_alert_count** | **int** | The number of warning alerts for the service. | [optional] 

## Example

```python
from openapi_client.models.service_health_model_all_of_alert_summary import ServiceHealthModelAllOfAlertSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceHealthModelAllOfAlertSummary from a JSON string
service_health_model_all_of_alert_summary_instance = ServiceHealthModelAllOfAlertSummary.from_json(json)
# print the JSON string representation of the object
print(ServiceHealthModelAllOfAlertSummary.to_json())

# convert the object into a dict
service_health_model_all_of_alert_summary_dict = service_health_model_all_of_alert_summary_instance.to_dict()
# create an instance of ServiceHealthModelAllOfAlertSummary from a dict
service_health_model_all_of_alert_summary_from_dict = ServiceHealthModelAllOfAlertSummary.from_dict(service_health_model_all_of_alert_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


