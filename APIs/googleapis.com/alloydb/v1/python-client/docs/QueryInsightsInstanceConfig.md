# QueryInsightsInstanceConfig

QueryInsights Instance specific configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_plans_per_minute** | **int** | Number of query execution plans captured by Insights per minute for all queries combined. The default value is 5. Any integer between 0 and 20 is considered valid. | [optional] 
**query_string_length** | **int** | Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid. | [optional] 
**record_application_tags** | **bool** | Record application tags for an instance. This flag is turned \&quot;on\&quot; by default. | [optional] 
**record_client_address** | **bool** | Record client address for an instance. Client address is PII information. This flag is turned \&quot;on\&quot; by default. | [optional] 

## Example

```python
from openapi_client.models.query_insights_instance_config import QueryInsightsInstanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of QueryInsightsInstanceConfig from a JSON string
query_insights_instance_config_instance = QueryInsightsInstanceConfig.from_json(json)
# print the JSON string representation of the object
print(QueryInsightsInstanceConfig.to_json())

# convert the object into a dict
query_insights_instance_config_dict = query_insights_instance_config_instance.to_dict()
# create an instance of QueryInsightsInstanceConfig from a dict
query_insights_instance_config_from_dict = QueryInsightsInstanceConfig.from_dict(query_insights_instance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


