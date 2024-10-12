# AzureVMResourceFeatureSupportResponse

Response for feature support requests for Azure IaasVm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**support_status** | **str** | Support status of feature | [optional] 

## Example

```python
from openapi_client.models.azure_vm_resource_feature_support_response import AzureVMResourceFeatureSupportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AzureVMResourceFeatureSupportResponse from a JSON string
azure_vm_resource_feature_support_response_instance = AzureVMResourceFeatureSupportResponse.from_json(json)
# print the JSON string representation of the object
print(AzureVMResourceFeatureSupportResponse.to_json())

# convert the object into a dict
azure_vm_resource_feature_support_response_dict = azure_vm_resource_feature_support_response_instance.to_dict()
# create an instance of AzureVMResourceFeatureSupportResponse from a dict
azure_vm_resource_feature_support_response_from_dict = AzureVMResourceFeatureSupportResponse.from_dict(azure_vm_resource_feature_support_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


