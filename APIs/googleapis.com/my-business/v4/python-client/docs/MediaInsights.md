# MediaInsights

Insights and statistics for the media item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**view_count** | **str** | Output only. The number of times the media item has been viewed. | [optional] 

## Example

```python
from openapi_client.models.media_insights import MediaInsights

# TODO update the JSON string below
json = "{}"
# create an instance of MediaInsights from a JSON string
media_insights_instance = MediaInsights.from_json(json)
# print the JSON string representation of the object
print(MediaInsights.to_json())

# convert the object into a dict
media_insights_dict = media_insights_instance.to_dict()
# create an instance of MediaInsights from a dict
media_insights_from_dict = MediaInsights.from_dict(media_insights_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


