# MetricHeaderEntry

Header for the metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the header. | [optional] 
**type** | **str** | The type of the metric, for example &#x60;INTEGER&#x60;. | [optional] 

## Example

```python
from openapi_client.models.metric_header_entry import MetricHeaderEntry

# TODO update the JSON string below
json = "{}"
# create an instance of MetricHeaderEntry from a JSON string
metric_header_entry_instance = MetricHeaderEntry.from_json(json)
# print the JSON string representation of the object
print(MetricHeaderEntry.to_json())

# convert the object into a dict
metric_header_entry_dict = metric_header_entry_instance.to_dict()
# create an instance of MetricHeaderEntry from a dict
metric_header_entry_from_dict = MetricHeaderEntry.from_dict(metric_header_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


