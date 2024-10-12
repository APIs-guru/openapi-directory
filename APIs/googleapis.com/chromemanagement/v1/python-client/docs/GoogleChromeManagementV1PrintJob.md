# GoogleChromeManagementV1PrintJob

Represents a request to print a document that has been submitted to a printer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color_mode** | **str** | Color mode. | [optional] 
**complete_time** | **str** | Print job completion timestamp. | [optional] 
**copy_count** | **int** | Number of copies. | [optional] 
**create_time** | **str** | Print job creation timestamp. | [optional] 
**document_page_count** | **int** | Number of pages in the document. | [optional] 
**duplex_mode** | **str** | Duplex mode. | [optional] 
**id** | **str** | Unique ID of the print job. | [optional] 
**printer** | **str** | Name of the printer used for printing. | [optional] 
**printer_id** | **str** | API ID of the printer used for printing. | [optional] 
**state** | **str** | The final state of the job. | [optional] 
**title** | **str** | The title of the document. | [optional] 
**user_email** | **str** | The primary e-mail address of the user who submitted the print job. | [optional] 
**user_id** | **str** | The unique Directory API ID of the user who submitted the print job. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_print_job import GoogleChromeManagementV1PrintJob

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1PrintJob from a JSON string
google_chrome_management_v1_print_job_instance = GoogleChromeManagementV1PrintJob.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1PrintJob.to_json())

# convert the object into a dict
google_chrome_management_v1_print_job_dict = google_chrome_management_v1_print_job_instance.to_dict()
# create an instance of GoogleChromeManagementV1PrintJob from a dict
google_chrome_management_v1_print_job_from_dict = GoogleChromeManagementV1PrintJob.from_dict(google_chrome_management_v1_print_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


