# KeywordJobSerp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyword** | **str** | keyword (search term) | 
**localization_code** | **str** | A code for the localization, which is a combination of country and language | 
**localization_zip** | **str** | option to localize the results per zip code | [optional] 
**search_engine** | **str** | google/bing/google_mobile | [optional] [default to 'google']

## Example

```python
from openapi_client.models.keyword_job_serp import KeywordJobSerp

# TODO update the JSON string below
json = "{}"
# create an instance of KeywordJobSerp from a JSON string
keyword_job_serp_instance = KeywordJobSerp.from_json(json)
# print the JSON string representation of the object
print(KeywordJobSerp.to_json())

# convert the object into a dict
keyword_job_serp_dict = keyword_job_serp_instance.to_dict()
# create an instance of KeywordJobSerp from a dict
keyword_job_serp_from_dict = KeywordJobSerp.from_dict(keyword_job_serp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


