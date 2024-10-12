# AnalyticsLanguageCounts200ResponseLanguagesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count current of language. | [optional] 
**language_name** | **str** | Language&#39;s name. | [optional] 
**previous_count** | **int** | Count of previous lanugage. | [optional] 

## Example

```python
from openapi_client.models.analytics_language_counts200_response_languages_inner import AnalyticsLanguageCounts200ResponseLanguagesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsLanguageCounts200ResponseLanguagesInner from a JSON string
analytics_language_counts200_response_languages_inner_instance = AnalyticsLanguageCounts200ResponseLanguagesInner.from_json(json)
# print the JSON string representation of the object
print(AnalyticsLanguageCounts200ResponseLanguagesInner.to_json())

# convert the object into a dict
analytics_language_counts200_response_languages_inner_dict = analytics_language_counts200_response_languages_inner_instance.to_dict()
# create an instance of AnalyticsLanguageCounts200ResponseLanguagesInner from a dict
analytics_language_counts200_response_languages_inner_from_dict = AnalyticsLanguageCounts200ResponseLanguagesInner.from_dict(analytics_language_counts200_response_languages_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


