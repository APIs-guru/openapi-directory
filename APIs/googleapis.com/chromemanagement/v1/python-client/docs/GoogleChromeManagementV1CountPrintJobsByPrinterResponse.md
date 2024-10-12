# GoogleChromeManagementV1CountPrintJobsByPrinterResponse

Response containing a summary printing report for each printer from the specified organizational unit for the requested time interval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pagination token for requesting the next page. | [optional] 
**printer_reports** | [**List[GoogleChromeManagementV1PrinterReport]**](GoogleChromeManagementV1PrinterReport.md) | List of PrinterReports matching request. | [optional] 
**total_size** | **str** | Total number of printers matching request. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_count_print_jobs_by_printer_response import GoogleChromeManagementV1CountPrintJobsByPrinterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1CountPrintJobsByPrinterResponse from a JSON string
google_chrome_management_v1_count_print_jobs_by_printer_response_instance = GoogleChromeManagementV1CountPrintJobsByPrinterResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1CountPrintJobsByPrinterResponse.to_json())

# convert the object into a dict
google_chrome_management_v1_count_print_jobs_by_printer_response_dict = google_chrome_management_v1_count_print_jobs_by_printer_response_instance.to_dict()
# create an instance of GoogleChromeManagementV1CountPrintJobsByPrinterResponse from a dict
google_chrome_management_v1_count_print_jobs_by_printer_response_from_dict = GoogleChromeManagementV1CountPrintJobsByPrinterResponse.from_dict(google_chrome_management_v1_count_print_jobs_by_printer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


