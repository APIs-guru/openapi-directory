# RestartDeployedCodePackageDescription

Defines description for restarting a deployed code package on Service Fabric node. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_package_instance_id** | **str** | The instance id for current running entry point. For a code package setup entry point (if specified) runs first and after it finishes main entry point is started. Each time entry point executable is run, its instance id will change. | 
**code_package_name** | **str** | The name of the code package defined in the service manifest. | 
**service_manifest_name** | **str** | The name of the service manifest. | 
**service_package_activation_id** | **str** | The ActivationId of a deployed service package. If ServicePackageActivationMode specified at the time of creating the service is &#39;SharedProcess&#39; (or if it is not specified, in which case it defaults to &#39;SharedProcess&#39;), then value of ServicePackageActivationId is always an empty string.  | [optional] 

## Example

```python
from openapi_client.models.restart_deployed_code_package_description import RestartDeployedCodePackageDescription

# TODO update the JSON string below
json = "{}"
# create an instance of RestartDeployedCodePackageDescription from a JSON string
restart_deployed_code_package_description_instance = RestartDeployedCodePackageDescription.from_json(json)
# print the JSON string representation of the object
print(RestartDeployedCodePackageDescription.to_json())

# convert the object into a dict
restart_deployed_code_package_description_dict = restart_deployed_code_package_description_instance.to_dict()
# create an instance of RestartDeployedCodePackageDescription from a dict
restart_deployed_code_package_description_from_dict = RestartDeployedCodePackageDescription.from_dict(restart_deployed_code_package_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


