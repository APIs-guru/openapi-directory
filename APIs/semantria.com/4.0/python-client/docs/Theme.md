# Theme


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mentions** | [**List[Mention]**](Mention.md) | Returns the concept and query defined topics determined for the text | 
**normalized** | **str** | The normalized form of the theme | 
**phrases_count** | **int** | Count of sentiment-bearing phrases was used in calculating theme&#39;s sentiment | 
**sentiment_polarity** | **str** | Verbal representation of sentiment score. Can be \&quot;negative\&quot;, \&quot;positive\&quot; or \&quot;neutral\&quot; | 
**sentiment_score** | **float** | Sentiment score for theme’s sentences across the documents | 
**stemmed** | **str** | The stemmed form of the theme | 
**themes_count** | **int** | Count of themes across the documents that got rolled into this one | 
**title** | **str** | The text of the theme across the documents | 

## Example

```python
from openapi_client.models.theme import Theme

# TODO update the JSON string below
json = "{}"
# create an instance of Theme from a JSON string
theme_instance = Theme.from_json(json)
# print the JSON string representation of the object
print(Theme.to_json())

# convert the object into a dict
theme_dict = theme_instance.to_dict()
# create an instance of Theme from a dict
theme_from_dict = Theme.from_dict(theme_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


