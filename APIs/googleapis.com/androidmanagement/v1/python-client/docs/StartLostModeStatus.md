# StartLostModeStatus

Status of the START_LOST_MODE command to put the device into lost mode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status. See StartLostModeStatus. | [optional] 

## Example

```python
from openapi_client.models.start_lost_mode_status import StartLostModeStatus

# TODO update the JSON string below
json = "{}"
# create an instance of StartLostModeStatus from a JSON string
start_lost_mode_status_instance = StartLostModeStatus.from_json(json)
# print the JSON string representation of the object
print(StartLostModeStatus.to_json())

# convert the object into a dict
start_lost_mode_status_dict = start_lost_mode_status_instance.to_dict()
# create an instance of StartLostModeStatus from a dict
start_lost_mode_status_from_dict = StartLostModeStatus.from_dict(start_lost_mode_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


