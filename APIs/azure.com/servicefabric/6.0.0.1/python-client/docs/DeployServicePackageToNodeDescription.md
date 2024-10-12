# DeployServicePackageToNodeDescription

Defines description for downloading packages associated with a service manifest to image cache on a Service Fabric node. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type_name** | **str** | The application type name as defined in the application manifest. | 
**application_type_version** | **str** | The version of the application type as defined in the application manifest. | 
**node_name** | **str** | The name of a Service Fabric node. | 
**package_sharing_policy** | [**List[PackageSharingPolicyInfo]**](PackageSharingPolicyInfo.md) | List of package sharing policy information. | [optional] 
**service_manifest_name** | **str** | The name of the service manifest. | 

## Example

```python
from openapi_client.models.deploy_service_package_to_node_description import DeployServicePackageToNodeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of DeployServicePackageToNodeDescription from a JSON string
deploy_service_package_to_node_description_instance = DeployServicePackageToNodeDescription.from_json(json)
# print the JSON string representation of the object
print(DeployServicePackageToNodeDescription.to_json())

# convert the object into a dict
deploy_service_package_to_node_description_dict = deploy_service_package_to_node_description_instance.to_dict()
# create an instance of DeployServicePackageToNodeDescription from a dict
deploy_service_package_to_node_description_from_dict = DeployServicePackageToNodeDescription.from_dict(deploy_service_package_to_node_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


