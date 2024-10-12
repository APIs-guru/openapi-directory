# KeywordJobRank


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | The domain you want to check its rank for the keyword entered | [optional] 
**keyword** | **str** | keyword (search term) | 
**localization_code** | **str** | A code for the localization, which is a combination of country and language | 
**localization_zip** | **str** | option to localize the results per zip code | [optional] 
**search_engine** | **str** | google/bing/google_mobile | [optional] [default to 'google']

## Example

```python
from openapi_client.models.keyword_job_rank import KeywordJobRank

# TODO update the JSON string below
json = "{}"
# create an instance of KeywordJobRank from a JSON string
keyword_job_rank_instance = KeywordJobRank.from_json(json)
# print the JSON string representation of the object
print(KeywordJobRank.to_json())

# convert the object into a dict
keyword_job_rank_dict = keyword_job_rank_instance.to_dict()
# create an instance of KeywordJobRank from a dict
keyword_job_rank_from_dict = KeywordJobRank.from_dict(keyword_job_rank_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


