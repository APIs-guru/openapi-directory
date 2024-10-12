# TeamAccessLogsErrorSchema

Schema for error response from team.accessLogs method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.team_access_logs_error_schema import TeamAccessLogsErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TeamAccessLogsErrorSchema from a JSON string
team_access_logs_error_schema_instance = TeamAccessLogsErrorSchema.from_json(json)
# print the JSON string representation of the object
print(TeamAccessLogsErrorSchema.to_json())

# convert the object into a dict
team_access_logs_error_schema_dict = team_access_logs_error_schema_instance.to_dict()
# create an instance of TeamAccessLogsErrorSchema from a dict
team_access_logs_error_schema_from_dict = TeamAccessLogsErrorSchema.from_dict(team_access_logs_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


