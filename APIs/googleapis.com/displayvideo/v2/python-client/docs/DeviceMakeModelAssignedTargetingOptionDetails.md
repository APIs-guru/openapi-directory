# DeviceMakeModelAssignedTargetingOptionDetails

Assigned device make and model targeting option details. This will be populated in the device_make_model_details field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the device make and model. | [optional] [readonly] 
**negative** | **bool** | Indicates if this option is being negatively targeted. | [optional] 
**targeting_option_id** | **str** | Required. The targeting_option_id field when targeting_type is &#x60;TARGETING_TYPE_DEVICE_MAKE_MODEL&#x60;. | [optional] 

## Example

```python
from openapi_client.models.device_make_model_assigned_targeting_option_details import DeviceMakeModelAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceMakeModelAssignedTargetingOptionDetails from a JSON string
device_make_model_assigned_targeting_option_details_instance = DeviceMakeModelAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(DeviceMakeModelAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
device_make_model_assigned_targeting_option_details_dict = device_make_model_assigned_targeting_option_details_instance.to_dict()
# create an instance of DeviceMakeModelAssignedTargetingOptionDetails from a dict
device_make_model_assigned_targeting_option_details_from_dict = DeviceMakeModelAssignedTargetingOptionDetails.from_dict(device_make_model_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


