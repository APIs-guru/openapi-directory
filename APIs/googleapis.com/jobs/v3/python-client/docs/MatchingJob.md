# MatchingJob

Output only. Job entry with metadata inside SearchJobsResponse.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commute_info** | [**CommuteInfo**](CommuteInfo.md) |  | [optional] 
**job** | [**Job**](Job.md) |  | [optional] 
**job_summary** | **str** | A summary of the job with core information that&#39;s displayed on the search results listing page. | [optional] 
**job_title_snippet** | **str** | Contains snippets of text from the Job.job_title field most closely matching a search query&#39;s keywords, if available. The matching query keywords are enclosed in HTML bold tags. | [optional] 
**search_text_snippet** | **str** | Contains snippets of text from the Job.description and similar fields that most closely match a search query&#39;s keywords, if available. All HTML tags in the original fields are stripped when returned in this field, and matching query keywords are enclosed in HTML bold tags. | [optional] 

## Example

```python
from openapi_client.models.matching_job import MatchingJob

# TODO update the JSON string below
json = "{}"
# create an instance of MatchingJob from a JSON string
matching_job_instance = MatchingJob.from_json(json)
# print the JSON string representation of the object
print(MatchingJob.to_json())

# convert the object into a dict
matching_job_dict = matching_job_instance.to_dict()
# create an instance of MatchingJob from a dict
matching_job_from_dict = MatchingJob.from_dict(matching_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


