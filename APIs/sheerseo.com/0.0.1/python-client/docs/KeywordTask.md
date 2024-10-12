# KeywordTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyword** | **str** | keyword (search term) | 
**localization_code** | **str** | A code for the localization, which is a combination of country and language | 
**localization_zip** | **str** | option to localize the results per zip code | [optional] 
**search_engine** | **str** | google/bing/google_mobile | [optional] 
**status** | **str** | status of this task request. \&quot;ok\&quot; means we&#39;re working on collecting it. \&quot;invalid\&quot; means there was an error and it won&#39;t be collected | [optional] 
**task_id** | **str** | the assigned task id for this task. Should be used later in the serp-collect request | [optional] 

## Example

```python
from openapi_client.models.keyword_task import KeywordTask

# TODO update the JSON string below
json = "{}"
# create an instance of KeywordTask from a JSON string
keyword_task_instance = KeywordTask.from_json(json)
# print the JSON string representation of the object
print(KeywordTask.to_json())

# convert the object into a dict
keyword_task_dict = keyword_task_instance.to_dict()
# create an instance of KeywordTask from a dict
keyword_task_from_dict = KeywordTask.from_dict(keyword_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


