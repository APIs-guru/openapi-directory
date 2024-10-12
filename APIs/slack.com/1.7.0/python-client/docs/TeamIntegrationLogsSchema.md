# TeamIntegrationLogsSchema

Schema for successful response from team.integrationLogs method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logs** | [**List[TeamIntegrationLogsSchemaLogsInner]**](TeamIntegrationLogsSchemaLogsInner.md) |  | 
**ok** | **bool** |  | 
**paging** | [**ObjsPaging**](ObjsPaging.md) |  | 

## Example

```python
from openapi_client.models.team_integration_logs_schema import TeamIntegrationLogsSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TeamIntegrationLogsSchema from a JSON string
team_integration_logs_schema_instance = TeamIntegrationLogsSchema.from_json(json)
# print the JSON string representation of the object
print(TeamIntegrationLogsSchema.to_json())

# convert the object into a dict
team_integration_logs_schema_dict = team_integration_logs_schema_instance.to_dict()
# create an instance of TeamIntegrationLogsSchema from a dict
team_integration_logs_schema_from_dict = TeamIntegrationLogsSchema.from_dict(team_integration_logs_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


