# LogAnalyticsQueryPackQuerySearchProperties

Properties that define an Log Analytics QueryPack-Query search properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | **List[str]** | Categories associated with the query. | [optional] 
**labels** | **List[str]** | Labels associated with the query. | [optional] 
**resource_types** | **List[str]** | Resource Types associated with the query. | [optional] 

## Example

```python
from openapi_client.models.log_analytics_query_pack_query_search_properties import LogAnalyticsQueryPackQuerySearchProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LogAnalyticsQueryPackQuerySearchProperties from a JSON string
log_analytics_query_pack_query_search_properties_instance = LogAnalyticsQueryPackQuerySearchProperties.from_json(json)
# print the JSON string representation of the object
print(LogAnalyticsQueryPackQuerySearchProperties.to_json())

# convert the object into a dict
log_analytics_query_pack_query_search_properties_dict = log_analytics_query_pack_query_search_properties_instance.to_dict()
# create an instance of LogAnalyticsQueryPackQuerySearchProperties from a dict
log_analytics_query_pack_query_search_properties_from_dict = LogAnalyticsQueryPackQuerySearchProperties.from_dict(log_analytics_query_pack_query_search_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


