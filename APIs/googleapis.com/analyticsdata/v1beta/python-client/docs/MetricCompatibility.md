# MetricCompatibility

The compatibility for a single metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatibility** | **str** | The compatibility of this metric. If the compatibility is COMPATIBLE, this metric can be successfully added to the report. | [optional] 
**metric_metadata** | [**MetricMetadata**](MetricMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.metric_compatibility import MetricCompatibility

# TODO update the JSON string below
json = "{}"
# create an instance of MetricCompatibility from a JSON string
metric_compatibility_instance = MetricCompatibility.from_json(json)
# print the JSON string representation of the object
print(MetricCompatibility.to_json())

# convert the object into a dict
metric_compatibility_dict = metric_compatibility_instance.to_dict()
# create an instance of MetricCompatibility from a dict
metric_compatibility_from_dict = MetricCompatibility.from_dict(metric_compatibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


