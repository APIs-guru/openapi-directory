# ContentDurationTargetingOptionDetails

Represents a targetable content duration. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_duration** | **str** | Output only. The content duration. | [optional] [readonly] 

## Example

```python
from openapi_client.models.content_duration_targeting_option_details import ContentDurationTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ContentDurationTargetingOptionDetails from a JSON string
content_duration_targeting_option_details_instance = ContentDurationTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ContentDurationTargetingOptionDetails.to_json())

# convert the object into a dict
content_duration_targeting_option_details_dict = content_duration_targeting_option_details_instance.to_dict()
# create an instance of ContentDurationTargetingOptionDetails from a dict
content_duration_targeting_option_details_from_dict = ContentDurationTargetingOptionDetails.from_dict(content_duration_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


