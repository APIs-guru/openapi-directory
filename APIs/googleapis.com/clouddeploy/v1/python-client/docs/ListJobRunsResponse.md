# ListJobRunsResponse

ListJobRunsResponse is the response object returned by `ListJobRuns`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_runs** | [**List[JobRun]**](JobRun.md) | The &#x60;JobRun&#x60; objects. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached | [optional] 

## Example

```python
from openapi_client.models.list_job_runs_response import ListJobRunsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListJobRunsResponse from a JSON string
list_job_runs_response_instance = ListJobRunsResponse.from_json(json)
# print the JSON string representation of the object
print(ListJobRunsResponse.to_json())

# convert the object into a dict
list_job_runs_response_dict = list_job_runs_response_instance.to_dict()
# create an instance of ListJobRunsResponse from a dict
list_job_runs_response_from_dict = ListJobRunsResponse.from_dict(list_job_runs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


