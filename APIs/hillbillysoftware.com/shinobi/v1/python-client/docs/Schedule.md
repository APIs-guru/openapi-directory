# Schedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**air_date** | **str** |  | [optional] 
**air_time** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**days_on** | **str** |  | [optional] 
**episode** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**image** | **str** |  | [optional] 
**network** | **str** |  | [optional] 
**premiere_date** | **str** |  | [optional] 
**runtime** | **str** |  | [optional] 
**season** | **str** |  | [optional] 
**show_name** | **str** |  | [optional] 
**summary** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.schedule import Schedule

# TODO update the JSON string below
json = "{}"
# create an instance of Schedule from a JSON string
schedule_instance = Schedule.from_json(json)
# print the JSON string representation of the object
print(Schedule.to_json())

# convert the object into a dict
schedule_dict = schedule_instance.to_dict()
# create an instance of Schedule from a dict
schedule_from_dict = Schedule.from_dict(schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


