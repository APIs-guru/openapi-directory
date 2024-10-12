# ContentGenreAssignedTargetingOptionDetails

Details for content genre assigned targeting option. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. Explicitly targeting all options is not supported. Remove all content genre targeting options to achieve this effect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the content genre. | [optional] [readonly] 
**negative** | **bool** | Indicates if this option is being negatively targeted. | [optional] 
**targeting_option_id** | **str** | Required. The targeting_option_id field when targeting_type is &#x60;TARGETING_TYPE_CONTENT_GENRE&#x60;. | [optional] 

## Example

```python
from openapi_client.models.content_genre_assigned_targeting_option_details import ContentGenreAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ContentGenreAssignedTargetingOptionDetails from a JSON string
content_genre_assigned_targeting_option_details_instance = ContentGenreAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ContentGenreAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
content_genre_assigned_targeting_option_details_dict = content_genre_assigned_targeting_option_details_instance.to_dict()
# create an instance of ContentGenreAssignedTargetingOptionDetails from a dict
content_genre_assigned_targeting_option_details_from_dict = ContentGenreAssignedTargetingOptionDetails.from_dict(content_genre_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


