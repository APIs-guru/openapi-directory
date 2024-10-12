# LogAnalyticsQueryPackQueryProperties

Properties that define an Log Analytics QueryPack-Query resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** | Object Id of user creating the query. | [optional] [readonly] 
**body** | **str** | Body of the query. | 
**categories** | **List[str]** | Categories associated with the query. | [optional] 
**description** | **str** | Description of the query. | [optional] 
**display_name** | **str** | Unique display name for your query within the Query Pack. | 
**labels** | **List[str]** | Labels associated with the query. | [optional] 
**linked_resource_id** | **str** | Resource id associated with the query. | [optional] 
**query_id** | **str** | The unique ID of your application. This field cannot be changed. | [optional] [readonly] 
**resource_types** | **List[str]** | Resource Types associated with the query. | [optional] 
**time_created** | **datetime** | Creation Date for the Log Analytics Query, in ISO 8601 format. | [optional] [readonly] 
**time_modified** | **datetime** | Last modified date of the Log Analytics Query, in ISO 8601 format. | [optional] [readonly] 

## Example

```python
from openapi_client.models.log_analytics_query_pack_query_properties import LogAnalyticsQueryPackQueryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LogAnalyticsQueryPackQueryProperties from a JSON string
log_analytics_query_pack_query_properties_instance = LogAnalyticsQueryPackQueryProperties.from_json(json)
# print the JSON string representation of the object
print(LogAnalyticsQueryPackQueryProperties.to_json())

# convert the object into a dict
log_analytics_query_pack_query_properties_dict = log_analytics_query_pack_query_properties_instance.to_dict()
# create an instance of LogAnalyticsQueryPackQueryProperties from a dict
log_analytics_query_pack_query_properties_from_dict = LogAnalyticsQueryPackQueryProperties.from_dict(log_analytics_query_pack_query_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


