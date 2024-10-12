# TeamInfoSchema

Schema for successful response from team.info method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**team** | [**ObjsTeam**](ObjsTeam.md) |  | 

## Example

```python
from openapi_client.models.team_info_schema import TeamInfoSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TeamInfoSchema from a JSON string
team_info_schema_instance = TeamInfoSchema.from_json(json)
# print the JSON string representation of the object
print(TeamInfoSchema.to_json())

# convert the object into a dict
team_info_schema_dict = team_info_schema_instance.to_dict()
# create an instance of TeamInfoSchema from a dict
team_info_schema_from_dict = TeamInfoSchema.from_dict(team_info_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


