# DeployedServicePackageHealth

The health of the deployed service package

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**application_name** | **str** |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) |  | [optional] 
**node_name** | **str** |  | [optional] 
**service_manifest_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.deployed_service_package_health import DeployedServicePackageHealth

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedServicePackageHealth from a JSON string
deployed_service_package_health_instance = DeployedServicePackageHealth.from_json(json)
# print the JSON string representation of the object
print(DeployedServicePackageHealth.to_json())

# convert the object into a dict
deployed_service_package_health_dict = deployed_service_package_health_instance.to_dict()
# create an instance of DeployedServicePackageHealth from a dict
deployed_service_package_health_from_dict = DeployedServicePackageHealth.from_dict(deployed_service_package_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


