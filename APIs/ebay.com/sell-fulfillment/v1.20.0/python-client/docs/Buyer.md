# Buyer

This type contains information about the order's buyer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyer_registration_address** | [**ExtendedContact**](ExtendedContact.md) |  | [optional] 
**tax_address** | [**TaxAddress**](TaxAddress.md) |  | [optional] 
**tax_identifier** | [**TaxIdentifier**](TaxIdentifier.md) |  | [optional] 
**username** | **str** | The buyer&#39;s eBay user ID. | [optional] 

## Example

```python
from openapi_client.models.buyer import Buyer

# TODO update the JSON string below
json = "{}"
# create an instance of Buyer from a JSON string
buyer_instance = Buyer.from_json(json)
# print the JSON string representation of the object
print(Buyer.to_json())

# convert the object into a dict
buyer_dict = buyer_instance.to_dict()
# create an instance of Buyer from a dict
buyer_from_dict = Buyer.from_dict(buyer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


