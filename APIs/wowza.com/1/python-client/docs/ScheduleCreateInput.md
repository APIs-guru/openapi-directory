# ScheduleCreateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule** | [**Schedule3**](Schedule3.md) |  | 

## Example

```python
from openapi_client.models.schedule_create_input import ScheduleCreateInput

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleCreateInput from a JSON string
schedule_create_input_instance = ScheduleCreateInput.from_json(json)
# print the JSON string representation of the object
print(ScheduleCreateInput.to_json())

# convert the object into a dict
schedule_create_input_dict = schedule_create_input_instance.to_dict()
# create an instance of ScheduleCreateInput from a dict
schedule_create_input_from_dict = ScheduleCreateInput.from_dict(schedule_create_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


