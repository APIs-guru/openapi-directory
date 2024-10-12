# EbayShipping

This type contains information about the management of the shipping for the order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipping_label_provided_by** | **str** | This field contains the shipping label provider. If &lt;code&gt;EBAY&lt;/code&gt;, this order is managed by eBay shipping and a free shipping label by eBay is downloadable by the seller via the eBay website. | [optional] 

## Example

```python
from openapi_client.models.ebay_shipping import EbayShipping

# TODO update the JSON string below
json = "{}"
# create an instance of EbayShipping from a JSON string
ebay_shipping_instance = EbayShipping.from_json(json)
# print the JSON string representation of the object
print(EbayShipping.to_json())

# convert the object into a dict
ebay_shipping_dict = ebay_shipping_instance.to_dict()
# create an instance of EbayShipping from a dict
ebay_shipping_from_dict = EbayShipping.from_dict(ebay_shipping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


