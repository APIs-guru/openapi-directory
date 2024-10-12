# WorkerSettings

Provides data to pass through to the worker harness.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_url** | **str** | The base URL for accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, \&quot;Relative Uniform Resource Locators\&quot;. If not specified, the default value is \&quot;http://www.googleapis.com/\&quot; | [optional] 
**reporting_enabled** | **bool** | Whether to send work progress updates to the service. | [optional] 
**service_path** | **str** | The Cloud Dataflow service path relative to the root URL, for example, \&quot;dataflow/v1b3/projects\&quot;. | [optional] 
**shuffle_service_path** | **str** | The Shuffle service path relative to the root URL, for example, \&quot;shuffle/v1beta1\&quot;. | [optional] 
**temp_storage_prefix** | **str** | The prefix of the resources the system should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object} | [optional] 
**worker_id** | **str** | The ID of the worker running this pipeline. | [optional] 

## Example

```python
from openapi_client.models.worker_settings import WorkerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerSettings from a JSON string
worker_settings_instance = WorkerSettings.from_json(json)
# print the JSON string representation of the object
print(WorkerSettings.to_json())

# convert the object into a dict
worker_settings_dict = worker_settings_instance.to_dict()
# create an instance of WorkerSettings from a dict
worker_settings_from_dict = WorkerSettings.from_dict(worker_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


