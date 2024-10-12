# DownloadedProduct

Properties for aggregate usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gallery_package_blob_sas_uri** | **str** | The URI to the .azpkg file that provides information required for showing product in the gallery. | [optional] [readonly] 
**legal_terms** | **str** | Legal terms for the product. | [optional] 
**links** | **List[object]** | List of product links. | [optional] 
**privacy_policy** | **str** | Privacy policy of the product. | [optional] 
**product_details_properties** | [**ExtendedProductProperties**](ExtendedProductProperties.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] 
**vm_extension_type** | **str** | Extension type of the VM. | [optional] 
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
from openapi_client.models.downloaded_product import DownloadedProduct

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadedProduct from a JSON string
downloaded_product_instance = DownloadedProduct.from_json(json)
# print the JSON string representation of the object
print(DownloadedProduct.to_json())

# convert the object into a dict
downloaded_product_dict = downloaded_product_instance.to_dict()
# create an instance of DownloadedProduct from a dict
downloaded_product_from_dict = DownloadedProduct.from_dict(downloaded_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


