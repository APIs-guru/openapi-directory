# AdditionalProductIdentity

The type that defines the array of product identifiers associated with the item. This container is returned if the seller has associated the eBay Product Identifier (ePID) with the item and in the request <b> fieldgroups</b> is set to <code>PRODUCT</code>.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_identity** | [**List[ProductIdentity]**](ProductIdentity.md) | An array of the product identifier/value pairs for the product associated with the item. This is returned if the seller has associated the eBay Product Identifier (ePID) with the item and the request has fieldgroups set to PRODUCT. The following table shows what is returned, based on the item information provided by the seller, when the fieldgroups set to PRODUCT. ePID Provided Product&amp;nbsp;ID(s) Provided Response No No The AdditionalProductIdentity container is not returned. No Yes The AdditionalProductIdentity container is not returned but the product identifiers specified by the seller are returned in the localizedAspects container. Yes No The AdditionalProductIdentity container is returned listing the product identifiers of the product. Yes Yes The AdditionalProductIdentity container is returned listing all the product identifiers of the product and the product identifiers specified by the seller are returned in the localizedAspects container. | [optional] 

## Example

```python
from openapi_client.models.additional_product_identity import AdditionalProductIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalProductIdentity from a JSON string
additional_product_identity_instance = AdditionalProductIdentity.from_json(json)
# print the JSON string representation of the object
print(AdditionalProductIdentity.to_json())

# convert the object into a dict
additional_product_identity_dict = additional_product_identity_instance.to_dict()
# create an instance of AdditionalProductIdentity from a dict
additional_product_identity_from_dict = AdditionalProductIdentity.from_dict(additional_product_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


