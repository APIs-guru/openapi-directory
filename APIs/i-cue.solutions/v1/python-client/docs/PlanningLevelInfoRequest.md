# PlanningLevelInfoRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discard_data** | **bool** |  | 
**error_type** | **str** |  | 
**hold_out_period** | **int** |  | 
**no_fcst** | **int** |  | 
**outlier_detection** | **bool** |  | 
**periodicity** | **int** |  | 

## Example

```python
from openapi_client.models.planning_level_info_request import PlanningLevelInfoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PlanningLevelInfoRequest from a JSON string
planning_level_info_request_instance = PlanningLevelInfoRequest.from_json(json)
# print the JSON string representation of the object
print(PlanningLevelInfoRequest.to_json())

# convert the object into a dict
planning_level_info_request_dict = planning_level_info_request_instance.to_dict()
# create an instance of PlanningLevelInfoRequest from a dict
planning_level_info_request_from_dict = PlanningLevelInfoRequest.from_dict(planning_level_info_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


