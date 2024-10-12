# Record

Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_period** | [**CollectionPeriod**](CollectionPeriod.md) |  | [optional] 
**key** | [**Key**](Key.md) |  | [optional] 
**metrics** | [**Dict[str, Metric]**](Metric.md) | Metrics is the map of user experience data available for the record defined in the key field. Metrics are keyed on the metric name. Allowed key values: [\&quot;first_contentful_paint\&quot;, \&quot;first_input_delay\&quot;, \&quot;largest_contentful_paint\&quot;, \&quot;cumulative_layout_shift\&quot;, \&quot;experimental_time_to_first_byte\&quot;, \&quot;experimental_interaction_to_next_paint\&quot;] | [optional] 

## Example

```python
from openapi_client.models.record import Record

# TODO update the JSON string below
json = "{}"
# create an instance of Record from a JSON string
record_instance = Record.from_json(json)
# print the JSON string representation of the object
print(Record.to_json())

# convert the object into a dict
record_dict = record_instance.to_dict()
# create an instance of Record from a dict
record_from_dict = Record.from_dict(record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


