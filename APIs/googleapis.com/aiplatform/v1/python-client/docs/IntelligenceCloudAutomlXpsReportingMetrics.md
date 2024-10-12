# IntelligenceCloudAutomlXpsReportingMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_training_duration** | **str** | The effective time training used. If set, this is used for quota management and billing. Deprecated. AutoML BE doesn&#39;t use this. Don&#39;t set. | [optional] 
**metric_entries** | [**List[IntelligenceCloudAutomlXpsMetricEntry]**](IntelligenceCloudAutomlXpsMetricEntry.md) | One entry per metric name. The values must be aggregated per metric name. | [optional] 

## Example

```python
from openapi_client.models.intelligence_cloud_automl_xps_reporting_metrics import IntelligenceCloudAutomlXpsReportingMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of IntelligenceCloudAutomlXpsReportingMetrics from a JSON string
intelligence_cloud_automl_xps_reporting_metrics_instance = IntelligenceCloudAutomlXpsReportingMetrics.from_json(json)
# print the JSON string representation of the object
print(IntelligenceCloudAutomlXpsReportingMetrics.to_json())

# convert the object into a dict
intelligence_cloud_automl_xps_reporting_metrics_dict = intelligence_cloud_automl_xps_reporting_metrics_instance.to_dict()
# create an instance of IntelligenceCloudAutomlXpsReportingMetrics from a dict
intelligence_cloud_automl_xps_reporting_metrics_from_dict = IntelligenceCloudAutomlXpsReportingMetrics.from_dict(intelligence_cloud_automl_xps_reporting_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


