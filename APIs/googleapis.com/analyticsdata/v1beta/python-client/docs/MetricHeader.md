# MetricHeader

Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The metric&#39;s name. | [optional] 
**type** | **str** | The metric&#39;s data type. | [optional] 

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


