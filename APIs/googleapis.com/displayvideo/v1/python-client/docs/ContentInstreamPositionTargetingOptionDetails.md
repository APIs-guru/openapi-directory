# ContentInstreamPositionTargetingOptionDetails

Represents a targetable content instream position, which could be used by video and audio ads. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_instream_position** | **str** | Output only. The content instream position. | [optional] [readonly] 

## Example

```python
from openapi_client.models.content_instream_position_targeting_option_details import ContentInstreamPositionTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ContentInstreamPositionTargetingOptionDetails from a JSON string
content_instream_position_targeting_option_details_instance = ContentInstreamPositionTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ContentInstreamPositionTargetingOptionDetails.to_json())

# convert the object into a dict
content_instream_position_targeting_option_details_dict = content_instream_position_targeting_option_details_instance.to_dict()
# create an instance of ContentInstreamPositionTargetingOptionDetails from a dict
content_instream_position_targeting_option_details_from_dict = ContentInstreamPositionTargetingOptionDetails.from_dict(content_instream_position_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


