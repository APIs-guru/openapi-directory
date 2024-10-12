# GoogleCloudRunV2Overrides

RunJob Overrides that contains Execution fields to be overridden.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_overrides** | [**List[GoogleCloudRunV2ContainerOverride]**](GoogleCloudRunV2ContainerOverride.md) | Per container override specification. | [optional] 
**task_count** | **int** | Optional. The desired number of tasks the execution should run. Will replace existing task_count value. | [optional] 
**timeout** | **str** | Duration in seconds the task may be active before the system will actively try to mark it failed and kill associated containers. Will replace existing timeout_seconds value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_overrides import GoogleCloudRunV2Overrides

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2Overrides from a JSON string
google_cloud_run_v2_overrides_instance = GoogleCloudRunV2Overrides.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2Overrides.to_json())

# convert the object into a dict
google_cloud_run_v2_overrides_dict = google_cloud_run_v2_overrides_instance.to_dict()
# create an instance of GoogleCloudRunV2Overrides from a dict
google_cloud_run_v2_overrides_from_dict = GoogleCloudRunV2Overrides.from_dict(google_cloud_run_v2_overrides_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


