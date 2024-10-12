# MetricHeader

The headers for the metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_header_entries** | [**List[MetricHeaderEntry]**](MetricHeaderEntry.md) | Headers for the metrics in the response. | [optional] 
**pivot_headers** | [**List[PivotHeader]**](PivotHeader.md) | Headers for the pivots in the response. | [optional] 

## Example

```python
from openapi_client.models.metric_header import MetricHeader

# TODO update the JSON string below
json = "{}"
# create an instance of MetricHeader from a JSON string
metric_header_instance = MetricHeader.from_json(json)
# print the JSON string representation of the object
print(MetricHeader.to_json())

# convert the object into a dict
metric_header_dict = metric_header_instance.to_dict()
# create an instance of MetricHeader from a dict
metric_header_from_dict = MetricHeader.from_dict(metric_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


