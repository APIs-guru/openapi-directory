# ListJobsResponse

Response to a request to list Cloud Dataflow jobs in a project. This might be a partial response, depending on the page size in the ListJobsRequest. However, if the project does not have any jobs, an instance of ListJobsResponse is not returned and the requests's response body is empty {}.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_location** | [**List[FailedLocation]**](FailedLocation.md) | Zero or more messages describing the [regional endpoints] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that failed to respond. | [optional] 
**jobs** | [**List[Job]**](Job.md) | A subset of the requested job information. | [optional] 
**next_page_token** | **str** | Set if there may be more results than fit in this response. | [optional] 

## Example

```python
from openapi_client.models.list_jobs_response import ListJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListJobsResponse from a JSON string
list_jobs_response_instance = ListJobsResponse.from_json(json)
# print the JSON string representation of the object
print(ListJobsResponse.to_json())

# convert the object into a dict
list_jobs_response_dict = list_jobs_response_instance.to_dict()
# create an instance of ListJobsResponse from a dict
list_jobs_response_from_dict = ListJobsResponse.from_dict(list_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


