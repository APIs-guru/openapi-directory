# SetchargingscheduleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector** | **str** |  | [optional] 
**schedule** | [**List[SetchargingscheduleRequestScheduleInner]**](SetchargingscheduleRequestScheduleInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.setchargingschedule_request import SetchargingscheduleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetchargingscheduleRequest from a JSON string
setchargingschedule_request_instance = SetchargingscheduleRequest.from_json(json)
# print the JSON string representation of the object
print(SetchargingscheduleRequest.to_json())

# convert the object into a dict
setchargingschedule_request_dict = setchargingschedule_request_instance.to_dict()
# create an instance of SetchargingscheduleRequest from a dict
setchargingschedule_request_from_dict = SetchargingscheduleRequest.from_dict(setchargingschedule_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


