# ProductBase

Base object for all product classes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_part_number** | **str** | Billing part number. | [optional] 
**compatibility** | [**DownloadedProductAllOfCompatibility**](DownloadedProductAllOfCompatibility.md) |  | [optional] 
**description** | **str** | Description of the product. | [optional] 
**display_name** | **str** | Name displayed for the product. | [optional] 
**gallery_item_identity** | **str** | Gallery item identity. | [optional] 
**icon_uris** | [**DownloadedProductAllOfIconUris**](DownloadedProductAllOfIconUris.md) |  | [optional] 
**offer** | **str** | Offer name. | [optional] 
**offer_version** | **str** | Offer version. | [optional] 
**payload_length** | **int** | Size in bytes. | [optional] 
**product_kind** | **str** | The kind. E.g. VirtualMachineProductProperties.ProductKind or WebApp, SolutionTemplate. | [optional] 
**product_properties** | [**DownloadedProductAllOfProductProperties**](DownloadedProductAllOfProductProperties.md) |  | [optional] 
**publisher_display_name** | **str** | Name of publisher. | [optional] 
**publisher_identifier** | **str** | Publisher identifier. | [optional] 
**sku** | **str** | Product SKU. | [optional] 

## Example

```python
from openapi_client.models.product_base import ProductBase

# TODO update the JSON string below
json = "{}"
# create an instance of ProductBase from a JSON string
product_base_instance = ProductBase.from_json(json)
# print the JSON string representation of the object
print(ProductBase.to_json())

# convert the object into a dict
product_base_dict = product_base_instance.to_dict()
# create an instance of ProductBase from a dict
product_base_from_dict = ProductBase.from_dict(product_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


