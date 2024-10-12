# MetricAvailablity

The metric availability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention** | **str** | The retention period for the metric at the specified timegrain. | [optional] 
**time_grain** | **str** | The aggregation interval for the metric. | [optional] 

## Example

```python
from openapi_client.models.metric_availablity import MetricAvailablity

# TODO update the JSON string below
json = "{}"
# create an instance of MetricAvailablity from a JSON string
metric_availablity_instance = MetricAvailablity.from_json(json)
# print the JSON string representation of the object
print(MetricAvailablity.to_json())

# convert the object into a dict
metric_availablity_dict = metric_availablity_instance.to_dict()
# create an instance of MetricAvailablity from a dict
metric_availablity_from_dict = MetricAvailablity.from_dict(metric_availablity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


