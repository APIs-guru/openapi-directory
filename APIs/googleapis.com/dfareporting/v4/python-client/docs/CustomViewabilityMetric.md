# CustomViewabilityMetric

Custom Viewability Metric

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**CustomViewabilityMetricConfiguration**](CustomViewabilityMetricConfiguration.md) |  | [optional] 
**id** | **str** | ID of the custom viewability metric. | [optional] 
**name** | **str** | Name of the custom viewability metric. | [optional] 

## Example

```python
from openapi_client.models.custom_viewability_metric import CustomViewabilityMetric

# TODO update the JSON string below
json = "{}"
# create an instance of CustomViewabilityMetric from a JSON string
custom_viewability_metric_instance = CustomViewabilityMetric.from_json(json)
# print the JSON string representation of the object
print(CustomViewabilityMetric.to_json())

# convert the object into a dict
custom_viewability_metric_dict = custom_viewability_metric_instance.to_dict()
# create an instance of CustomViewabilityMetric from a dict
custom_viewability_metric_from_dict = CustomViewabilityMetric.from_dict(custom_viewability_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


