# LogAnalyticsQueryPack

An Log Analytics QueryPack definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LogAnalyticsQueryPackProperties**](LogAnalyticsQueryPackProperties.md) |  | 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.log_analytics_query_pack import LogAnalyticsQueryPack

# TODO update the JSON string below
json = "{}"
# create an instance of LogAnalyticsQueryPack from a JSON string
log_analytics_query_pack_instance = LogAnalyticsQueryPack.from_json(json)
# print the JSON string representation of the object
print(LogAnalyticsQueryPack.to_json())

# convert the object into a dict
log_analytics_query_pack_dict = log_analytics_query_pack_instance.to_dict()
# create an instance of LogAnalyticsQueryPack from a dict
log_analytics_query_pack_from_dict = LogAnalyticsQueryPack.from_dict(log_analytics_query_pack_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


