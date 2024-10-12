# GoogleCloudDataplexV1ListDataScanJobsResponse

List DataScanJobs response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_scan_jobs** | [**List[GoogleCloudDataplexV1DataScanJob]**](GoogleCloudDataplexV1DataScanJob.md) | DataScanJobs (BASIC view only) under a given dataScan. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_list_data_scan_jobs_response import GoogleCloudDataplexV1ListDataScanJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ListDataScanJobsResponse from a JSON string
google_cloud_dataplex_v1_list_data_scan_jobs_response_instance = GoogleCloudDataplexV1ListDataScanJobsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ListDataScanJobsResponse.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_list_data_scan_jobs_response_dict = google_cloud_dataplex_v1_list_data_scan_jobs_response_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ListDataScanJobsResponse from a dict
google_cloud_dataplex_v1_list_data_scan_jobs_response_from_dict = GoogleCloudDataplexV1ListDataScanJobsResponse.from_dict(google_cloud_dataplex_v1_list_data_scan_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


