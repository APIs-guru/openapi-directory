# AlertSummary

Summary of the alerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**critical_alert_count** | **int** | The number of critical alerts for the service. | [optional] 
**warning_alert_count** | **int** | The number of warning alerts for the service. | [optional] 

## Example

```python
from openapi_client.models.alert_summary import AlertSummary

# TODO update the JSON string below
json = "{}"
# create an instance of AlertSummary from a JSON string
alert_summary_instance = AlertSummary.from_json(json)
# print the JSON string representation of the object
print(AlertSummary.to_json())

# convert the object into a dict
alert_summary_dict = alert_summary_instance.to_dict()
# create an instance of AlertSummary from a dict
alert_summary_from_dict = AlertSummary.from_dict(alert_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


