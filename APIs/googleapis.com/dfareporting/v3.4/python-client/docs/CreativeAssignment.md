# CreativeAssignment

Creative Assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether this creative assignment is active. When true, the creative will be included in the ad&#39;s rotation. | [optional] 
**apply_event_tags** | **bool** | Whether applicable event tags should fire when this creative assignment is rendered. If this value is unset when the ad is inserted or updated, it will default to true for all creative types EXCEPT for INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO. | [optional] 
**click_through_url** | [**ClickThroughUrl**](ClickThroughUrl.md) |  | [optional] 
**companion_creative_overrides** | [**List[CompanionClickThroughOverride]**](CompanionClickThroughOverride.md) | Companion creative overrides for this creative assignment. Applicable to video ads. | [optional] 
**creative_group_assignments** | [**List[CreativeGroupAssignment]**](CreativeGroupAssignment.md) | Creative group assignments for this creative assignment. Only one assignment per creative group number is allowed for a maximum of two assignments. | [optional] 
**creative_id** | **str** | ID of the creative to be assigned. This is a required field. | [optional] 
**creative_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**end_time** | **datetime** |  | [optional] 
**rich_media_exit_overrides** | [**List[RichMediaExitOverride]**](RichMediaExitOverride.md) | Rich media exit overrides for this creative assignment. Applicable when the creative type is any of the following: - DISPLAY - RICH_MEDIA_INPAGE - RICH_MEDIA_INPAGE_FLOATING - RICH_MEDIA_IM_EXPAND - RICH_MEDIA_EXPANDING - RICH_MEDIA_INTERSTITIAL_FLOAT - RICH_MEDIA_MOBILE_IN_APP - RICH_MEDIA_MULTI_FLOATING - RICH_MEDIA_PEEL_DOWN - VPAID_LINEAR - VPAID_NON_LINEAR  | [optional] 
**sequence** | **int** | Sequence number of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_SEQUENTIAL. Acceptable values are 1 to 65535, inclusive. | [optional] 
**ssl_compliant** | **bool** | Whether the creative to be assigned is SSL-compliant. This is a read-only field that is auto-generated when the ad is inserted or updated. | [optional] 
**start_time** | **datetime** |  | [optional] 
**weight** | **int** | Weight of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_RANDOM. Value must be greater than or equal to 1. | [optional] 

## Example

```python
from openapi_client.models.creative_assignment import CreativeAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeAssignment from a JSON string
creative_assignment_instance = CreativeAssignment.from_json(json)
# print the JSON string representation of the object
print(CreativeAssignment.to_json())

# convert the object into a dict
creative_assignment_dict = creative_assignment_instance.to_dict()
# create an instance of CreativeAssignment from a dict
creative_assignment_from_dict = CreativeAssignment.from_dict(creative_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


