# TableServicesListMetrics200Response

Pageable list of metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] [readonly] 
**value** | [**List[TableServicesListMetrics200ResponseValueInner]**](TableServicesListMetrics200ResponseValueInner.md) | List of metrics. | [optional] [readonly] 

## Example

```python
from openapi_client.models.table_services_list_metrics200_response import TableServicesListMetrics200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TableServicesListMetrics200Response from a JSON string
table_services_list_metrics200_response_instance = TableServicesListMetrics200Response.from_json(json)
# print the JSON string representation of the object
print(TableServicesListMetrics200Response.to_json())

# convert the object into a dict
table_services_list_metrics200_response_dict = table_services_list_metrics200_response_instance.to_dict()
# create an instance of TableServicesListMetrics200Response from a dict
table_services_list_metrics200_response_from_dict = TableServicesListMetrics200Response.from_dict(table_services_list_metrics200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


