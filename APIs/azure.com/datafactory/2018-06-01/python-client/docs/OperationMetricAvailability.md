# OperationMetricAvailability

Defines how often data for a metric becomes available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_duration** | **str** | Blob created in the customer storage account, per hour. | [optional] 
**time_grain** | **str** | The granularity for the metric. | [optional] 

## Example

```python
from openapi_client.models.operation_metric_availability import OperationMetricAvailability

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetricAvailability from a JSON string
operation_metric_availability_instance = OperationMetricAvailability.from_json(json)
# print the JSON string representation of the object
print(OperationMetricAvailability.to_json())

# convert the object into a dict
operation_metric_availability_dict = operation_metric_availability_instance.to_dict()
# create an instance of OperationMetricAvailability from a dict
operation_metric_availability_from_dict = OperationMetricAvailability.from_dict(operation_metric_availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


