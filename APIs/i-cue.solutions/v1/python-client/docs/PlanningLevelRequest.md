# PlanningLevelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PlanningLevelDataDto]**](PlanningLevelDataDto.md) |  | [optional] 
**method** | **str** |  | 
**override** | **bool** |  | [optional] 
**params** | [**PlanningLevelInfoRequest**](PlanningLevelInfoRequest.md) |  | [optional] 
**planning_level_id** | **str** |  | 
**start_date** | **str** |  | 

## Example

```python
from openapi_client.models.planning_level_request import PlanningLevelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PlanningLevelRequest from a JSON string
planning_level_request_instance = PlanningLevelRequest.from_json(json)
# print the JSON string representation of the object
print(PlanningLevelRequest.to_json())

# convert the object into a dict
planning_level_request_dict = planning_level_request_instance.to_dict()
# create an instance of PlanningLevelRequest from a dict
planning_level_request_from_dict = PlanningLevelRequest.from_dict(planning_level_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


