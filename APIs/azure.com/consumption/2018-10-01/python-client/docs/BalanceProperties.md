# BalanceProperties

The properties of the balance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjustment_details** | [**List[BalancePropertiesAdjustmentDetailsInner]**](BalancePropertiesAdjustmentDetailsInner.md) | List of Adjustments (Promo credit, SIE credit etc.). | [optional] [readonly] 
**adjustments** | **float** | Total adjustment amount. | [optional] [readonly] 
**azure_marketplace_service_charges** | **float** | Total charges for Azure Marketplace. | [optional] [readonly] 
**beginning_balance** | **float** | The beginning balance for the billing period. | [optional] [readonly] 
**billing_frequency** | **str** | The billing frequency. | [optional] 
**charges_billed_separately** | **float** | Charges Billed separately. | [optional] [readonly] 
**currency** | **str** | The ISO currency in which the meter is charged, for example, USD. | [optional] [readonly] 
**ending_balance** | **float** | The ending balance for the billing period (for open periods this will be updated daily). | [optional] [readonly] 
**new_purchases** | **float** | Total new purchase amount. | [optional] [readonly] 
**new_purchases_details** | [**List[BalancePropertiesNewPurchasesDetailsInner]**](BalancePropertiesNewPurchasesDetailsInner.md) | List of new purchases. | [optional] [readonly] 
**price_hidden** | **bool** | Price is hidden or not. | [optional] [readonly] 
**service_overage** | **float** | Overage for Azure services. | [optional] [readonly] 
**total_overage** | **float** | serviceOverage + chargesBilledSeparately. | [optional] [readonly] 
**total_usage** | **float** | Azure service commitment + total Overage. | [optional] [readonly] 
**utilized** | **float** | Total Commitment usage. | [optional] [readonly] 

## Example

```python
from openapi_client.models.balance_properties import BalanceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BalanceProperties from a JSON string
balance_properties_instance = BalanceProperties.from_json(json)
# print the JSON string representation of the object
print(BalanceProperties.to_json())

# convert the object into a dict
balance_properties_dict = balance_properties_instance.to_dict()
# create an instance of BalanceProperties from a dict
balance_properties_from_dict = BalanceProperties.from_dict(balance_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


