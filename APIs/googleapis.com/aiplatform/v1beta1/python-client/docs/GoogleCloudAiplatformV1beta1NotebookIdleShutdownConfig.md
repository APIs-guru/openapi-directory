# GoogleCloudAiplatformV1beta1NotebookIdleShutdownConfig

The idle shutdown configuration of NotebookRuntimeTemplate, which contains the idle_timeout as required field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idle_shutdown_disabled** | **bool** | Whether Idle Shutdown is disabled in this NotebookRuntimeTemplate. | [optional] 
**idle_timeout** | **str** | Required. Duration is accurate to the second. In Notebook, Idle Timeout is accurate to minute so the range of idle_timeout (second) is: 10 * 60 ~ 1440 * 60. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_notebook_idle_shutdown_config import GoogleCloudAiplatformV1beta1NotebookIdleShutdownConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1NotebookIdleShutdownConfig from a JSON string
google_cloud_aiplatform_v1beta1_notebook_idle_shutdown_config_instance = GoogleCloudAiplatformV1beta1NotebookIdleShutdownConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1NotebookIdleShutdownConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_notebook_idle_shutdown_config_dict = google_cloud_aiplatform_v1beta1_notebook_idle_shutdown_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1NotebookIdleShutdownConfig from a dict
google_cloud_aiplatform_v1beta1_notebook_idle_shutdown_config_from_dict = GoogleCloudAiplatformV1beta1NotebookIdleShutdownConfig.from_dict(google_cloud_aiplatform_v1beta1_notebook_idle_shutdown_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


