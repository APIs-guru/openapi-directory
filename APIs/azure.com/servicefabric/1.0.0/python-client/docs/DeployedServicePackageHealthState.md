# DeployedServicePackageHealthState

The state of the deployed service package health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**application_name** | **str** |  | [optional] 
**node_name** | **str** |  | [optional] 
**service_manifest_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.deployed_service_package_health_state import DeployedServicePackageHealthState

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedServicePackageHealthState from a JSON string
deployed_service_package_health_state_instance = DeployedServicePackageHealthState.from_json(json)
# print the JSON string representation of the object
print(DeployedServicePackageHealthState.to_json())

# convert the object into a dict
deployed_service_package_health_state_dict = deployed_service_package_health_state_instance.to_dict()
# create an instance of DeployedServicePackageHealthState from a dict
deployed_service_package_health_state_from_dict = DeployedServicePackageHealthState.from_dict(deployed_service_package_health_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


