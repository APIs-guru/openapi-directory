# ListImportJobsResponse

A response for listing import jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**import_jobs** | [**List[ImportJob]**](ImportJob.md) | The list of import jobs. | [optional] 
**next_page_token** | **str** | A token identifying a page of results the server should return. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

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


