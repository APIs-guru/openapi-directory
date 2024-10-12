# TeamsListAll200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the team | [optional] 
**display_name** | **str** | The display name of the team | 
**id** | **str** | The internal unique id (UUID) of the team. | 
**name** | **str** | The name of the team | 

## Example

```python
from openapi_client.models.teams_list_all200_response_inner import TeamsListAll200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of TeamsListAll200ResponseInner from a JSON string
teams_list_all200_response_inner_instance = TeamsListAll200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(TeamsListAll200ResponseInner.to_json())

# convert the object into a dict
teams_list_all200_response_inner_dict = teams_list_all200_response_inner_instance.to_dict()
# create an instance of TeamsListAll200ResponseInner from a dict
teams_list_all200_response_inner_from_dict = TeamsListAll200ResponseInner.from_dict(teams_list_all200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


