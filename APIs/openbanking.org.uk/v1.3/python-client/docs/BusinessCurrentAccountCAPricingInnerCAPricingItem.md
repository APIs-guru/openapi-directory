# BusinessCurrentAccountCAPricingInnerCAPricingItem

Card Pricing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_of_change** | **str** | Date of the change if it refers to future terms | [optional] 
**exchange_rate_adjustment** | **str** | The margin added, by certain card issuers, to the scheme rate in order to arrive at the exchange rate qouted as the reference exchange rate to the cardholder | [optional] 
**length_promotional_in_days** | **int** | Describes the length if only a duration is given instead of a date | [optional] 
**start_promotion_or_future_terms** | **str** | Describes the start date | [optional] 
**stop_promotion_or_future_terms** | **str** | Describes the end date | [optional] 

## Example

```python
from openapi_client.models.business_current_account_ca_pricing_inner_ca_pricing_item import BusinessCurrentAccountCAPricingInnerCAPricingItem

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountCAPricingInnerCAPricingItem from a JSON string
business_current_account_ca_pricing_inner_ca_pricing_item_instance = BusinessCurrentAccountCAPricingInnerCAPricingItem.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountCAPricingInnerCAPricingItem.to_json())

# convert the object into a dict
business_current_account_ca_pricing_inner_ca_pricing_item_dict = business_current_account_ca_pricing_inner_ca_pricing_item_instance.to_dict()
# create an instance of BusinessCurrentAccountCAPricingInnerCAPricingItem from a dict
business_current_account_ca_pricing_inner_ca_pricing_item_from_dict = BusinessCurrentAccountCAPricingInnerCAPricingItem.from_dict(business_current_account_ca_pricing_inner_ca_pricing_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


