# DeviceTypeTargetingOptionDetails

Represents a targetable device type. This will be populated in the device_type_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_type** | **str** | Output only. The device type that is used to be targeted. | [optional] [readonly] 

## Example

```python
from openapi_client.models.device_type_targeting_option_details import DeviceTypeTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceTypeTargetingOptionDetails from a JSON string
device_type_targeting_option_details_instance = DeviceTypeTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(DeviceTypeTargetingOptionDetails.to_json())

# convert the object into a dict
device_type_targeting_option_details_dict = device_type_targeting_option_details_instance.to_dict()
# create an instance of DeviceTypeTargetingOptionDetails from a dict
device_type_targeting_option_details_from_dict = DeviceTypeTargetingOptionDetails.from_dict(device_type_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


