# GoogleChromeManagementV1CountPrintJobsByUserResponse

Response containing a summary printing report for each user that has initiated a print job with a printer from the specified organizational unit during the requested time interval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pagination token for requesting the next page. | [optional] 
**total_size** | **str** | Total number of users matching request. | [optional] 
**user_print_reports** | [**List[GoogleChromeManagementV1UserPrintReport]**](GoogleChromeManagementV1UserPrintReport.md) | List of UserPrintReports matching request. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_count_print_jobs_by_user_response import GoogleChromeManagementV1CountPrintJobsByUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1CountPrintJobsByUserResponse from a JSON string
google_chrome_management_v1_count_print_jobs_by_user_response_instance = GoogleChromeManagementV1CountPrintJobsByUserResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1CountPrintJobsByUserResponse.to_json())

# convert the object into a dict
google_chrome_management_v1_count_print_jobs_by_user_response_dict = google_chrome_management_v1_count_print_jobs_by_user_response_instance.to_dict()
# create an instance of GoogleChromeManagementV1CountPrintJobsByUserResponse from a dict
google_chrome_management_v1_count_print_jobs_by_user_response_from_dict = GoogleChromeManagementV1CountPrintJobsByUserResponse.from_dict(google_chrome_management_v1_count_print_jobs_by_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


