# EbayInternationalShipping

This type is used to provide details about an order line item being managed through eBay International Shipping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returns_managed_by** | **str** | The value returned in this field indicates the party that is responsible for managing returns of the order line item.&lt;br&gt;&lt;br&gt;Valid value: &lt;code&gt;EBAY&lt;/code&gt; | [optional] 

## Example

```python
from openapi_client.models.ebay_international_shipping import EbayInternationalShipping

# TODO update the JSON string below
json = "{}"
# create an instance of EbayInternationalShipping from a JSON string
ebay_international_shipping_instance = EbayInternationalShipping.from_json(json)
# print the JSON string representation of the object
print(EbayInternationalShipping.to_json())

# convert the object into a dict
ebay_international_shipping_dict = ebay_international_shipping_instance.to_dict()
# create an instance of EbayInternationalShipping from a dict
ebay_international_shipping_from_dict = EbayInternationalShipping.from_dict(ebay_international_shipping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


