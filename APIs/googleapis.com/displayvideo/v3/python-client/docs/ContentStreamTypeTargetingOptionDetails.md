# ContentStreamTypeTargetingOptionDetails

Represents a targetable content stream type. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_stream_type** | **str** | Output only. The content stream type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.content_stream_type_targeting_option_details import ContentStreamTypeTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ContentStreamTypeTargetingOptionDetails from a JSON string
content_stream_type_targeting_option_details_instance = ContentStreamTypeTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ContentStreamTypeTargetingOptionDetails.to_json())

# convert the object into a dict
content_stream_type_targeting_option_details_dict = content_stream_type_targeting_option_details_instance.to_dict()
# create an instance of ContentStreamTypeTargetingOptionDetails from a dict
content_stream_type_targeting_option_details_from_dict = ContentStreamTypeTargetingOptionDetails.from_dict(content_stream_type_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


