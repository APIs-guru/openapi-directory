# DeployedCodePackageInfo

Information about code package deployed on a Service Fabric node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_isolation_mode** | [**HostIsolationMode**](HostIsolationMode.md) |  | [optional] 
**host_type** | [**HostType**](HostType.md) |  | [optional] 
**main_entry_point** | [**CodePackageEntryPoint**](CodePackageEntryPoint.md) |  | [optional] 
**name** | **str** | The name of the code package defined in the service manifest. | [optional] 
**run_frequency_interval** | **str** | The interval at which code package is run. This is used for periodic code package. | [optional] 
**service_manifest_name** | **str** | The name of the service manifest. | [optional] 
**service_package_activation_id** | **str** | The ActivationId of a deployed service package. If ServicePackageActivationMode specified at the time of creating the service is &#39;SharedProcess&#39; (or if it is not specified, in which case it defaults to &#39;SharedProcess&#39;), then value of ServicePackageActivationId is always an empty string. | [optional] 
**setup_entry_point** | [**CodePackageEntryPoint**](CodePackageEntryPoint.md) |  | [optional] 
**status** | [**DeploymentStatus**](DeploymentStatus.md) |  | [optional] 
**version** | **str** | The version of the code package specified in service manifest. | [optional] 

## Example

```python
from openapi_client.models.deployed_code_package_info import DeployedCodePackageInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedCodePackageInfo from a JSON string
deployed_code_package_info_instance = DeployedCodePackageInfo.from_json(json)
# print the JSON string representation of the object
print(DeployedCodePackageInfo.to_json())

# convert the object into a dict
deployed_code_package_info_dict = deployed_code_package_info_instance.to_dict()
# create an instance of DeployedCodePackageInfo from a dict
deployed_code_package_info_from_dict = DeployedCodePackageInfo.from_dict(deployed_code_package_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


