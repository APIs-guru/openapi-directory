# MetricAlertStatusCollection

Represents a collection of alert rule resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[MetricAlertStatus]**](MetricAlertStatus.md) | the values for the alert rule resources. | [optional] 

## Example

```python
from openapi_client.models.metric_alert_status_collection import MetricAlertStatusCollection

# TODO update the JSON string below
json = "{}"
# create an instance of MetricAlertStatusCollection from a JSON string
metric_alert_status_collection_instance = MetricAlertStatusCollection.from_json(json)
# print the JSON string representation of the object
print(MetricAlertStatusCollection.to_json())

# convert the object into a dict
metric_alert_status_collection_dict = metric_alert_status_collection_instance.to_dict()
# create an instance of MetricAlertStatusCollection from a dict
metric_alert_status_collection_from_dict = MetricAlertStatusCollection.from_dict(metric_alert_status_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


