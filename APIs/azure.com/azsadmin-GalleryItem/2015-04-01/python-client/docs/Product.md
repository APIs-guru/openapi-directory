# Product

Represents a product item read from the gallery item package.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name of the product. | [optional] 
**legal_terms** | **str** | Legal terms of the product. | [optional] 
**legal_terms_uri** | **str** | URI to the legal terms of the product. | [optional] 
**offer_details** | [**OfferDetails**](OfferDetails.md) |  | [optional] 
**pricing_details_uri** | **str** | URI to the pricing details of the product. | [optional] 
**privacy_policy** | **str** | Privacy policy of the product. | [optional] 
**privacy_policy_uri** | **str** | URI to the privacy policy of the product. | [optional] 
**publisher_display_name** | **str** | Publisher display name of the product. | [optional] 

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


