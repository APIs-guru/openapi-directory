# DealTermsGuaranteedFixedPriceTerms


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_info** | [**DealTermsGuaranteedFixedPriceTermsBillingInfo**](DealTermsGuaranteedFixedPriceTermsBillingInfo.md) |  | [optional] 
**fixed_prices** | [**List[PricePerBuyer]**](PricePerBuyer.md) | Fixed price for the specified buyer. | [optional] 
**guaranteed_impressions** | **str** | Guaranteed impressions as a percentage. This is the percentage of guaranteed looks that the buyer is guaranteeing to buy. | [optional] 
**guaranteed_looks** | **str** | Count of guaranteed looks. Required for deal, optional for product. For CPD deals, buyer changes to guaranteed_looks will be ignored. | [optional] 
**minimum_daily_looks** | **str** | Count of minimum daily looks for a CPD deal. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks. | [optional] 

## Example

```python
from openapi_client.models.deal_terms_guaranteed_fixed_price_terms import DealTermsGuaranteedFixedPriceTerms

# TODO update the JSON string below
json = "{}"
# create an instance of DealTermsGuaranteedFixedPriceTerms from a JSON string
deal_terms_guaranteed_fixed_price_terms_instance = DealTermsGuaranteedFixedPriceTerms.from_json(json)
# print the JSON string representation of the object
print(DealTermsGuaranteedFixedPriceTerms.to_json())

# convert the object into a dict
deal_terms_guaranteed_fixed_price_terms_dict = deal_terms_guaranteed_fixed_price_terms_instance.to_dict()
# create an instance of DealTermsGuaranteedFixedPriceTerms from a dict
deal_terms_guaranteed_fixed_price_terms_from_dict = DealTermsGuaranteedFixedPriceTerms.from_dict(deal_terms_guaranteed_fixed_price_terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


