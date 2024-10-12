# GuaranteedFixedPriceTerms

Terms for Programmatic Guaranteed Deals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_prices** | [**List[PricePerBuyer]**](PricePerBuyer.md) | Fixed price for the specified buyer. | [optional] 
**guaranteed_impressions** | **str** | Guaranteed impressions as a percentage. This is the percentage of guaranteed looks that the buyer is guaranteeing to buy. | [optional] 
**guaranteed_looks** | **str** | Count of guaranteed looks. Required for deal, optional for product. For CPD deals, buyer changes to guaranteed_looks will be ignored. | [optional] 
**impression_cap** | **str** | The lifetime impression cap for CPM sponsorship deals. The deal will stop serving when the cap is reached. | [optional] 
**minimum_daily_looks** | **str** | Daily minimum looks for CPD deal types. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks. | [optional] 
**percent_share_of_voice** | **str** | For sponsorship deals, this is the percentage of the seller&#39;s eligible impressions that the deal will serve until the cap is reached. | [optional] 
**reservation_type** | **str** | The reservation type for a Programmatic Guaranteed deal. This indicates whether the number of impressions is fixed, or a percent of available impressions. If not specified, the default reservation type is STANDARD. | [optional] 

## Example

```python
from openapi_client.models.guaranteed_fixed_price_terms import GuaranteedFixedPriceTerms

# TODO update the JSON string below
json = "{}"
# create an instance of GuaranteedFixedPriceTerms from a JSON string
guaranteed_fixed_price_terms_instance = GuaranteedFixedPriceTerms.from_json(json)
# print the JSON string representation of the object
print(GuaranteedFixedPriceTerms.to_json())

# convert the object into a dict
guaranteed_fixed_price_terms_dict = guaranteed_fixed_price_terms_instance.to_dict()
# create an instance of GuaranteedFixedPriceTerms from a dict
guaranteed_fixed_price_terms_from_dict = GuaranteedFixedPriceTerms.from_dict(guaranteed_fixed_price_terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


