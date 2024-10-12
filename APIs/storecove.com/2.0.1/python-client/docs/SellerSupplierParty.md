# SellerSupplierParty

The party sending the order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**party** | [**SenderParty**](SenderParty.md) |  | 
**public_identifiers** | [**List[PublicIdentifier]**](PublicIdentifier.md) | A list of legal and tax identifiers for this customer. | [optional] 

## Example

```python
from openapi_client.models.seller_supplier_party import SellerSupplierParty

# TODO update the JSON string below
json = "{}"
# create an instance of SellerSupplierParty from a JSON string
seller_supplier_party_instance = SellerSupplierParty.from_json(json)
# print the JSON string representation of the object
print(SellerSupplierParty.to_json())

# convert the object into a dict
seller_supplier_party_dict = seller_supplier_party_instance.to_dict()
# create an instance of SellerSupplierParty from a dict
seller_supplier_party_from_dict = SellerSupplierParty.from_dict(seller_supplier_party_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


