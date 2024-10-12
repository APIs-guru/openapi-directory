# GoogleCloudDataplexV1TaskExecutionStatus

Status of the task execution (e.g. Jobs).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latest_job** | [**GoogleCloudDataplexV1Job**](GoogleCloudDataplexV1Job.md) |  | [optional] 
**update_time** | **str** | Output only. Last update time of the status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_task_execution_status import GoogleCloudDataplexV1TaskExecutionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1TaskExecutionStatus from a JSON string
google_cloud_dataplex_v1_task_execution_status_instance = GoogleCloudDataplexV1TaskExecutionStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1TaskExecutionStatus.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_task_execution_status_dict = google_cloud_dataplex_v1_task_execution_status_instance.to_dict()
# create an instance of GoogleCloudDataplexV1TaskExecutionStatus from a dict
google_cloud_dataplex_v1_task_execution_status_from_dict = GoogleCloudDataplexV1TaskExecutionStatus.from_dict(google_cloud_dataplex_v1_task_execution_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


