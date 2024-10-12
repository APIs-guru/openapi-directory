# CloudAppliance

The cloud appliance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_vnet_dns_configured** | **bool** | Indicates whether virtual network used is configured with DNS or not. | [optional] 
**is_vnet_express_configured** | **bool** | Indicates whether virtual network used is configured with express route or not. | [optional] 
**model_number** | **str** | The model number. | [optional] 
**name** | **str** | The name. | 
**storage_account_name** | **str** | The name of the storage account. | [optional] 
**storage_account_type** | **str** | The type of the storage account. | [optional] 
**subnet_name** | **str** | The name of the subnet. | [optional] 
**vm_image_name** | **str** | The name of the virtual machine image. | [optional] 
**vm_type** | **str** | The type of the virtual machine. | [optional] 
**vnet_name** | **str** | The name of the virtual network. | [optional] 
**vnet_region** | **str** | The virtual network region. | 

## Example

```python
from openapi_client.models.cloud_appliance import CloudAppliance

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAppliance from a JSON string
cloud_appliance_instance = CloudAppliance.from_json(json)
# print the JSON string representation of the object
print(CloudAppliance.to_json())

# convert the object into a dict
cloud_appliance_dict = cloud_appliance_instance.to_dict()
# create an instance of CloudAppliance from a dict
cloud_appliance_from_dict = CloudAppliance.from_dict(cloud_appliance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


