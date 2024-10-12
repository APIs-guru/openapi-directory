# UsageMetrics

Metrics of resource usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metrics_value** | [**List[Metrics]**](Metrics.md) | List of usage metrics. | [optional] 
**name** | **str** | Name of the usage metric. | [optional] 

## Example

```python
from openapi_client.models.usage_metrics import UsageMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of UsageMetrics from a JSON string
usage_metrics_instance = UsageMetrics.from_json(json)
# print the JSON string representation of the object
print(UsageMetrics.to_json())

# convert the object into a dict
usage_metrics_dict = usage_metrics_instance.to_dict()
# create an instance of UsageMetrics from a dict
usage_metrics_from_dict = UsageMetrics.from_dict(usage_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


