# HistoryRecord

HistoryRecord is a timeseries of Chrome UX Report data. It contains user experience statistics for a single url pattern and a set of dimensions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_periods** | [**List[CollectionPeriod]**](CollectionPeriod.md) | The collection periods indicate when each of the data points reflected in the time series data in metrics was collected. Note that all the time series share the same collection periods, and it is enforced in the CrUX pipeline that every time series has the same number of data points. | [optional] 
**key** | [**HistoryKey**](HistoryKey.md) |  | [optional] 
**metrics** | [**Dict[str, MetricTimeseries]**](MetricTimeseries.md) | Metrics is the map of user experience time series data available for the record defined in the key field. Metrics are keyed on the metric name. Allowed key values: [\&quot;first_contentful_paint\&quot;, \&quot;first_input_delay\&quot;, \&quot;largest_contentful_paint\&quot;, \&quot;cumulative_layout_shift\&quot;, \&quot;experimental_time_to_first_byte\&quot;, \&quot;experimental_interaction_to_next_paint\&quot;] | [optional] 

## Example

```python
from openapi_client.models.history_record import HistoryRecord

# TODO update the JSON string below
json = "{}"
# create an instance of HistoryRecord from a JSON string
history_record_instance = HistoryRecord.from_json(json)
# print the JSON string representation of the object
print(HistoryRecord.to_json())

# convert the object into a dict
history_record_dict = history_record_instance.to_dict()
# create an instance of HistoryRecord from a dict
history_record_from_dict = HistoryRecord.from_dict(history_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


