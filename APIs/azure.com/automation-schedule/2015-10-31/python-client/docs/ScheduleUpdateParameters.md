# ScheduleUpdateParameters

The parameters supplied to the update schedule operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the Schedule. | [optional] 
**properties** | [**ScheduleUpdateProperties**](ScheduleUpdateProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.schedule_update_parameters import ScheduleUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleUpdateParameters from a JSON string
schedule_update_parameters_instance = ScheduleUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ScheduleUpdateParameters.to_json())

# convert the object into a dict
schedule_update_parameters_dict = schedule_update_parameters_instance.to_dict()
# create an instance of ScheduleUpdateParameters from a dict
schedule_update_parameters_from_dict = ScheduleUpdateParameters.from_dict(schedule_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


