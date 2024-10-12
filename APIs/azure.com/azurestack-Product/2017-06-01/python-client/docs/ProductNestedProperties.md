# ProductNestedProperties

Properties portion of the product resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_part_number** | **str** | The part number used for billing purposes. | [optional] 
**compatibility** | [**Compatibility**](Compatibility.md) |  | [optional] 
**description** | **str** | The description of the product. | [optional] 
**display_name** | **str** | The display name of the product. | [optional] 
**gallery_item_identity** | **str** | The identifier of the gallery item corresponding to the product. | [optional] 
**icon_uris** | [**IconUris**](IconUris.md) |  | [optional] 
**legal_terms** | **str** | The legal terms. | [optional] 
**links** | [**List[ProductLink]**](ProductLink.md) | Additional links available for this product. | [optional] 
**offer** | **str** | The offer representing the product. | [optional] 
**offer_version** | **str** | The version of the product offer. | [optional] 
**payload_length** | **int** | The length of product content. | [optional] 
**privacy_policy** | **str** | The privacy policy. | [optional] 
**product_kind** | **str** | The kind of the product (virtualMachine or virtualMachineExtension) | [optional] 
**product_properties** | [**ProductProperties**](ProductProperties.md) |  | [optional] 
**publisher_display_name** | **str** | The user-friendly name of the product publisher. | [optional] 
**publisher_identifier** | **str** | Publisher identifier. | [optional] 
**sku** | **str** | The product SKU. | [optional] 
**vm_extension_type** | **str** | The type of the Virtual Machine Extension. | [optional] 

## Example

```python
from openapi_client.models.product_nested_properties import ProductNestedProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProductNestedProperties from a JSON string
product_nested_properties_instance = ProductNestedProperties.from_json(json)
# print the JSON string representation of the object
print(ProductNestedProperties.to_json())

# convert the object into a dict
product_nested_properties_dict = product_nested_properties_instance.to_dict()
# create an instance of ProductNestedProperties from a dict
product_nested_properties_from_dict = ProductNestedProperties.from_dict(product_nested_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


