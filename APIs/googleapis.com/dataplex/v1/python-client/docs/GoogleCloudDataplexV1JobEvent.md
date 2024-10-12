# GoogleCloudDataplexV1JobEvent

The payload associated with Job logs that contains events describing jobs that have run within a Lake.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The time when the job ended running. | [optional] 
**execution_trigger** | **str** | Job execution trigger. | [optional] 
**job_id** | **str** | The unique id identifying the job. | [optional] 
**message** | **str** | The log message. | [optional] 
**retries** | **int** | The number of retries. | [optional] 
**service** | **str** | The service used to execute the job. | [optional] 
**service_job** | **str** | The reference to the job within the service. | [optional] 
**start_time** | **str** | The time when the job started running. | [optional] 
**state** | **str** | The job state on completion. | [optional] 
**type** | **str** | The type of the job. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_job_event import GoogleCloudDataplexV1JobEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1JobEvent from a JSON string
google_cloud_dataplex_v1_job_event_instance = GoogleCloudDataplexV1JobEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1JobEvent.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_job_event_dict = google_cloud_dataplex_v1_job_event_instance.to_dict()
# create an instance of GoogleCloudDataplexV1JobEvent from a dict
google_cloud_dataplex_v1_job_event_from_dict = GoogleCloudDataplexV1JobEvent.from_dict(google_cloud_dataplex_v1_job_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


