# OnScreenPositionAssignedTargetingOptionDetails

On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_type** | **str** | Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * &#x60;AD_TYPE_DISPLAY&#x60;, the setting will be inherited by new line item when line_item_type is &#x60;LINE_ITEM_TYPE_DISPLAY_DEFAULT&#x60;. * &#x60;AD_TYPE_VIDEO&#x60;, the setting will be inherited by new line item when line_item_type is &#x60;LINE_ITEM_TYPE_VIDEO_DEFAULT&#x60;. | [optional] [readonly] 
**on_screen_position** | **str** | Output only. The on screen position. | [optional] [readonly] 
**targeting_option_id** | **str** | Required. The targeting_option_id field when targeting_type is &#x60;TARGETING_TYPE_ON_SCREEN_POSITION&#x60;. | [optional] 

## Example

```python
from openapi_client.models.on_screen_position_assigned_targeting_option_details import OnScreenPositionAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OnScreenPositionAssignedTargetingOptionDetails from a JSON string
on_screen_position_assigned_targeting_option_details_instance = OnScreenPositionAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(OnScreenPositionAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
on_screen_position_assigned_targeting_option_details_dict = on_screen_position_assigned_targeting_option_details_instance.to_dict()
# create an instance of OnScreenPositionAssignedTargetingOptionDetails from a dict
on_screen_position_assigned_targeting_option_details_from_dict = OnScreenPositionAssignedTargetingOptionDetails.from_dict(on_screen_position_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


