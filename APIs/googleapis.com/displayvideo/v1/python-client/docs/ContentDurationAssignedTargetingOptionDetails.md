# ContentDurationAssignedTargetingOptionDetails

Details for content duration assigned targeting option. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. Explicitly targeting all options is not supported. Remove all content duration targeting options to achieve this effect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_duration** | **str** | Output only. The content duration. | [optional] [readonly] 
**targeting_option_id** | **str** | Required. The targeting_option_id field when targeting_type is &#x60;TARGETING_TYPE_CONTENT_DURATION&#x60;. | [optional] 

## Example

```python
from openapi_client.models.content_duration_assigned_targeting_option_details import ContentDurationAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ContentDurationAssignedTargetingOptionDetails from a JSON string
content_duration_assigned_targeting_option_details_instance = ContentDurationAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ContentDurationAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
content_duration_assigned_targeting_option_details_dict = content_duration_assigned_targeting_option_details_instance.to_dict()
# create an instance of ContentDurationAssignedTargetingOptionDetails from a dict
content_duration_assigned_targeting_option_details_from_dict = ContentDurationAssignedTargetingOptionDetails.from_dict(content_duration_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


