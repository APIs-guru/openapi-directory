# AdditionalCapabilities

Enables or disables a capability on the virtual machine or virtual machine scale set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ultra_ssd_enabled** | **bool** | The flag that enables or disables a capability to have one or more managed data disks with UltraSSD_LRS storage account type on the VM or VMSS. Managed disks with storage account type UltraSSD_LRS can be added to a virtual machine or virtual machine scale set only if this property is enabled. | [optional] 

## Example

```python
from openapi_client.models.additional_capabilities import AdditionalCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalCapabilities from a JSON string
additional_capabilities_instance = AdditionalCapabilities.from_json(json)
# print the JSON string representation of the object
print(AdditionalCapabilities.to_json())

# convert the object into a dict
additional_capabilities_dict = additional_capabilities_instance.to_dict()
# create an instance of AdditionalCapabilities from a dict
additional_capabilities_from_dict = AdditionalCapabilities.from_dict(additional_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


