# MetricAlertResourceCollection

Represents a collection of alert rule resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[MetricAlertResource]**](MetricAlertResource.md) | the values for the alert rule resources. | [optional] 

## Example

```python
from openapi_client.models.metric_alert_resource_collection import MetricAlertResourceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of MetricAlertResourceCollection from a JSON string
metric_alert_resource_collection_instance = MetricAlertResourceCollection.from_json(json)
# print the JSON string representation of the object
print(MetricAlertResourceCollection.to_json())

# convert the object into a dict
metric_alert_resource_collection_dict = metric_alert_resource_collection_instance.to_dict()
# create an instance of MetricAlertResourceCollection from a dict
metric_alert_resource_collection_from_dict = MetricAlertResourceCollection.from_dict(metric_alert_resource_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


