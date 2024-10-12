# StartLostModeParams

Parameters associated with the START_LOST_MODE command to put the device into lost mode. At least one of the parameters, not including the organization name, must be provided in order for the device to be put into lost mode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lost_email_address** | **str** | The email address displayed to the user when the device is in lost mode. | [optional] 
**lost_message** | [**UserFacingMessage**](UserFacingMessage.md) |  | [optional] 
**lost_organization** | [**UserFacingMessage**](UserFacingMessage.md) |  | [optional] 
**lost_phone_number** | [**UserFacingMessage**](UserFacingMessage.md) |  | [optional] 
**lost_street_address** | [**UserFacingMessage**](UserFacingMessage.md) |  | [optional] 

## Example

```python
from openapi_client.models.start_lost_mode_params import StartLostModeParams

# TODO update the JSON string below
json = "{}"
# create an instance of StartLostModeParams from a JSON string
start_lost_mode_params_instance = StartLostModeParams.from_json(json)
# print the JSON string representation of the object
print(StartLostModeParams.to_json())

# convert the object into a dict
start_lost_mode_params_dict = start_lost_mode_params_instance.to_dict()
# create an instance of StartLostModeParams from a dict
start_lost_mode_params_from_dict = StartLostModeParams.from_dict(start_lost_mode_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


