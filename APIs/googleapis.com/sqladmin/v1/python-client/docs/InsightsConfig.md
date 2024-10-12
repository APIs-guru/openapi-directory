# InsightsConfig

Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_insights_enabled** | **bool** | Whether Query Insights feature is enabled. | [optional] 
**query_plans_per_minute** | **int** | Number of query execution plans captured by Insights per minute for all queries combined. Default is 5. | [optional] 
**query_string_length** | **int** | Maximum query length stored in bytes. Default value: 1024 bytes. Range: 256-4500 bytes. Query length more than this field value will be truncated to this value. When unset, query length will be the default value. Changing query length will restart the database. | [optional] 
**record_application_tags** | **bool** | Whether Query Insights will record application tags from query when enabled. | [optional] 
**record_client_address** | **bool** | Whether Query Insights will record client address when enabled. | [optional] 

## Example

```python
from openapi_client.models.insights_config import InsightsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of InsightsConfig from a JSON string
insights_config_instance = InsightsConfig.from_json(json)
# print the JSON string representation of the object
print(InsightsConfig.to_json())

# convert the object into a dict
insights_config_dict = insights_config_instance.to_dict()
# create an instance of InsightsConfig from a dict
insights_config_from_dict = InsightsConfig.from_dict(insights_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


