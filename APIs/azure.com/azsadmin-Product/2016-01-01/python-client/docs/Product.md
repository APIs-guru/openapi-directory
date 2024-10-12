# Product

Properties for a product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legal_terms** | **str** | Legal terms for the product. | [optional] 
**links** | **List[object]** | List of product links. | [optional] 
**privacy_policy** | **str** | Privacy policy of the product. | [optional] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] 
**vm_extension_type** | **str** | Extension type of the VM. | [optional] 
**billing_part_number** | **str** | Billing part number. | [optional] 
**compatibility** | [**ProductAllOfCompatibility**](ProductAllOfCompatibility.md) |  | [optional] 
**description** | **str** | Description of the product. | [optional] 
**display_name** | **str** | Name displayed for the product. | [optional] 
**gallery_item_identity** | **str** | Gallery item identity. | [optional] 
**icon_uris** | [**ProductAllOfIconUris**](ProductAllOfIconUris.md) |  | [optional] 
**offer** | **str** | Offer name. | [optional] 
**offer_version** | **str** | Offer version. | [optional] 
**payload_length** | **int** | Size in bytes. | [optional] 
**product_kind** | **str** | The kind. E.g. VirtualMachineProductProperties.ProductKind or WebApp, SolutionTemplate. | [optional] 
**product_properties** | [**ProductAllOfProductProperties**](ProductAllOfProductProperties.md) |  | [optional] 
**publisher_display_name** | **str** | Name of publisher. | [optional] 
**publisher_identifier** | **str** | Publisher identifier. | [optional] 
**sku** | **str** | Product SKU. | [optional] 

## Example

```python
from openapi_client.models.product import Product

# TODO update the JSON string below
json = "{}"
# create an instance of Product from a JSON string
product_instance = Product.from_json(json)
# print the JSON string representation of the object
print(Product.to_json())

# convert the object into a dict
product_dict = product_instance.to_dict()
# create an instance of Product from a dict
product_from_dict = Product.from_dict(product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


