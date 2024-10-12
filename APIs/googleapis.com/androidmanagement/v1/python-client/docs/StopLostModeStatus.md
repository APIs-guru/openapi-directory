# StopLostModeStatus

Status of the STOP_LOST_MODE command to take the device out of lost mode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status. See StopLostModeStatus. | [optional] 

## Example

```python
from openapi_client.models.stop_lost_mode_status import StopLostModeStatus

# TODO update the JSON string below
json = "{}"
# create an instance of StopLostModeStatus from a JSON string
stop_lost_mode_status_instance = StopLostModeStatus.from_json(json)
# print the JSON string representation of the object
print(StopLostModeStatus.to_json())

# convert the object into a dict
stop_lost_mode_status_dict = stop_lost_mode_status_instance.to_dict()
# create an instance of StopLostModeStatus from a dict
stop_lost_mode_status_from_dict = StopLostModeStatus.from_dict(stop_lost_mode_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


