# Product

A product is segment of inventory that a seller wishes to sell. It is associated with certain terms and targeting information which helps buyer know more about the inventory. Each field in a product can have one of the following setting:  (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billed_buyer** | [**Buyer**](Buyer.md) |  | [optional] 
**buyer** | [**Buyer**](Buyer.md) |  | [optional] 
**creation_time_ms** | **str** | Creation time in ms. since epoch (readonly) | [optional] 
**creator_contacts** | [**List[ContactInformation]**](ContactInformation.md) | Optional contact information for the creator of this product. (buyer-readonly) | [optional] 
**creator_role** | **str** | The role that created the offer. Set to BUYER for buyer initiated offers. | [optional] 
**delivery_control** | [**DeliveryControl**](DeliveryControl.md) |  | [optional] 
**flight_end_time_ms** | **str** | The proposed end time for the deal (ms since epoch) (buyer-readonly) | [optional] 
**flight_start_time_ms** | **str** | Inventory availability dates. (times are in ms since epoch) The granularity is generally in the order of seconds. (buyer-readonly) | [optional] 
**has_creator_signed_off** | **bool** | If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false. | [optional] 
**inventory_source** | **str** | What exchange will provide this inventory (readonly, except on create). | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;adexchangebuyer#product\&quot;. | [optional] [default to 'adexchangebuyer#product']
**labels** | [**List[MarketplaceLabel]**](MarketplaceLabel.md) | Optional List of labels for the product (optional, buyer-readonly). | [optional] 
**last_update_time_ms** | **str** | Time of last update in ms. since epoch (readonly) | [optional] 
**legacy_offer_id** | **str** | Optional legacy offer id if this offer is a preferred deal offer. | [optional] 
**marketplace_publisher_profile_id** | **str** | Marketplace publisher profile Id. This Id differs from the regular publisher_profile_id in that 1. This is a new id, the old Id will be deprecated in 2017. 2. This id uniquely identifies a publisher profile by itself. | [optional] 
**name** | **str** | The name for this product as set by the seller. (buyer-readonly) | [optional] 
**private_auction_id** | **str** | Optional private auction id if this offer is a private auction offer. | [optional] 
**product_id** | **str** | The unique id for the product (readonly) | [optional] 
**publisher_profile_id** | **str** | Id of the publisher profile for a given seller. A (seller.account_id, publisher_profile_id) pair uniquely identifies a publisher profile. Buyers can call the PublisherProfiles::List endpoint to get a list of publisher profiles for a given seller. | [optional] 
**publisher_provided_forecast** | [**PublisherProvidedForecast**](PublisherProvidedForecast.md) |  | [optional] 
**revision_number** | **str** | The revision number of the product. (readonly) | [optional] 
**seller** | [**Seller**](Seller.md) |  | [optional] 
**shared_targetings** | [**List[SharedTargeting]**](SharedTargeting.md) | Targeting that is shared between the buyer and the seller. Each targeting criteria has a specified key and for each key there is a list of inclusion value or exclusion values. (buyer-readonly) | [optional] 
**state** | **str** | The state of the product. (buyer-readonly) | [optional] 
**syndication_product** | **str** | The syndication product associated with the deal. (readonly, except on create) | [optional] 
**terms** | [**DealTerms**](DealTerms.md) |  | [optional] 
**web_property_code** | **str** | The web property code for the seller. This field is meant to be copied over as is when creating deals. | [optional] 

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


