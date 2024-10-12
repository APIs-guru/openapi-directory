# OnScreenPositionTargetingOptionDetails

Represents a targetable on screen position, which could be used by display and video ads. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**on_screen_position** | **str** | Output only. The on screen position. | [optional] [readonly] 

## Example

```python
from openapi_client.models.on_screen_position_targeting_option_details import OnScreenPositionTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OnScreenPositionTargetingOptionDetails from a JSON string
on_screen_position_targeting_option_details_instance = OnScreenPositionTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(OnScreenPositionTargetingOptionDetails.to_json())

# convert the object into a dict
on_screen_position_targeting_option_details_dict = on_screen_position_targeting_option_details_instance.to_dict()
# create an instance of OnScreenPositionTargetingOptionDetails from a dict
on_screen_position_targeting_option_details_from_dict = OnScreenPositionTargetingOptionDetails.from_dict(on_screen_position_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


