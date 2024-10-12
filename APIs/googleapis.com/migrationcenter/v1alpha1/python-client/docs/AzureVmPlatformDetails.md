# AzureVmPlatformDetails

Azure VM specific details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the machine in the Azure format. | [optional] 
**machine_type_label** | **str** | Azure platform&#39;s machine type label. | [optional] 
**provisioning_state** | **str** | Azure platform&#39;s provisioning state. | [optional] 

## Example

```python
from openapi_client.models.azure_vm_platform_details import AzureVmPlatformDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AzureVmPlatformDetails from a JSON string
azure_vm_platform_details_instance = AzureVmPlatformDetails.from_json(json)
# print the JSON string representation of the object
print(AzureVmPlatformDetails.to_json())

# convert the object into a dict
azure_vm_platform_details_dict = azure_vm_platform_details_instance.to_dict()
# create an instance of AzureVmPlatformDetails from a dict
azure_vm_platform_details_from_dict = AzureVmPlatformDetails.from_dict(azure_vm_platform_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


