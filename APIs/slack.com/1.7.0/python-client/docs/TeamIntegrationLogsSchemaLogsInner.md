# TeamIntegrationLogsSchemaLogsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_app_id** | **str** |  | [optional] 
**app_id** | **str** |  | 
**app_type** | **str** |  | 
**change_type** | **str** |  | 
**channel** | **str** |  | [optional] 
**var_date** | **str** |  | 
**scope** | **str** |  | 
**service_id** | **str** |  | [optional] 
**service_type** | **str** |  | [optional] 
**user_id** | **str** |  | 
**user_name** | **str** |  | 

## Example

```python
from openapi_client.models.team_integration_logs_schema_logs_inner import TeamIntegrationLogsSchemaLogsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TeamIntegrationLogsSchemaLogsInner from a JSON string
team_integration_logs_schema_logs_inner_instance = TeamIntegrationLogsSchemaLogsInner.from_json(json)
# print the JSON string representation of the object
print(TeamIntegrationLogsSchemaLogsInner.to_json())

# convert the object into a dict
team_integration_logs_schema_logs_inner_dict = team_integration_logs_schema_logs_inner_instance.to_dict()
# create an instance of TeamIntegrationLogsSchemaLogsInner from a dict
team_integration_logs_schema_logs_inner_from_dict = TeamIntegrationLogsSchemaLogsInner.from_dict(team_integration_logs_schema_logs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


