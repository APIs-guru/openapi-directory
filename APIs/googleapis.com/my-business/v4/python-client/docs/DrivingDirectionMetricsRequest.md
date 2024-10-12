# DrivingDirectionMetricsRequest

A request for driving direction insights.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | The BCP 47 code for the language. If a language code is not provided, it defaults to English. | [optional] 
**num_days** | **str** | The number of days to aggregate data for. Results returned will be available data over the last number of requested days. Valid values are 7, 30, and 90. | [optional] 

## Example

```python
from openapi_client.models.driving_direction_metrics_request import DrivingDirectionMetricsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DrivingDirectionMetricsRequest from a JSON string
driving_direction_metrics_request_instance = DrivingDirectionMetricsRequest.from_json(json)
# print the JSON string representation of the object
print(DrivingDirectionMetricsRequest.to_json())

# convert the object into a dict
driving_direction_metrics_request_dict = driving_direction_metrics_request_instance.to_dict()
# create an instance of DrivingDirectionMetricsRequest from a dict
driving_direction_metrics_request_from_dict = DrivingDirectionMetricsRequest.from_dict(driving_direction_metrics_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


