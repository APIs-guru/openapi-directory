# EbayCollectedCharges

This type contains the breakdown of costs that are collected by eBay from the buyer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ebay_shipping** | [**Amount**](Amount.md) |  | [optional] 

## Example

```python
from openapi_client.models.ebay_collected_charges import EbayCollectedCharges

# TODO update the JSON string below
json = "{}"
# create an instance of EbayCollectedCharges from a JSON string
ebay_collected_charges_instance = EbayCollectedCharges.from_json(json)
# print the JSON string representation of the object
print(EbayCollectedCharges.to_json())

# convert the object into a dict
ebay_collected_charges_dict = ebay_collected_charges_instance.to_dict()
# create an instance of EbayCollectedCharges from a dict
ebay_collected_charges_from_dict = EbayCollectedCharges.from_dict(ebay_collected_charges_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


