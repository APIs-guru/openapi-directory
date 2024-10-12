# TeamProfileGetSuccessSchema

Schema for successful response from team.profile.get method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**profile** | [**TeamProfileGetSuccessSchemaProfile**](TeamProfileGetSuccessSchemaProfile.md) |  | 

## Example

```python
from openapi_client.models.team_profile_get_success_schema import TeamProfileGetSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TeamProfileGetSuccessSchema from a JSON string
team_profile_get_success_schema_instance = TeamProfileGetSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(TeamProfileGetSuccessSchema.to_json())

# convert the object into a dict
team_profile_get_success_schema_dict = team_profile_get_success_schema_instance.to_dict()
# create an instance of TeamProfileGetSuccessSchema from a dict
team_profile_get_success_schema_from_dict = TeamProfileGetSuccessSchema.from_dict(team_profile_get_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


