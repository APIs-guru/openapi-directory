# AzureVmsDetails

AzureVmsDetails describes VMs in Azure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**List[AzureVmDetails]**](AzureVmDetails.md) | The details of the Azure VMs. | [optional] 

## Example

```python
from openapi_client.models.azure_vms_details import AzureVmsDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AzureVmsDetails from a JSON string
azure_vms_details_instance = AzureVmsDetails.from_json(json)
# print the JSON string representation of the object
print(AzureVmsDetails.to_json())

# convert the object into a dict
azure_vms_details_dict = azure_vms_details_instance.to_dict()
# create an instance of AzureVmsDetails from a dict
azure_vms_details_from_dict = AzureVmsDetails.from_dict(azure_vms_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


