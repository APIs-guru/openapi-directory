# ListImageImportJobsResponse

Response message for 'ListImageImportJobs' call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_import_jobs** | [**List[ImageImportJob]**](ImageImportJob.md) | Output only. The list of target response. | [optional] [readonly] 
**next_page_token** | **str** | Output only. A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] [readonly] 
**unreachable** | **List[str]** | Output only. Locations that could not be reached. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_image_import_jobs_response import ListImageImportJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListImageImportJobsResponse from a JSON string
list_image_import_jobs_response_instance = ListImageImportJobsResponse.from_json(json)
# print the JSON string representation of the object
print(ListImageImportJobsResponse.to_json())

# convert the object into a dict
list_image_import_jobs_response_dict = list_image_import_jobs_response_instance.to_dict()
# create an instance of ListImageImportJobsResponse from a dict
list_image_import_jobs_response_from_dict = ListImageImportJobsResponse.from_dict(list_image_import_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


