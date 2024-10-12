# AiPlanningLevelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PlanningLevelDataDto]**](PlanningLevelDataDto.md) |  | [optional] 
**method** | **str** |  | 
**params** | [**PlanningLevelInfoRequest**](PlanningLevelInfoRequest.md) |  | [optional] 
**planning_level_id** | **str** |  | 
**start_date** | **str** |  | 

## Example

```python
from openapi_client.models.ai_planning_level_request import AiPlanningLevelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AiPlanningLevelRequest from a JSON string
ai_planning_level_request_instance = AiPlanningLevelRequest.from_json(json)
# print the JSON string representation of the object
print(AiPlanningLevelRequest.to_json())

# convert the object into a dict
ai_planning_level_request_dict = ai_planning_level_request_instance.to_dict()
# create an instance of AiPlanningLevelRequest from a dict
ai_planning_level_request_from_dict = AiPlanningLevelRequest.from_dict(ai_planning_level_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


