# TeamAdmin

Some info about the user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_url** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.team_admin import TeamAdmin

# TODO update the JSON string below
json = "{}"
# create an instance of TeamAdmin from a JSON string
team_admin_instance = TeamAdmin.from_json(json)
# print the JSON string representation of the object
print(TeamAdmin.to_json())

# convert the object into a dict
team_admin_dict = team_admin_instance.to_dict()
# create an instance of TeamAdmin from a dict
team_admin_from_dict = TeamAdmin.from_dict(team_admin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


