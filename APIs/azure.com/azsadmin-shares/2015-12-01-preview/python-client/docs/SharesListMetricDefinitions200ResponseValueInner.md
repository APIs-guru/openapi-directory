# SharesListMetricDefinitions200ResponseValueInner

Metric definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_availabilities** | [**List[SharesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner]**](SharesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.md) | Metric availabilities. | [optional] [readonly] 
**name** | [**SharesListMetricDefinitions200ResponseValueInnerName**](SharesListMetricDefinitions200ResponseValueInnerName.md) |  | [optional] 
**primary_aggregation_type** | **str** | Aggregate type. | [optional] [readonly] 
**unit** | **str** | Metric unit. | [optional] 

## Example

```python
from openapi_client.models.shares_list_metric_definitions200_response_value_inner import SharesListMetricDefinitions200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of SharesListMetricDefinitions200ResponseValueInner from a JSON string
shares_list_metric_definitions200_response_value_inner_instance = SharesListMetricDefinitions200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(SharesListMetricDefinitions200ResponseValueInner.to_json())

# convert the object into a dict
shares_list_metric_definitions200_response_value_inner_dict = shares_list_metric_definitions200_response_value_inner_instance.to_dict()
# create an instance of SharesListMetricDefinitions200ResponseValueInner from a dict
shares_list_metric_definitions200_response_value_inner_from_dict = SharesListMetricDefinitions200ResponseValueInner.from_dict(shares_list_metric_definitions200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


