# MarketplaceDeal

A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyer_private_data** | [**PrivateData**](PrivateData.md) |  | [optional] 
**creation_time_ms** | **str** | The time (ms since epoch) of the deal creation. (readonly) | [optional] 
**creative_pre_approval_policy** | **str** | Specifies the creative pre-approval policy (buyer-readonly) | [optional] 
**creative_safe_frame_compatibility** | **str** | Specifies whether the creative is safeFrame compatible (buyer-readonly) | [optional] 
**deal_id** | **str** | A unique deal-id for the deal (readonly). | [optional] 
**deal_serving_metadata** | [**DealServingMetadata**](DealServingMetadata.md) |  | [optional] 
**delivery_control** | [**DeliveryControl**](DeliveryControl.md) |  | [optional] 
**external_deal_id** | **str** | The external deal id assigned to this deal once the deal is finalized. This is the deal-id that shows up in serving/reporting etc. (readonly) | [optional] 
**flight_end_time_ms** | **str** | Proposed flight end time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable) | [optional] 
**flight_start_time_ms** | **str** | Proposed flight start time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable) | [optional] 
**inventory_description** | **str** | Description for the deal terms. (buyer-readonly) | [optional] 
**is_rfp_template** | **bool** | Indicates whether the current deal is a RFP template. RFP template is created by buyer and not based on seller created products. | [optional] 
**is_setup_complete** | **bool** | True, if the buyside inventory setup is complete for this deal. (readonly, except via OrderSetupCompleted action) | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;adexchangebuyer#marketplaceDeal\&quot;. | [optional] [default to 'adexchangebuyer#marketplaceDeal']
**last_update_time_ms** | **str** | The time (ms since epoch) when the deal was last updated. (readonly) | [optional] 
**makegood_requested_reason** | **str** |  | [optional] 
**name** | **str** | The name of the deal. (updatable) | [optional] 
**product_id** | **str** | The product-id from which this deal was created. (readonly, except on create) | [optional] 
**product_revision_number** | **str** | The revision number of the product that the deal was created from (readonly, except on create) | [optional] 
**programmatic_creative_source** | **str** | Specifies the creative source for programmatic deals, PUBLISHER means creative is provided by seller and ADVERTISR means creative is provided by buyer. (buyer-readonly) | [optional] 
**proposal_id** | **str** |  | [optional] 
**seller_contacts** | [**List[ContactInformation]**](ContactInformation.md) | Optional Seller contact information for the deal (buyer-readonly) | [optional] 
**shared_targetings** | [**List[SharedTargeting]**](SharedTargeting.md) | The shared targeting visible to buyers and sellers. Each shared targeting entity is AND&#39;d together. (updatable) | [optional] 
**syndication_product** | **str** | The syndication product associated with the deal. (readonly, except on create) | [optional] 
**terms** | [**DealTerms**](DealTerms.md) |  | [optional] 
**web_property_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.marketplace_deal import MarketplaceDeal

# TODO update the JSON string below
json = "{}"
# create an instance of MarketplaceDeal from a JSON string
marketplace_deal_instance = MarketplaceDeal.from_json(json)
# print the JSON string representation of the object
print(MarketplaceDeal.to_json())

# convert the object into a dict
marketplace_deal_dict = marketplace_deal_instance.to_dict()
# create an instance of MarketplaceDeal from a dict
marketplace_deal_from_dict = MarketplaceDeal.from_dict(marketplace_deal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


