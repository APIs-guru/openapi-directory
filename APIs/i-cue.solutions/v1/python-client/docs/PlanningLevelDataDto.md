# PlanningLevelDataDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**history_values** | **List[float]** |  | [optional] 
**time_series_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.planning_level_data_dto import PlanningLevelDataDto

# TODO update the JSON string below
json = "{}"
# create an instance of PlanningLevelDataDto from a JSON string
planning_level_data_dto_instance = PlanningLevelDataDto.from_json(json)
# print the JSON string representation of the object
print(PlanningLevelDataDto.to_json())

# convert the object into a dict
planning_level_data_dto_dict = planning_level_data_dto_instance.to_dict()
# create an instance of PlanningLevelDataDto from a dict
planning_level_data_dto_from_dict = PlanningLevelDataDto.from_dict(planning_level_data_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


