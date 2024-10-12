# ServiceContext

Describes a running service that sends errors. Its version changes over time and multiple versions can run in parallel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_type** | **str** | Type of the MonitoredResource. List of possible values: https://cloud.google.com/monitoring/api/resources Value is set automatically for incoming errors and must not be set when reporting errors. | [optional] 
**service** | **str** | An identifier of the service, such as the name of the executable, job, or Google App Engine service name. This field is expected to have a low number of values that are relatively stable over time, as opposed to &#x60;version&#x60;, which can be changed whenever new code is deployed. Contains the service name for error reports extracted from Google App Engine logs or &#x60;default&#x60; if the App Engine default service is used. | [optional] 
**version** | **str** | Represents the source code version that the developer provided, which could represent a version label or a Git SHA-1 hash, for example. For App Engine standard environment, the version is set to the version of the app. | [optional] 

## Example

```python
from openapi_client.models.service_context import ServiceContext

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceContext from a JSON string
service_context_instance = ServiceContext.from_json(json)
# print the JSON string representation of the object
print(ServiceContext.to_json())

# convert the object into a dict
service_context_dict = service_context_instance.to_dict()
# create an instance of ServiceContext from a dict
service_context_from_dict = ServiceContext.from_dict(service_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


