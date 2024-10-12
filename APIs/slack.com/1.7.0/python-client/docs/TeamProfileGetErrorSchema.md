# TeamProfileGetErrorSchema

Schema for error response from team.profile.get method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.team_profile_get_error_schema import TeamProfileGetErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TeamProfileGetErrorSchema from a JSON string
team_profile_get_error_schema_instance = TeamProfileGetErrorSchema.from_json(json)
# print the JSON string representation of the object
print(TeamProfileGetErrorSchema.to_json())

# convert the object into a dict
team_profile_get_error_schema_dict = team_profile_get_error_schema_instance.to_dict()
# create an instance of TeamProfileGetErrorSchema from a dict
team_profile_get_error_schema_from_dict = TeamProfileGetErrorSchema.from_dict(team_profile_get_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


