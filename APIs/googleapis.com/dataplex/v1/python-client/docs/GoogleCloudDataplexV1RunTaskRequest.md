# GoogleCloudDataplexV1RunTaskRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **Dict[str, str]** | Optional. Execution spec arguments. If the map is left empty, the task will run with existing execution spec args from task definition. If the map contains an entry with a new key, the same will be added to existing set of args. If the map contains an entry with an existing arg key in task definition, the task will run with new arg value for that entry. Clearing an existing arg will require arg value to be explicitly set to a hyphen \&quot;-\&quot;. The arg value cannot be empty. | [optional] 
**labels** | **Dict[str, str]** | Optional. User-defined labels for the task. If the map is left empty, the task will run with existing labels from task definition. If the map contains an entry with a new key, the same will be added to existing set of labels. If the map contains an entry with an existing label key in task definition, the task will run with new label value for that entry. Clearing an existing label will require label value to be explicitly set to a hyphen \&quot;-\&quot;. The label value cannot be empty. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_run_task_request import GoogleCloudDataplexV1RunTaskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1RunTaskRequest from a JSON string
google_cloud_dataplex_v1_run_task_request_instance = GoogleCloudDataplexV1RunTaskRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1RunTaskRequest.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_run_task_request_dict = google_cloud_dataplex_v1_run_task_request_instance.to_dict()
# create an instance of GoogleCloudDataplexV1RunTaskRequest from a dict
google_cloud_dataplex_v1_run_task_request_from_dict = GoogleCloudDataplexV1RunTaskRequest.from_dict(google_cloud_dataplex_v1_run_task_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


