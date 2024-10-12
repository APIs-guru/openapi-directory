# LocalPostMetrics

All the metrics requested for a Local Post.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_post_name** | **str** |  | [optional] 
**metric_values** | [**List[MetricValue]**](MetricValue.md) | A list of values for the requested metrics. | [optional] 

## Example

```python
from openapi_client.models.local_post_metrics import LocalPostMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of LocalPostMetrics from a JSON string
local_post_metrics_instance = LocalPostMetrics.from_json(json)
# print the JSON string representation of the object
print(LocalPostMetrics.to_json())

# convert the object into a dict
local_post_metrics_dict = local_post_metrics_instance.to_dict()
# create an instance of LocalPostMetrics from a dict
local_post_metrics_from_dict = LocalPostMetrics.from_dict(local_post_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


