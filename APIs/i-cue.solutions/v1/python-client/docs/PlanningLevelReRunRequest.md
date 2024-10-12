# PlanningLevelReRunRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** |  | 
**params** | [**PlanningLevelInfoRequest**](PlanningLevelInfoRequest.md) |  | [optional] 
**planning_level_id** | **int** |  | 

## Example

```python
from openapi_client.models.planning_level_re_run_request import PlanningLevelReRunRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PlanningLevelReRunRequest from a JSON string
planning_level_re_run_request_instance = PlanningLevelReRunRequest.from_json(json)
# print the JSON string representation of the object
print(PlanningLevelReRunRequest.to_json())

# convert the object into a dict
planning_level_re_run_request_dict = planning_level_re_run_request_instance.to_dict()
# create an instance of PlanningLevelReRunRequest from a dict
planning_level_re_run_request_from_dict = PlanningLevelReRunRequest.from_dict(planning_level_re_run_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


