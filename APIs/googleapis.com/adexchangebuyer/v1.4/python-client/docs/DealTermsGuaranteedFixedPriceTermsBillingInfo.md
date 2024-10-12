# DealTermsGuaranteedFixedPriceTermsBillingInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_conversion_time_ms** | **str** | The timestamp (in ms since epoch) when the original reservation price for the deal was first converted to DFP currency. This is used to convert the contracted price into buyer&#39;s currency without discrepancy. | [optional] 
**dfp_line_item_id** | **str** | The DFP line item id associated with this deal. For features like CPD, buyers can retrieve the DFP line item for billing reconciliation. | [optional] 
**original_contracted_quantity** | **str** | The original contracted quantity (# impressions) for this deal. To ensure delivery, sometimes the publisher will book the deal with a impression buffer, such that guaranteed_looks is greater than the contracted quantity. However clients are billed using the original contracted quantity. | [optional] 
**price** | [**Price**](Price.md) |  | [optional] 

## Example

```python
from openapi_client.models.deal_terms_guaranteed_fixed_price_terms_billing_info import DealTermsGuaranteedFixedPriceTermsBillingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DealTermsGuaranteedFixedPriceTermsBillingInfo from a JSON string
deal_terms_guaranteed_fixed_price_terms_billing_info_instance = DealTermsGuaranteedFixedPriceTermsBillingInfo.from_json(json)
# print the JSON string representation of the object
print(DealTermsGuaranteedFixedPriceTermsBillingInfo.to_json())

# convert the object into a dict
deal_terms_guaranteed_fixed_price_terms_billing_info_dict = deal_terms_guaranteed_fixed_price_terms_billing_info_instance.to_dict()
# create an instance of DealTermsGuaranteedFixedPriceTermsBillingInfo from a dict
deal_terms_guaranteed_fixed_price_terms_billing_info_from_dict = DealTermsGuaranteedFixedPriceTermsBillingInfo.from_dict(deal_terms_guaranteed_fixed_price_terms_billing_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


