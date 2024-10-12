# ContentGenreTargetingOptionDetails

Represents a targetable content genre. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the content genre | [optional] [readonly] 

## Example

```python
from openapi_client.models.content_genre_targeting_option_details import ContentGenreTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ContentGenreTargetingOptionDetails from a JSON string
content_genre_targeting_option_details_instance = ContentGenreTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ContentGenreTargetingOptionDetails.to_json())

# convert the object into a dict
content_genre_targeting_option_details_dict = content_genre_targeting_option_details_instance.to_dict()
# create an instance of ContentGenreTargetingOptionDetails from a dict
content_genre_targeting_option_details_from_dict = ContentGenreTargetingOptionDetails.from_dict(content_genre_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


