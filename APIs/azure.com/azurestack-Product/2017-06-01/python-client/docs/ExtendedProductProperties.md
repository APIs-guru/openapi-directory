# ExtendedProductProperties

Product information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_role** | [**ComputeRole**](ComputeRole.md) |  | [optional] 
**is_system_extension** | **bool** | Specifies if product is a Virtual Machine Extension. | [optional] [readonly] 
**source_blob** | [**Uri**](Uri.md) |  | [optional] 
**support_multiple_extensions** | **bool** | Indicates if specified product supports multiple extensions. | [optional] [readonly] 
**version** | **str** | Specifies product version. | [optional] [readonly] 
**vm_os_type** | [**OperatingSystem**](OperatingSystem.md) |  | [optional] 
**vm_scale_set_enabled** | **bool** | Indicates if virtual machine Scale Set is enabled in the specified product. | [optional] [readonly] 
**data_disk_images** | [**List[DataDiskImage]**](DataDiskImage.md) | List of attached data disks. | [optional] [readonly] 
**os_disk_image** | [**OsDiskImage**](OsDiskImage.md) |  | [optional] 

## Example

```python
from openapi_client.models.extended_product_properties import ExtendedProductProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedProductProperties from a JSON string
extended_product_properties_instance = ExtendedProductProperties.from_json(json)
# print the JSON string representation of the object
print(ExtendedProductProperties.to_json())

# convert the object into a dict
extended_product_properties_dict = extended_product_properties_instance.to_dict()
# create an instance of ExtendedProductProperties from a dict
extended_product_properties_from_dict = ExtendedProductProperties.from_dict(extended_product_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


