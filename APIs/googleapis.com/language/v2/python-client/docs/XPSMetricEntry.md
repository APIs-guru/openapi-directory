# XPSMetricEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**argentum_metric_id** | **str** | For billing metrics that are using legacy sku&#39;s, set the legacy billing metric id here. This will be sent to Chemist as the \&quot;cloudbilling.googleapis.com/argentum_metric_id\&quot; label. Otherwise leave empty. | [optional] 
**double_value** | **float** | A double value. | [optional] 
**int64_value** | **str** | A signed 64-bit integer value. | [optional] 
**metric_name** | **str** | The metric name defined in the service configuration. | [optional] 
**system_labels** | [**List[XPSMetricEntryLabel]**](XPSMetricEntryLabel.md) | Billing system labels for this (metric, value) pair. | [optional] 

## Example

```python
from openapi_client.models.xps_metric_entry import XPSMetricEntry

# TODO update the JSON string below
json = "{}"
# create an instance of XPSMetricEntry from a JSON string
xps_metric_entry_instance = XPSMetricEntry.from_json(json)
# print the JSON string representation of the object
print(XPSMetricEntry.to_json())

# convert the object into a dict
xps_metric_entry_dict = xps_metric_entry_instance.to_dict()
# create an instance of XPSMetricEntry from a dict
xps_metric_entry_from_dict = XPSMetricEntry.from_dict(xps_metric_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


