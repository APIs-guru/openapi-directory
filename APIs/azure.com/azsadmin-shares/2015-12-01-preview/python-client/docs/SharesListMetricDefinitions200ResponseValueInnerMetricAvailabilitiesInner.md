# SharesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner

Metric availability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention** | **str** | Retention of metric. | [optional] 
**time_grain** | **str** | Time grain. | [optional] 

## Example

```python
from openapi_client.models.shares_list_metric_definitions200_response_value_inner_metric_availabilities_inner import SharesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner

# TODO update the JSON string below
json = "{}"
# create an instance of SharesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner from a JSON string
shares_list_metric_definitions200_response_value_inner_metric_availabilities_inner_instance = SharesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.from_json(json)
# print the JSON string representation of the object
print(SharesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.to_json())

# convert the object into a dict
shares_list_metric_definitions200_response_value_inner_metric_availabilities_inner_dict = shares_list_metric_definitions200_response_value_inner_metric_availabilities_inner_instance.to_dict()
# create an instance of SharesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner from a dict
shares_list_metric_definitions200_response_value_inner_metric_availabilities_inner_from_dict = SharesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.from_dict(shares_list_metric_definitions200_response_value_inner_metric_availabilities_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


