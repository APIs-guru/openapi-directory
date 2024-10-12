# DataprocMetricConfig

Dataproc metric config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metrics** | [**List[Metric]**](Metric.md) | Required. Metrics sources to enable. | [optional] 

## Example

```python
from openapi_client.models.dataproc_metric_config import DataprocMetricConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DataprocMetricConfig from a JSON string
dataproc_metric_config_instance = DataprocMetricConfig.from_json(json)
# print the JSON string representation of the object
print(DataprocMetricConfig.to_json())

# convert the object into a dict
dataproc_metric_config_dict = dataproc_metric_config_instance.to_dict()
# create an instance of DataprocMetricConfig from a dict
dataproc_metric_config_from_dict = DataprocMetricConfig.from_dict(dataproc_metric_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


