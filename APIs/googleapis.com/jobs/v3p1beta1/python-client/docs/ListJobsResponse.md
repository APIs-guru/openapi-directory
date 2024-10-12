# ListJobsResponse

Output only. List jobs response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobs** | [**List[Job]**](Job.md) | The Jobs for a given company. The maximum number of items returned is based on the limit field provided in the request. | [optional] 
**metadata** | [**ResponseMetadata**](ResponseMetadata.md) |  | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. | [optional] 

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


