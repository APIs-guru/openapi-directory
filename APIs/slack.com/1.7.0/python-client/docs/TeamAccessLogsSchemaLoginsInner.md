# TeamAccessLogsSchemaLoginsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**country** | **str** |  | 
**date_first** | **int** |  | 
**date_last** | **int** |  | 
**ip** | **str** |  | 
**isp** | **str** |  | 
**region** | **str** |  | 
**user_agent** | **str** |  | 
**user_id** | **str** |  | 
**username** | **str** |  | 

## Example

```python
from openapi_client.models.team_access_logs_schema_logins_inner import TeamAccessLogsSchemaLoginsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TeamAccessLogsSchemaLoginsInner from a JSON string
team_access_logs_schema_logins_inner_instance = TeamAccessLogsSchemaLoginsInner.from_json(json)
# print the JSON string representation of the object
print(TeamAccessLogsSchemaLoginsInner.to_json())

# convert the object into a dict
team_access_logs_schema_logins_inner_dict = team_access_logs_schema_logins_inner_instance.to_dict()
# create an instance of TeamAccessLogsSchemaLoginsInner from a dict
team_access_logs_schema_logins_inner_from_dict = TeamAccessLogsSchemaLoginsInner.from_dict(team_access_logs_schema_logins_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


