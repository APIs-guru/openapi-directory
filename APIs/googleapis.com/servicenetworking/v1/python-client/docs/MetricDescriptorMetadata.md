# MetricDescriptorMetadata

Additional annotations that can be used to guide the usage of a metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingest_delay** | **str** | The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. | [optional] 
**launch_stage** | **str** | Deprecated. Must use the MetricDescriptor.launch_stage instead. | [optional] 
**sample_period** | **str** | The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. | [optional] 

## Example

```python
from openapi_client.models.metric_descriptor_metadata import MetricDescriptorMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of MetricDescriptorMetadata from a JSON string
metric_descriptor_metadata_instance = MetricDescriptorMetadata.from_json(json)
# print the JSON string representation of the object
print(MetricDescriptorMetadata.to_json())

# convert the object into a dict
metric_descriptor_metadata_dict = metric_descriptor_metadata_instance.to_dict()
# create an instance of MetricDescriptorMetadata from a dict
metric_descriptor_metadata_from_dict = MetricDescriptorMetadata.from_dict(metric_descriptor_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


