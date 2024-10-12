# DeviceMakeModelTargetingOptionDetails

Represents a targetable device make and model. This will be populated in the device_make_model_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the device make and model. | [optional] [readonly] 

## Example

```python
from openapi_client.models.device_make_model_targeting_option_details import DeviceMakeModelTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceMakeModelTargetingOptionDetails from a JSON string
device_make_model_targeting_option_details_instance = DeviceMakeModelTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(DeviceMakeModelTargetingOptionDetails.to_json())

# convert the object into a dict
device_make_model_targeting_option_details_dict = device_make_model_targeting_option_details_instance.to_dict()
# create an instance of DeviceMakeModelTargetingOptionDetails from a dict
device_make_model_targeting_option_details_from_dict = DeviceMakeModelTargetingOptionDetails.from_dict(device_make_model_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


