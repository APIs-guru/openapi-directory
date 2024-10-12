# DeployedServicePackageInfo

Information about service package deployed on a Service Fabric node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the service manifest. | [optional] 
**service_package_activation_id** | **str** | The ActivationId of a deployed service package. If ServicePackageActivationMode specified at the time of creating the service is &#39;SharedProcess&#39; (or if it is not specified, in which case it defaults to &#39;SharedProcess&#39;), then value of ServicePackageActivationId is always an empty string.  | [optional] 
**status** | [**DeploymentStatus**](DeploymentStatus.md) |  | [optional] 
**version** | **str** | The version of the service package specified in service manifest. | [optional] 

## Example

```python
from openapi_client.models.deployed_service_package_info import DeployedServicePackageInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedServicePackageInfo from a JSON string
deployed_service_package_info_instance = DeployedServicePackageInfo.from_json(json)
# print the JSON string representation of the object
print(DeployedServicePackageInfo.to_json())

# convert the object into a dict
deployed_service_package_info_dict = deployed_service_package_info_instance.to_dict()
# create an instance of DeployedServicePackageInfo from a dict
deployed_service_package_info_from_dict = DeployedServicePackageInfo.from_dict(deployed_service_package_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


