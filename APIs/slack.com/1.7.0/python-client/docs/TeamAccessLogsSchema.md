# TeamAccessLogsSchema

Schema for successful response from team.accessLogs method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logins** | [**List[TeamAccessLogsSchemaLoginsInner]**](TeamAccessLogsSchemaLoginsInner.md) |  | 
**ok** | **bool** |  | 
**paging** | [**ObjsPaging**](ObjsPaging.md) |  | 

## Example

```python
from openapi_client.models.team_access_logs_schema import TeamAccessLogsSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TeamAccessLogsSchema from a JSON string
team_access_logs_schema_instance = TeamAccessLogsSchema.from_json(json)
# print the JSON string representation of the object
print(TeamAccessLogsSchema.to_json())

# convert the object into a dict
team_access_logs_schema_dict = team_access_logs_schema_instance.to_dict()
# create an instance of TeamAccessLogsSchema from a dict
team_access_logs_schema_from_dict = TeamAccessLogsSchema.from_dict(team_access_logs_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


