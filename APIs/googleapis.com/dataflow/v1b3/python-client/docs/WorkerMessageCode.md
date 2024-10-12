# WorkerMessageCode

A message code is used to report status and error messages to the service. The message codes are intended to be machine readable. The service will take care of translating these into user understandable messages if necessary. Example use cases: 1. Worker processes reporting successful startup. 2. Worker processes reporting specific errors (e.g. package staging failure).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code is a string intended for consumption by a machine that identifies the type of message being sent. Examples: 1. \&quot;HARNESS_STARTED\&quot; might be used to indicate the worker harness has started. 2. \&quot;GCS_DOWNLOAD_ERROR\&quot; might be used to indicate an error downloading a Cloud Storage file as part of the boot process of one of the worker containers. This is a string and not an enum to make it easy to add new codes without waiting for an API change. | [optional] 
**parameters** | **Dict[str, object]** | Parameters contains specific information about the code. This is a struct to allow parameters of different types. Examples: 1. For a \&quot;HARNESS_STARTED\&quot; message parameters might provide the name of the worker and additional data like timing information. 2. For a \&quot;GCS_DOWNLOAD_ERROR\&quot; parameters might contain fields listing the Cloud Storage objects being downloaded and fields containing errors. In general complex data structures should be avoided. If a worker needs to send a specific and complicated data structure then please consider defining a new proto and adding it to the data oneof in WorkerMessageResponse. Conventions: Parameters should only be used for information that isn&#39;t typically passed as a label. hostname and other worker identifiers should almost always be passed as labels since they will be included on most messages. | [optional] 

## Example

```python
from openapi_client.models.worker_message_code import WorkerMessageCode

# TODO update the JSON string below
json = "{}"
# create an instance of WorkerMessageCode from a JSON string
worker_message_code_instance = WorkerMessageCode.from_json(json)
# print the JSON string representation of the object
print(WorkerMessageCode.to_json())

# convert the object into a dict
worker_message_code_dict = worker_message_code_instance.to_dict()
# create an instance of WorkerMessageCode from a dict
worker_message_code_from_dict = WorkerMessageCode.from_dict(worker_message_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


