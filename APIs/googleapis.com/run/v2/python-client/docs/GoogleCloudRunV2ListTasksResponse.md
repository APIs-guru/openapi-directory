# GoogleCloudRunV2ListTasksResponse

Response message containing a list of Tasks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token indicating there are more items than page_size. Use it in the next ListTasks request to continue. | [optional] 
**tasks** | [**List[GoogleCloudRunV2Task]**](GoogleCloudRunV2Task.md) | The resulting list of Tasks. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_list_tasks_response import GoogleCloudRunV2ListTasksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2ListTasksResponse from a JSON string
google_cloud_run_v2_list_tasks_response_instance = GoogleCloudRunV2ListTasksResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2ListTasksResponse.to_json())

# convert the object into a dict
google_cloud_run_v2_list_tasks_response_dict = google_cloud_run_v2_list_tasks_response_instance.to_dict()
# create an instance of GoogleCloudRunV2ListTasksResponse from a dict
google_cloud_run_v2_list_tasks_response_from_dict = GoogleCloudRunV2ListTasksResponse.from_dict(google_cloud_run_v2_list_tasks_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


