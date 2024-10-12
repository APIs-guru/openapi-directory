# ContentStreamTypeAssignedTargetingOptionDetails

Details for content stream type assigned targeting option. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. Explicitly targeting all options is not supported. Remove all content stream type targeting options to achieve this effect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_stream_type** | **str** | Output only. The content stream type. | [optional] [readonly] 
**targeting_option_id** | **str** | Required. The targeting_option_id field when targeting_type is &#x60;TARGETING_TYPE_CONTENT_STREAM_TYPE&#x60;. | [optional] 

## Example

```python
from openapi_client.models.content_stream_type_assigned_targeting_option_details import ContentStreamTypeAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ContentStreamTypeAssignedTargetingOptionDetails from a JSON string
content_stream_type_assigned_targeting_option_details_instance = ContentStreamTypeAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ContentStreamTypeAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
content_stream_type_assigned_targeting_option_details_dict = content_stream_type_assigned_targeting_option_details_instance.to_dict()
# create an instance of ContentStreamTypeAssignedTargetingOptionDetails from a dict
content_stream_type_assigned_targeting_option_details_from_dict = ContentStreamTypeAssignedTargetingOptionDetails.from_dict(content_stream_type_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


