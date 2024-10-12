# GoogleCloudMlV1ListJobsResponse

Response message for the ListJobs method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobs** | [**List[GoogleCloudMlV1Job]**](GoogleCloudMlV1Job.md) | The list of jobs. | [optional] 
**next_page_token** | **str** | Optional. Pass this token as the &#x60;page_token&#x60; field of the request for a subsequent call. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_list_jobs_response import GoogleCloudMlV1ListJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1ListJobsResponse from a JSON string
google_cloud_ml_v1_list_jobs_response_instance = GoogleCloudMlV1ListJobsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1ListJobsResponse.to_json())

# convert the object into a dict
google_cloud_ml_v1_list_jobs_response_dict = google_cloud_ml_v1_list_jobs_response_instance.to_dict()
# create an instance of GoogleCloudMlV1ListJobsResponse from a dict
google_cloud_ml_v1_list_jobs_response_from_dict = GoogleCloudMlV1ListJobsResponse.from_dict(google_cloud_ml_v1_list_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


