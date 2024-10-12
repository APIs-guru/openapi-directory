# ScheduleUpdateInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule** | [**Schedule4**](Schedule4.md) |  | 

## Example

```python
from openapi_client.models.schedule_update_input import ScheduleUpdateInput

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleUpdateInput from a JSON string
schedule_update_input_instance = ScheduleUpdateInput.from_json(json)
# print the JSON string representation of the object
print(ScheduleUpdateInput.to_json())

# convert the object into a dict
schedule_update_input_dict = schedule_update_input_instance.to_dict()
# create an instance of ScheduleUpdateInput from a dict
schedule_update_input_from_dict = ScheduleUpdateInput.from_dict(schedule_update_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


