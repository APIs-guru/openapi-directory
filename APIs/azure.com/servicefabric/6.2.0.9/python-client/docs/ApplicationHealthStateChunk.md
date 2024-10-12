# ApplicationHealthStateChunk

Represents the health state chunk of a application. The application health state chunk contains the application name, its aggregated health state and any children services and deployed applications that respect the filters in cluster health chunk query description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**application_name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | [optional] 
**application_type_name** | **str** | The application type name as defined in the application manifest. | [optional] 
**deployed_application_health_state_chunks** | [**DeployedApplicationHealthStateChunkList**](DeployedApplicationHealthStateChunkList.md) |  | [optional] 
**service_health_state_chunks** | [**ServiceHealthStateChunkList**](ServiceHealthStateChunkList.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_health_state_chunk import ApplicationHealthStateChunk

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationHealthStateChunk from a JSON string
application_health_state_chunk_instance = ApplicationHealthStateChunk.from_json(json)
# print the JSON string representation of the object
print(ApplicationHealthStateChunk.to_json())

# convert the object into a dict
application_health_state_chunk_dict = application_health_state_chunk_instance.to_dict()
# create an instance of ApplicationHealthStateChunk from a dict
application_health_state_chunk_from_dict = ApplicationHealthStateChunk.from_dict(application_health_state_chunk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


