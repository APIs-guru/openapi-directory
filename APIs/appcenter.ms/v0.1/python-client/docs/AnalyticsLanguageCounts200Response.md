# AnalyticsLanguageCounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**languages** | [**List[AnalyticsLanguageCounts200ResponseLanguagesInner]**](AnalyticsLanguageCounts200ResponseLanguagesInner.md) |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.analytics_language_counts200_response import AnalyticsLanguageCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsLanguageCounts200Response from a JSON string
analytics_language_counts200_response_instance = AnalyticsLanguageCounts200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsLanguageCounts200Response.to_json())

# convert the object into a dict
analytics_language_counts200_response_dict = analytics_language_counts200_response_instance.to_dict()
# create an instance of AnalyticsLanguageCounts200Response from a dict
analytics_language_counts200_response_from_dict = AnalyticsLanguageCounts200Response.from_dict(analytics_language_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


