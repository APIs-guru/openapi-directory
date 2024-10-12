# BlobServiceSettings

Blob service settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_svc_container_gc_interval** | **int** | The interval, in seconds, of container garbage collection. | [optional] [readonly] 
**blob_svc_shallow_gc_interval** | **int** | The interval ,in seconds, of shallow garbage collection. | [optional] [readonly] 
**blob_svc_stream_map_min_container_occupancy_percent** | **int** | The minimal container occupancy percent for stream mapping. | [optional] [readonly] 
**front_end_http_listen_port** | **int** | The HTTP port of the storage service front end. | [optional] 
**front_end_https_listen_port** | **int** | The HTTPs port of the storage service front end. | [optional] 
**front_end_callback_threads_count** | **int** | Front end callback threads count. | [optional] 
**front_end_cpu_based_keep_alive_throttling_cpu_monitor_interval_in_seconds** | **int** | Interval (in second) of CPU monitor for front end CPU based keep-alive throttling. | [optional] 
**front_end_cpu_based_keep_alive_throttling_enabled** | **bool** | Switch of front end CPU based keep-alive throttling. | [optional] 
**front_end_cpu_based_keep_alive_throttling_percent_cpu_threshold** | **float** | Threshold (% percentage) of front end CPU based keep-alive throttling. | [optional] 
**front_end_cpu_based_keep_alive_throttling_percent_requests_to_throttle** | **float** | Threshold (% percentage) of requests to throttle in front end CPU based keep-alive throttling. | [optional] 
**front_end_max_milliseconds_between_memory_samples** | **int** | Maximum interval (in millisecond) between memory samples of front end. | [optional] 
**front_end_memory_throttle_threshold_settings** | **str** | Front end memory throttle threshold settings. | [optional] 
**front_end_memory_throttling_enabled** | **bool** | Switch of front end memory throttling. | [optional] 
**front_end_min_thread_pool_threads** | **int** | Front end minimum number of threads in thread pool. | [optional] 
**front_end_thread_pool_based_keep_alive_io_completion_threshold** | **int** | Threshold of front end thread pool based keep-alive IO completion. | [optional] 
**front_end_thread_pool_based_keep_alive_monitor_interval_in_seconds** | **int** | Monitor interval (in seconds) of front end thread pool based keep-alive monitor. | [optional] 
**front_end_thread_pool_based_keep_alive_percentage** | **float** | Percentage (%) of front end thread pool based keep-alive. | [optional] 
**front_end_thread_pool_based_keep_alive_worker_thread_threshold** | **int** | Threshold of front end thread pool based keep-alive worker thread. | [optional] 
**front_end_use_sla_time_in_availability** | **bool** | Switch of whether front end uses SLA time in availability. | [optional] 

## Example

```python
from openapi_client.models.blob_service_settings import BlobServiceSettings

# TODO update the JSON string below
json = "{}"
# create an instance of BlobServiceSettings from a JSON string
blob_service_settings_instance = BlobServiceSettings.from_json(json)
# print the JSON string representation of the object
print(BlobServiceSettings.to_json())

# convert the object into a dict
blob_service_settings_dict = blob_service_settings_instance.to_dict()
# create an instance of BlobServiceSettings from a dict
blob_service_settings_from_dict = BlobServiceSettings.from_dict(blob_service_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


