# EbayFulfillmentProgram

This type is used to provide details about an order line item being fulfilled by eBay or an eBay fulfillment partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fulfilled_by** | **str** | The value returned in this field indicates the party that is handling fulfillment of the order line item. &lt;br&gt;&lt;br&gt;Valid value: &lt;code&gt;EBAY&lt;/code&gt; | [optional] 

## Example

```python
from openapi_client.models.ebay_fulfillment_program import EbayFulfillmentProgram

# TODO update the JSON string below
json = "{}"
# create an instance of EbayFulfillmentProgram from a JSON string
ebay_fulfillment_program_instance = EbayFulfillmentProgram.from_json(json)
# print the JSON string representation of the object
print(EbayFulfillmentProgram.to_json())

# convert the object into a dict
ebay_fulfillment_program_dict = ebay_fulfillment_program_instance.to_dict()
# create an instance of EbayFulfillmentProgram from a dict
ebay_fulfillment_program_from_dict = EbayFulfillmentProgram.from_dict(ebay_fulfillment_program_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


