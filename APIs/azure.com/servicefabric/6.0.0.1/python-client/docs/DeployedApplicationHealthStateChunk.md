# DeployedApplicationHealthStateChunk

Represents the health state chunk of a deployed application, which contains the node where the application is deployed, the aggregated health state and any deployed service packages that respect the chunk query description filters. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**deployed_service_package_health_state_chunks** | [**DeployedServicePackageHealthStateChunkList**](DeployedServicePackageHealthStateChunkList.md) |  | [optional] 
**node_name** | **str** | The name of node where the application is deployed. | [optional] 

## Example

```python
from openapi_client.models.deployed_application_health_state_chunk import DeployedApplicationHealthStateChunk

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedApplicationHealthStateChunk from a JSON string
deployed_application_health_state_chunk_instance = DeployedApplicationHealthStateChunk.from_json(json)
# print the JSON string representation of the object
print(DeployedApplicationHealthStateChunk.to_json())

# convert the object into a dict
deployed_application_health_state_chunk_dict = deployed_application_health_state_chunk_instance.to_dict()
# create an instance of DeployedApplicationHealthStateChunk from a dict
deployed_application_health_state_chunk_from_dict = DeployedApplicationHealthStateChunk.from_dict(deployed_application_health_state_chunk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


