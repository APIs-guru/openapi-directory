# LoggingServer

Logging server to receive vCenter or ESXi logs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Creation time of this resource. | [optional] [readonly] 
**hostname** | **str** | Required. Fully-qualified domain name (FQDN) or IP Address of the logging server. | [optional] 
**name** | **str** | Output only. The resource name of this logging server. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: &#x60;projects/my-project/locations/us-central1-a/privateClouds/my-cloud/loggingServers/my-logging-server&#x60; | [optional] [readonly] 
**port** | **int** | Required. Port number at which the logging server receives logs. | [optional] 
**protocol** | **str** | Required. Protocol used by vCenter to send logs to a logging server. | [optional] 
**source_type** | **str** | Required. The type of component that produces logs that will be forwarded to this logging server. | [optional] 
**uid** | **str** | Output only. System-generated unique identifier for the resource. | [optional] [readonly] 
**update_time** | **str** | Output only. Last update time of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.logging_server import LoggingServer

# TODO update the JSON string below
json = "{}"
# create an instance of LoggingServer from a JSON string
logging_server_instance = LoggingServer.from_json(json)
# print the JSON string representation of the object
print(LoggingServer.to_json())

# convert the object into a dict
logging_server_dict = logging_server_instance.to_dict()
# create an instance of LoggingServer from a dict
logging_server_from_dict = LoggingServer.from_dict(logging_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


