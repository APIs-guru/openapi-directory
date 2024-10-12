# ResourceMetricAvailability

Metrics availability and retention.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention** | **str** | Retention period for the current time grain. | [optional] [readonly] 
**time_grain** | **str** | Time grain . | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_metric_availability import ResourceMetricAvailability

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceMetricAvailability from a JSON string
resource_metric_availability_instance = ResourceMetricAvailability.from_json(json)
# print the JSON string representation of the object
print(ResourceMetricAvailability.to_json())

# convert the object into a dict
resource_metric_availability_dict = resource_metric_availability_instance.to_dict()
# create an instance of ResourceMetricAvailability from a dict
resource_metric_availability_from_dict = ResourceMetricAvailability.from_dict(resource_metric_availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


