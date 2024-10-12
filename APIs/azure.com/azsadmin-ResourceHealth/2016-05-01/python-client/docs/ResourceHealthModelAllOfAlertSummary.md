# ResourceHealthModelAllOfAlertSummary

Summary of the alerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**critical_alert_count** | **int** | The number of critical alerts for the service. | [optional] 
**warning_alert_count** | **int** | The number of warning alerts for the service. | [optional] 

## Example

```python
from openapi_client.models.resource_health_model_all_of_alert_summary import ResourceHealthModelAllOfAlertSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceHealthModelAllOfAlertSummary from a JSON string
resource_health_model_all_of_alert_summary_instance = ResourceHealthModelAllOfAlertSummary.from_json(json)
# print the JSON string representation of the object
print(ResourceHealthModelAllOfAlertSummary.to_json())

# convert the object into a dict
resource_health_model_all_of_alert_summary_dict = resource_health_model_all_of_alert_summary_instance.to_dict()
# create an instance of ResourceHealthModelAllOfAlertSummary from a dict
resource_health_model_all_of_alert_summary_from_dict = ResourceHealthModelAllOfAlertSummary.from_dict(resource_health_model_all_of_alert_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


