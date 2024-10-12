# AzureVMResourceFeatureSupportRequest

AzureResource(IaaS VM) Specific feature support request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vm_size** | **str** | Size of the resource: VM size(A/D series etc) in case of IaasVM | [optional] 
**vm_sku** | **str** | SKUs (Premium/Managed etc) in case of IaasVM | [optional] 

## Example

```python
from openapi_client.models.azure_vm_resource_feature_support_request import AzureVMResourceFeatureSupportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AzureVMResourceFeatureSupportRequest from a JSON string
azure_vm_resource_feature_support_request_instance = AzureVMResourceFeatureSupportRequest.from_json(json)
# print the JSON string representation of the object
print(AzureVMResourceFeatureSupportRequest.to_json())

# convert the object into a dict
azure_vm_resource_feature_support_request_dict = azure_vm_resource_feature_support_request_instance.to_dict()
# create an instance of AzureVMResourceFeatureSupportRequest from a dict
azure_vm_resource_feature_support_request_from_dict = AzureVMResourceFeatureSupportRequest.from_dict(azure_vm_resource_feature_support_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


