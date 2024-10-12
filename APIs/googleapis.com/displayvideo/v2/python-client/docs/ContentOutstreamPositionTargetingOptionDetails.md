# ContentOutstreamPositionTargetingOptionDetails

Represents a targetable content outstream position, which could be used by display and video ads. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_outstream_position** | **str** | Output only. The content outstream position. | [optional] [readonly] 

## Example

```python
from openapi_client.models.content_outstream_position_targeting_option_details import ContentOutstreamPositionTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ContentOutstreamPositionTargetingOptionDetails from a JSON string
content_outstream_position_targeting_option_details_instance = ContentOutstreamPositionTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ContentOutstreamPositionTargetingOptionDetails.to_json())

# convert the object into a dict
content_outstream_position_targeting_option_details_dict = content_outstream_position_targeting_option_details_instance.to_dict()
# create an instance of ContentOutstreamPositionTargetingOptionDetails from a dict
content_outstream_position_targeting_option_details_from_dict = ContentOutstreamPositionTargetingOptionDetails.from_dict(content_outstream_position_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


