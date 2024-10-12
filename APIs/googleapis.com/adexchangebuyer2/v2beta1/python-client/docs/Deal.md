# Deal

A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_end_time** | **str** | Proposed flight end time of the deal. This will generally be stored in a granularity of a second. A value is not required for Private Auction deals or Preferred Deals. | [optional] 
**available_start_time** | **str** | Optional. Proposed flight start time of the deal. This will generally be stored in the granularity of one second since deal serving starts at seconds boundary. Any time specified with more granularity (for example, in milliseconds) will be truncated towards the start of time in seconds. | [optional] 
**buyer_private_data** | [**PrivateData**](PrivateData.md) |  | [optional] 
**create_product_id** | **str** | The product ID from which this deal was created. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error. | [optional] 
**create_product_revision** | **str** | Optional. Revision number of the product that the deal was created from. If present on create, and the server &#x60;product_revision&#x60; has advanced since the passed-in &#x60;create_product_revision&#x60;, an &#x60;ABORTED&#x60; error will be returned. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error. | [optional] 
**create_time** | **str** | Output only. The time of the deal creation. | [optional] [readonly] 
**creative_pre_approval_policy** | **str** | Output only. Specifies the creative pre-approval policy. | [optional] [readonly] 
**creative_restrictions** | [**CreativeRestrictions**](CreativeRestrictions.md) |  | [optional] 
**creative_safe_frame_compatibility** | **str** | Output only. Specifies whether the creative is safeFrame compatible. | [optional] [readonly] 
**deal_id** | **str** | Output only. A unique deal ID for the deal (server-assigned). | [optional] [readonly] 
**deal_serving_metadata** | [**DealServingMetadata**](DealServingMetadata.md) |  | [optional] 
**deal_terms** | [**DealTerms**](DealTerms.md) |  | [optional] 
**delivery_control** | [**DeliveryControl**](DeliveryControl.md) |  | [optional] 
**description** | **str** | Description for the deal terms. | [optional] 
**display_name** | **str** | The name of the deal. | [optional] 
**external_deal_id** | **str** | Output only. The external deal ID assigned to this deal once the deal is finalized. This is the deal ID that shows up in serving/reporting etc. | [optional] [readonly] 
**is_setup_complete** | **bool** | Output only. True, if the buyside inventory setup is complete for this deal. | [optional] [readonly] 
**programmatic_creative_source** | **str** | Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by buyer. | [optional] [readonly] 
**proposal_id** | **str** | Output only. ID of the proposal that this deal is part of. | [optional] [readonly] 
**seller_contacts** | [**List[ContactInformation]**](ContactInformation.md) | Output only. Seller contact information for the deal. | [optional] [readonly] 
**syndication_product** | **str** | The syndication product associated with the deal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error. | [optional] 
**targeting** | [**MarketplaceTargeting**](MarketplaceTargeting.md) |  | [optional] 
**targeting_criterion** | [**List[TargetingCriteria]**](TargetingCriteria.md) | The shared targeting visible to buyers and sellers. Each shared targeting entity is AND&#39;d together. | [optional] 
**update_time** | **str** | Output only. The time when the deal was last updated. | [optional] [readonly] 
**web_property_code** | **str** | The web property code for the seller copied over from the product. | [optional] 

## Example

```python
from openapi_client.models.deal import Deal

# TODO update the JSON string below
json = "{}"
# create an instance of Deal from a JSON string
deal_instance = Deal.from_json(json)
# print the JSON string representation of the object
print(Deal.to_json())

# convert the object into a dict
deal_dict = deal_instance.to_dict()
# create an instance of Deal from a dict
deal_from_dict = Deal.from_dict(deal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


