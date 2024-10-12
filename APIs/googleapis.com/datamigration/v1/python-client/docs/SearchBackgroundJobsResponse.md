# SearchBackgroundJobsResponse

Response message for 'SearchBackgroundJobs' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobs** | [**List[BackgroundJobLogEntry]**](BackgroundJobLogEntry.md) | The list of conversion workspace mapping rules. | [optional] 

## Example

```python
from openapi_client.models.search_background_jobs_response import SearchBackgroundJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchBackgroundJobsResponse from a JSON string
search_background_jobs_response_instance = SearchBackgroundJobsResponse.from_json(json)
# print the JSON string representation of the object
print(SearchBackgroundJobsResponse.to_json())

# convert the object into a dict
search_background_jobs_response_dict = search_background_jobs_response_instance.to_dict()
# create an instance of SearchBackgroundJobsResponse from a dict
search_background_jobs_response_from_dict = SearchBackgroundJobsResponse.from_dict(search_background_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


