# ContentInstreamPositionAssignedTargetingOptionDetails

Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_type** | **str** | Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * &#x60;AD_TYPE_VIDEO&#x60;, the setting will be inherited by new line item when line_item_type is &#x60;LINE_ITEM_TYPE_VIDEO_DEFAULT&#x60;. * &#x60;AD_TYPE_AUDIO&#x60;, the setting will be inherited by new line item when line_item_type is &#x60;LINE_ITEM_TYPE_AUDIO_DEFAULT&#x60;. | [optional] [readonly] 
**content_instream_position** | **str** | Required. The content instream position for video or audio ads. | [optional] 
**targeting_option_id** | **str** | Required. The targeting_option_id field when targeting_type is &#x60;TARGETING_TYPE_CONTENT_INSTREAM_POSITION&#x60;. | [optional] 

## Example

```python
from openapi_client.models.content_instream_position_assigned_targeting_option_details import ContentInstreamPositionAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ContentInstreamPositionAssignedTargetingOptionDetails from a JSON string
content_instream_position_assigned_targeting_option_details_instance = ContentInstreamPositionAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ContentInstreamPositionAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
content_instream_position_assigned_targeting_option_details_dict = content_instream_position_assigned_targeting_option_details_instance.to_dict()
# create an instance of ContentInstreamPositionAssignedTargetingOptionDetails from a dict
content_instream_position_assigned_targeting_option_details_from_dict = ContentInstreamPositionAssignedTargetingOptionDetails.from_dict(content_instream_position_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


