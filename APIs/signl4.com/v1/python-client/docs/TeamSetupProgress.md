# TeamSetupProgress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed_steps** | **List[str]** |  | [optional] 
**team_id** | **str** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.team_setup_progress import TeamSetupProgress

# TODO update the JSON string below
json = "{}"
# create an instance of TeamSetupProgress from a JSON string
team_setup_progress_instance = TeamSetupProgress.from_json(json)
# print the JSON string representation of the object
print(TeamSetupProgress.to_json())

# convert the object into a dict
team_setup_progress_dict = team_setup_progress_instance.to_dict()
# create an instance of TeamSetupProgress from a dict
team_setup_progress_from_dict = TeamSetupProgress.from_dict(team_setup_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


