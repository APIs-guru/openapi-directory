# NativeContentPositionAssignedTargetingOptionDetails

Details for native content position assigned targeting option. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. Explicitly targeting all options is not supported. Remove all native content position targeting options to achieve this effect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_position** | **str** | Required. The content position. | [optional] 
**targeting_option_id** | **str** | Required. The targeting_option_id field when targeting_type is &#x60;TARGETING_TYPE_NATIVE_CONTENT_POSITION&#x60;. | [optional] 

## Example

```python
from openapi_client.models.native_content_position_assigned_targeting_option_details import NativeContentPositionAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of NativeContentPositionAssignedTargetingOptionDetails from a JSON string
native_content_position_assigned_targeting_option_details_instance = NativeContentPositionAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(NativeContentPositionAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
native_content_position_assigned_targeting_option_details_dict = native_content_position_assigned_targeting_option_details_instance.to_dict()
# create an instance of NativeContentPositionAssignedTargetingOptionDetails from a dict
native_content_position_assigned_targeting_option_details_from_dict = NativeContentPositionAssignedTargetingOptionDetails.from_dict(native_content_position_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


