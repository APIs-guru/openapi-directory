# DeviceTypeAssignedTargetingOptionDetails

Targeting details for device type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_type** | **str** | Required. The display name of the device type. | [optional] 
**youtube_and_partners_bid_multiplier** | **float** | Output only. Bid multiplier allows you to show your ads more or less frequently based on the device type. It will apply a multiplier on the original bid price. When this field is 0, it indicates this field is not applicable instead of multiplying 0 on the original bid price. For example, if the bid price without multiplier is $10.0 and the multiplier is 1.5 for Tablet, the resulting bid price for Tablet will be $15.0. Only applicable to YouTube and Partners line items. | [optional] [readonly] 

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


