# ScheduleCreateOrUpdateParameters

The parameters supplied to the create or update schedule operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the Schedule. | 
**properties** | [**ScheduleCreateOrUpdateProperties**](ScheduleCreateOrUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.schedule_create_or_update_parameters import ScheduleCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleCreateOrUpdateParameters from a JSON string
schedule_create_or_update_parameters_instance = ScheduleCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ScheduleCreateOrUpdateParameters.to_json())

# convert the object into a dict
schedule_create_or_update_parameters_dict = schedule_create_or_update_parameters_instance.to_dict()
# create an instance of ScheduleCreateOrUpdateParameters from a dict
schedule_create_or_update_parameters_from_dict = ScheduleCreateOrUpdateParameters.from_dict(schedule_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


