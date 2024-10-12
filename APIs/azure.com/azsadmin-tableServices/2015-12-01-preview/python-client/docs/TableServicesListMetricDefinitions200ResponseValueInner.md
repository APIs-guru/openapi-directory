# TableServicesListMetricDefinitions200ResponseValueInner

Metric definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_availabilities** | [**List[TableServicesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner]**](TableServicesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.md) | Metric availabilities. | [optional] [readonly] 
**name** | [**TableServicesListMetricDefinitions200ResponseValueInnerName**](TableServicesListMetricDefinitions200ResponseValueInnerName.md) |  | [optional] 
**primary_aggregation_type** | **str** | Aggregate type. | [optional] [readonly] 
**unit** | **str** | Metric unit. | [optional] 

## Example

```python
from openapi_client.models.table_services_list_metric_definitions200_response_value_inner import TableServicesListMetricDefinitions200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of TableServicesListMetricDefinitions200ResponseValueInner from a JSON string
table_services_list_metric_definitions200_response_value_inner_instance = TableServicesListMetricDefinitions200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(TableServicesListMetricDefinitions200ResponseValueInner.to_json())

# convert the object into a dict
table_services_list_metric_definitions200_response_value_inner_dict = table_services_list_metric_definitions200_response_value_inner_instance.to_dict()
# create an instance of TableServicesListMetricDefinitions200ResponseValueInner from a dict
table_services_list_metric_definitions200_response_value_inner_from_dict = TableServicesListMetricDefinitions200ResponseValueInner.from_dict(table_services_list_metric_definitions200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


