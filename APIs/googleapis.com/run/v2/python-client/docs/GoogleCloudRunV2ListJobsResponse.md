# GoogleCloudRunV2ListJobsResponse

Response message containing a list of Jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobs** | [**List[GoogleCloudRunV2Job]**](GoogleCloudRunV2Job.md) | The resulting list of Jobs. | [optional] 
**next_page_token** | **str** | A token indicating there are more items than page_size. Use it in the next ListJobs request to continue. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_list_jobs_response import GoogleCloudRunV2ListJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2ListJobsResponse from a JSON string
google_cloud_run_v2_list_jobs_response_instance = GoogleCloudRunV2ListJobsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2ListJobsResponse.to_json())

# convert the object into a dict
google_cloud_run_v2_list_jobs_response_dict = google_cloud_run_v2_list_jobs_response_instance.to_dict()
# create an instance of GoogleCloudRunV2ListJobsResponse from a dict
google_cloud_run_v2_list_jobs_response_from_dict = GoogleCloudRunV2ListJobsResponse.from_dict(google_cloud_run_v2_list_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


