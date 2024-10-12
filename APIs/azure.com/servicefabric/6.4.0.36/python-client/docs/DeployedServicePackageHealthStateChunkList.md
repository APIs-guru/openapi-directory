# DeployedServicePackageHealthStateChunkList

The list of deployed service package health state chunks that respect the input filters in the chunk query. Returned by get cluster health state chunks query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[DeployedServicePackageHealthStateChunk]**](DeployedServicePackageHealthStateChunk.md) | The list of deployed service package health state chunks that respect the input filters in the chunk query. | [optional] 

## Example

```python
from openapi_client.models.deployed_service_package_health_state_chunk_list import DeployedServicePackageHealthStateChunkList

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedServicePackageHealthStateChunkList from a JSON string
deployed_service_package_health_state_chunk_list_instance = DeployedServicePackageHealthStateChunkList.from_json(json)
# print the JSON string representation of the object
print(DeployedServicePackageHealthStateChunkList.to_json())

# convert the object into a dict
deployed_service_package_health_state_chunk_list_dict = deployed_service_package_health_state_chunk_list_instance.to_dict()
# create an instance of DeployedServicePackageHealthStateChunkList from a dict
deployed_service_package_health_state_chunk_list_from_dict = DeployedServicePackageHealthStateChunkList.from_dict(deployed_service_package_health_state_chunk_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


