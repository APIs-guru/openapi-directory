# GoogleFirebaseAppdistroV1alphaDeviceExecution

The results of running an automated test on a particular device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_crash** | [**GoogleFirebaseAppdistroV1alphaAppCrash**](GoogleFirebaseAppdistroV1alphaAppCrash.md) |  | [optional] 
**crawl_graph_uri** | **str** | Output only. A URI to an image of the Robo crawl graph. | [optional] [readonly] 
**device** | [**GoogleFirebaseAppdistroV1alphaTestDevice**](GoogleFirebaseAppdistroV1alphaTestDevice.md) |  | [optional] 
**failed_reason** | **str** | Output only. The reason why the test failed. | [optional] [readonly] 
**inconclusive_reason** | **str** | Output only. The reason why the test was inconclusive. | [optional] [readonly] 
**results_storage_path** | **str** | Output only. The path to a directory in Cloud Storage that will eventually contain the results for this execution. For example, gs://bucket/Nexus5-18-en-portrait. | [optional] [readonly] 
**robo_stats** | [**GoogleFirebaseAppdistroV1alphaRoboStats**](GoogleFirebaseAppdistroV1alphaRoboStats.md) |  | [optional] 
**screenshot_uris** | **List[str]** | Output only. A list of screenshot image URIs taken from the Robo crawl. The file names are numbered by the order in which they were taken. | [optional] [readonly] 
**state** | **str** | Output only. The state of the test. | [optional] [readonly] 
**video_uri** | **str** | Output only. A URI to a video of the test run. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1alpha_device_execution import GoogleFirebaseAppdistroV1alphaDeviceExecution

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1alphaDeviceExecution from a JSON string
google_firebase_appdistro_v1alpha_device_execution_instance = GoogleFirebaseAppdistroV1alphaDeviceExecution.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1alphaDeviceExecution.to_json())

# convert the object into a dict
google_firebase_appdistro_v1alpha_device_execution_dict = google_firebase_appdistro_v1alpha_device_execution_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1alphaDeviceExecution from a dict
google_firebase_appdistro_v1alpha_device_execution_from_dict = GoogleFirebaseAppdistroV1alphaDeviceExecution.from_dict(google_firebase_appdistro_v1alpha_device_execution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


