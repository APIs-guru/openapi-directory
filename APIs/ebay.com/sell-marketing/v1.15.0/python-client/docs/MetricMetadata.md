# MetricMetadata

This type defines the name and data type of a metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | The data type of the returned metric value. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**metric_key** | **str** | The name of the metric. | [optional] 

## Example

```python
from openapi_client.models.metric_metadata import MetricMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of MetricMetadata from a JSON string
metric_metadata_instance = MetricMetadata.from_json(json)
# print the JSON string representation of the object
print(MetricMetadata.to_json())

# convert the object into a dict
metric_metadata_dict = metric_metadata_instance.to_dict()
# create an instance of MetricMetadata from a dict
metric_metadata_from_dict = MetricMetadata.from_dict(metric_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


