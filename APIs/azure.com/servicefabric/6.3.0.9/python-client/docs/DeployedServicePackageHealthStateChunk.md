# DeployedServicePackageHealthStateChunk

Represents the health state chunk of a deployed service package, which contains the service manifest name and the service package aggregated health state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**service_manifest_name** | **str** | The name of the service manifest. | [optional] 
**service_package_activation_id** | **str** | The ActivationId of a deployed service package. If ServicePackageActivationMode specified at the time of creating the service is &#39;SharedProcess&#39; (or if it is not specified, in which case it defaults to &#39;SharedProcess&#39;), then value of ServicePackageActivationId is always an empty string. | [optional] 

## Example

```python
from openapi_client.models.deployed_service_package_health_state_chunk import DeployedServicePackageHealthStateChunk

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedServicePackageHealthStateChunk from a JSON string
deployed_service_package_health_state_chunk_instance = DeployedServicePackageHealthStateChunk.from_json(json)
# print the JSON string representation of the object
print(DeployedServicePackageHealthStateChunk.to_json())

# convert the object into a dict
deployed_service_package_health_state_chunk_dict = deployed_service_package_health_state_chunk_instance.to_dict()
# create an instance of DeployedServicePackageHealthStateChunk from a dict
deployed_service_package_health_state_chunk_from_dict = DeployedServicePackageHealthStateChunk.from_dict(deployed_service_package_health_state_chunk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


