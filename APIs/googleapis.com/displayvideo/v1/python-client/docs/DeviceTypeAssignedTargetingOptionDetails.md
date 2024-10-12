# DeviceTypeAssignedTargetingOptionDetails

Targeting details for device type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_type** | **str** | Required. The display name of the device type. | [optional] 
**targeting_option_id** | **str** | Required. ID of the device type. | [optional] 

## Example

```python
from openapi_client.models.device_type_assigned_targeting_option_details import DeviceTypeAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceTypeAssignedTargetingOptionDetails from a JSON string
device_type_assigned_targeting_option_details_instance = DeviceTypeAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(DeviceTypeAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
device_type_assigned_targeting_option_details_dict = device_type_assigned_targeting_option_details_instance.to_dict()
# create an instance of DeviceTypeAssignedTargetingOptionDetails from a dict
device_type_assigned_targeting_option_details_from_dict = DeviceTypeAssignedTargetingOptionDetails.from_dict(device_type_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


