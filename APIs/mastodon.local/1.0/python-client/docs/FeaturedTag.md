# FeaturedTag

Represents a hashtag that is featured on a profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The internal ID of the featured tag in the database. Cast from integer but not guaranteed to be a number | [optional] 
**last_status_at** | **datetime** | The timestamp of the last authored status containing this hashtag. ISO 8601 Datetime. | [optional] 
**name** | **str** | The name of the hashtag being featured. | [optional] 
**statuses_count** | **int** | The number of authored statuses containing this hashtag. | [optional] 
**url** | **str** | A link to all statuses by a user that contain this hashtag. | [optional] 

## Example

```python
from openapi_client.models.featured_tag import FeaturedTag

# TODO update the JSON string below
json = "{}"
# create an instance of FeaturedTag from a JSON string
featured_tag_instance = FeaturedTag.from_json(json)
# print the JSON string representation of the object
print(FeaturedTag.to_json())

# convert the object into a dict
featured_tag_dict = featured_tag_instance.to_dict()
# create an instance of FeaturedTag from a dict
featured_tag_from_dict = FeaturedTag.from_dict(featured_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


