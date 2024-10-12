# DeviceRolloverDetails

The additional device details for the service data encryption key rollover.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_eligibility** | **str** | The eligibility status of device for service data encryption key rollover. | [optional] 
**authorization_status** | **str** | The authorization status of the device for service data encryption key rollover. | [optional] 
**in_eligibility_reason** | **str** | The reason for inEligibility of device, in case it&#39;s not eligible for service data encryption key rollover. | [optional] 

## Example

```python
from openapi_client.models.device_rollover_details import DeviceRolloverDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceRolloverDetails from a JSON string
device_rollover_details_instance = DeviceRolloverDetails.from_json(json)
# print the JSON string representation of the object
print(DeviceRolloverDetails.to_json())

# convert the object into a dict
device_rollover_details_dict = device_rollover_details_instance.to_dict()
# create an instance of DeviceRolloverDetails from a dict
device_rollover_details_from_dict = DeviceRolloverDetails.from_dict(device_rollover_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


