# AzureResourceSku

Azure resource SKU definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | [**AzureCapacity**](AzureCapacity.md) |  | [optional] 
**resource_type** | **str** | Resource Namespace and Type. | [optional] 
**sku** | [**AzureSku**](AzureSku.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_resource_sku import AzureResourceSku

# TODO update the JSON string below
json = "{}"
# create an instance of AzureResourceSku from a JSON string
azure_resource_sku_instance = AzureResourceSku.from_json(json)
# print the JSON string representation of the object
print(AzureResourceSku.to_json())

# convert the object into a dict
azure_resource_sku_dict = azure_resource_sku_instance.to_dict()
# create an instance of AzureResourceSku from a dict
azure_resource_sku_from_dict = AzureResourceSku.from_dict(azure_resource_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


