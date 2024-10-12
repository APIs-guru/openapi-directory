# ListImportJobsResponse

Response message for KeyManagementService.ListImportJobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**import_jobs** | [**List[ImportJob]**](ImportJob.md) | The list of ImportJobs. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass this value in ListImportJobsRequest.page_token to retrieve the next page of results. | [optional] 
**total_size** | **int** | The total number of ImportJobs that matched the query. | [optional] 

## Example

```python
from openapi_client.models.list_import_jobs_response import ListImportJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListImportJobsResponse from a JSON string
list_import_jobs_response_instance = ListImportJobsResponse.from_json(json)
# print the JSON string representation of the object
print(ListImportJobsResponse.to_json())

# convert the object into a dict
list_import_jobs_response_dict = list_import_jobs_response_instance.to_dict()
# create an instance of ListImportJobsResponse from a dict
list_import_jobs_response_from_dict = ListImportJobsResponse.from_dict(list_import_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


