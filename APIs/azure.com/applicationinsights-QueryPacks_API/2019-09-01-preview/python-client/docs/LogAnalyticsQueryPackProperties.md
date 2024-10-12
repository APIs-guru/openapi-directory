# LogAnalyticsQueryPackProperties

Properties that define a Log Analytics QueryPack resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | Current state of this QueryPack: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed. | [optional] [readonly] 
**query_pack_id** | **str** | The unique ID of your application. This field cannot be changed. | [optional] [readonly] 
**time_created** | **datetime** | Creation Date for the Log Analytics QueryPack, in ISO 8601 format. | [optional] [readonly] 
**time_modified** | **datetime** | Last modified date of the Log Analytics QueryPack, in ISO 8601 format. | [optional] [readonly] 

## Example

```python
from openapi_client.models.log_analytics_query_pack_properties import LogAnalyticsQueryPackProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LogAnalyticsQueryPackProperties from a JSON string
log_analytics_query_pack_properties_instance = LogAnalyticsQueryPackProperties.from_json(json)
# print the JSON string representation of the object
print(LogAnalyticsQueryPackProperties.to_json())

# convert the object into a dict
log_analytics_query_pack_properties_dict = log_analytics_query_pack_properties_instance.to_dict()
# create an instance of LogAnalyticsQueryPackProperties from a dict
log_analytics_query_pack_properties_from_dict = LogAnalyticsQueryPackProperties.from_dict(log_analytics_query_pack_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


