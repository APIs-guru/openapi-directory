# IaaSVMContainer

IaaS VM workload-specific container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_group** | **str** | Resource group name of Recovery Services Vault. | [optional] 
**virtual_machine_id** | **str** | Fully qualified ARM url of the virtual machine represented by this Azure IaaS VM container. | [optional] 
**virtual_machine_version** | **str** | Specifies whether the container represents a Classic or an Azure Resource Manager VM. | [optional] 

## Example

```python
from openapi_client.models.iaa_svm_container import IaaSVMContainer

# TODO update the JSON string below
json = "{}"
# create an instance of IaaSVMContainer from a JSON string
iaa_svm_container_instance = IaaSVMContainer.from_json(json)
# print the JSON string representation of the object
print(IaaSVMContainer.to_json())

# convert the object into a dict
iaa_svm_container_dict = iaa_svm_container_instance.to_dict()
# create an instance of IaaSVMContainer from a dict
iaa_svm_container_from_dict = IaaSVMContainer.from_dict(iaa_svm_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


