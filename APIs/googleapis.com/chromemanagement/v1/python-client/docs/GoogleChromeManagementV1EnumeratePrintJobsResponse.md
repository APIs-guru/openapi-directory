# GoogleChromeManagementV1EnumeratePrintJobsResponse

Response containing a list of print jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be used in a subsequent request to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**print_jobs** | [**List[GoogleChromeManagementV1PrintJob]**](GoogleChromeManagementV1PrintJob.md) | List of requested print jobs. | [optional] 
**total_size** | **str** | Total number of print jobs matching request. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_enumerate_print_jobs_response import GoogleChromeManagementV1EnumeratePrintJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1EnumeratePrintJobsResponse from a JSON string
google_chrome_management_v1_enumerate_print_jobs_response_instance = GoogleChromeManagementV1EnumeratePrintJobsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1EnumeratePrintJobsResponse.to_json())

# convert the object into a dict
google_chrome_management_v1_enumerate_print_jobs_response_dict = google_chrome_management_v1_enumerate_print_jobs_response_instance.to_dict()
# create an instance of GoogleChromeManagementV1EnumeratePrintJobsResponse from a dict
google_chrome_management_v1_enumerate_print_jobs_response_from_dict = GoogleChromeManagementV1EnumeratePrintJobsResponse.from_dict(google_chrome_management_v1_enumerate_print_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


