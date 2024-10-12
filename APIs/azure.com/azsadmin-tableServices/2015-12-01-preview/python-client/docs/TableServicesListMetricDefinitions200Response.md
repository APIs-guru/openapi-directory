# TableServicesListMetricDefinitions200Response

Pageable list of metric definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] [readonly] 
**value** | [**List[TableServicesListMetricDefinitions200ResponseValueInner]**](TableServicesListMetricDefinitions200ResponseValueInner.md) | List of metric definitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.table_services_list_metric_definitions200_response import TableServicesListMetricDefinitions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TableServicesListMetricDefinitions200Response from a JSON string
table_services_list_metric_definitions200_response_instance = TableServicesListMetricDefinitions200Response.from_json(json)
# print the JSON string representation of the object
print(TableServicesListMetricDefinitions200Response.to_json())

# convert the object into a dict
table_services_list_metric_definitions200_response_dict = table_services_list_metric_definitions200_response_instance.to_dict()
# create an instance of TableServicesListMetricDefinitions200Response from a dict
table_services_list_metric_definitions200_response_from_dict = TableServicesListMetricDefinitions200Response.from_dict(table_services_list_metric_definitions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


