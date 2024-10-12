# MetricMetadata

Explains a metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_name** | **str** | A metric name. Useable in [Metric](#Metric)&#39;s &#x60;name&#x60;. For example, &#x60;eventCount&#x60;. | [optional] 
**blocked_reasons** | **List[str]** | If reasons are specified, your access is blocked to this metric for this property. API requests from you to this property for this metric will succeed; however, the report will contain only zeros for this metric. API requests with metric filters on blocked metrics will fail. If reasons are empty, you have access to this metric. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388). | [optional] 
**category** | **str** | The display name of the category that this metrics belongs to. Similar dimensions and metrics are categorized together. | [optional] 
**custom_definition** | **bool** | True if the metric is a custom metric for this property. | [optional] 
**deprecated_api_names** | **List[str]** | Still usable but deprecated names for this metric. If populated, this metric is available by either &#x60;apiName&#x60; or one of &#x60;deprecatedApiNames&#x60; for a period of time. After the deprecation period, the metric will be available only by &#x60;apiName&#x60;. | [optional] 
**description** | **str** | Description of how this metric is used and calculated. | [optional] 
**expression** | **str** | The mathematical expression for this derived metric. Can be used in [Metric](#Metric)&#39;s &#x60;expression&#x60; field for equivalent reports. Most metrics are not expressions, and for non-expressions, this field is empty. | [optional] 
**type** | **str** | The type of this metric. | [optional] 
**ui_name** | **str** | This metric&#39;s name within the Google Analytics user interface. For example, &#x60;Event count&#x60;. | [optional] 

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


