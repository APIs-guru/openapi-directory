# DeployedServiceTypeInfo

Information about service type deployed on a node, information such as the status of the service type registration on a node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_package_name** | **str** | The name of the code package defined in the service manifest. | [optional] 
**service_manifest_name** | **str** | The name of the service manifest. | [optional] 
**service_package_activation_id** | **str** | The ActivationId of a deployed service package. If ServicePackageActivationMode specified at the time of creating the service is &#39;SharedProcess&#39; (or if it is not specified, in which case it defaults to &#39;SharedProcess&#39;), then value of ServicePackageActivationId is always an empty string. | [optional] 
**service_type_name** | **str** | Name of the service type as specified in the service manifest. | [optional] 
**status** | [**ServiceTypeRegistrationStatus**](ServiceTypeRegistrationStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.deployed_service_type_info import DeployedServiceTypeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedServiceTypeInfo from a JSON string
deployed_service_type_info_instance = DeployedServiceTypeInfo.from_json(json)
# print the JSON string representation of the object
print(DeployedServiceTypeInfo.to_json())

# convert the object into a dict
deployed_service_type_info_dict = deployed_service_type_info_instance.to_dict()
# create an instance of DeployedServiceTypeInfo from a dict
deployed_service_type_info_from_dict = DeployedServiceTypeInfo.from_dict(deployed_service_type_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


