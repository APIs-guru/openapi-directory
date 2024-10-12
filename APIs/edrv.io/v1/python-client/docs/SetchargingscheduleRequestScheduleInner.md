# SetchargingscheduleRequestScheduleInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **str** |  | [optional] 
**limit** | **float** |  | [optional] 
**start_date** | **str** |  | [optional] 
**unit** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.setchargingschedule_request_schedule_inner import SetchargingscheduleRequestScheduleInner

# TODO update the JSON string below
json = "{}"
# create an instance of SetchargingscheduleRequestScheduleInner from a JSON string
setchargingschedule_request_schedule_inner_instance = SetchargingscheduleRequestScheduleInner.from_json(json)
# print the JSON string representation of the object
print(SetchargingscheduleRequestScheduleInner.to_json())

# convert the object into a dict
setchargingschedule_request_schedule_inner_dict = setchargingschedule_request_schedule_inner_instance.to_dict()
# create an instance of SetchargingscheduleRequestScheduleInner from a dict
setchargingschedule_request_schedule_inner_from_dict = SetchargingscheduleRequestScheduleInner.from_dict(setchargingschedule_request_schedule_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


