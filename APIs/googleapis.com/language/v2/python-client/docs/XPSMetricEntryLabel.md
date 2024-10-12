# XPSMetricEntryLabel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_name** | **str** | The name of the label. | [optional] 
**label_value** | **str** | The value of the label. | [optional] 

## Example

```python
from openapi_client.models.xps_metric_entry_label import XPSMetricEntryLabel

# TODO update the JSON string below
json = "{}"
# create an instance of XPSMetricEntryLabel from a JSON string
xps_metric_entry_label_instance = XPSMetricEntryLabel.from_json(json)
# print the JSON string representation of the object
print(XPSMetricEntryLabel.to_json())

# convert the object into a dict
xps_metric_entry_label_dict = xps_metric_entry_label_instance.to_dict()
# create an instance of XPSMetricEntryLabel from a dict
xps_metric_entry_label_from_dict = XPSMetricEntryLabel.from_dict(xps_metric_entry_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


