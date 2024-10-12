# CommercialCreditCardsGet200ResponseDataInnerDetailsCommercialCreditCardItem

Commercial Credit Card Item 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apr_rate** | **str** | Annual Percentage Rate | 
**ability_to_set_individual_limits** | **bool** | The ability to set separate limts on different cards in one account | [optional] 
**access_to_online_data_reporting_tool** | **bool** | Describes whether the account have access to an online tool for reprting on expenditure | 
**allocationof_repayment** | **str** | Allocation rules for repayment | [optional] 
**annual_account_fee_type** | **str** | Details on annual account fee, such as non payable when there is a turnover above a certain sum | [optional] 
**annual_fee_amount** | **str** | Standard fee on the card | 
**balance_transfer_interest_rate_period** | **str** | The period used to define the specific interest rate for balance transfers | [optional] 
**balance_transfer_rate** | **str** | Balance transfer rate | [optional] 
**card_scheme** | **str** | Card Scheme Code | 
**cash_advance_rate** | **str** | Cash advance rate | 
**cash_withdrawals_allowed** | **bool** | Describes whether cash withdrawals are allowed | 
**cashback_percent** | **str** | Percent of cashback on amount spend | [optional] 
**cheque_fee_percent** | **str** | Percentage fee on convenience cheques | [optional] 
**convenience_cheque** | **bool** | Describes whether the card account allow convenience cheques | 
**date_of_change** | **str** | Date of the change if it refers to future terms | [optional] 
**days_interest_free_credit_if_payment_full** | **int** | Describes how many interest free days are given if the card is fully paid at each term | 
**exchange_rate_adjustment** | **str** | The margin added, by certain card issuers, to the scheme rate in order to arrive at the exchange rate qouted as the reference exchange rate to the cardholder | 
**fees_on_cheque** | **str** | Percentage fee on a convenince cheques | [optional] 
**foreign_cash_fee** | **str** | Additional card fee applied to sterling cash withdrawal made abroad | [optional] 
**foreign_cash_fee_rate** | **str** | Additional card fee rate applied to sterling cash withdrawal made abroad | [optional] 
**foreign_purchase_fee** | **str** | Additional card fee applied to sterling retail transactions made abroad | [optional] 
**foreign_purchase_fee_rate** | **str** | Additional card fee rate applied to sterling retail transactions made abroad | [optional] 
**issuing_emergency_cards_fees** | **str** | Amount payable for issuing an emergency card | 
**length_promotional_in_days** | **int** | Describes the length if only a duration is given instead of a date | [optional] 
**maximum_number_of_cards_permitted** | **int** | The maximum numbers of cards per account | [optional] 
**minimum_credit_limit** | **str** | Minimum £500, maximum subject to status | 
**minimum_lending_amount** | **str** | The minimum lending available | [optional] 
**minimum_repayment_amount** | **str** | Minimum repayment amount | [optional] 
**minimum_repayment_percentage** | **str** | Minimum repayment as percentage | [optional] 
**non_sterling_cash_fee** | **str** | An additional fee applied to certain card cash withdrawals. This fee also applies to cash near fees such as gambling | [optional] 
**non_sterling_cash_fee_rate** | **str** | An additional fee rate applied to certain card cash withdrawals. This fee also applies to cash near fees such as gambling | [optional] 
**non_sterling_purchase_fee** | **str** | An additional fee applied to certain card retail transactions | [optional] 
**non_sterling_purchase_fee_rate** | **str** | An additional fee rate applied to certain card retail transactions | [optional] 
**non_sterling_transaction_fee** | **str** | A fee applied to all non-Sterling card transactions | [optional] 
**non_sterling_transaction_fee_rate** | **str** | A fee rate applied to all non-Sterling card transactions | [optional] 
**over_limit_fee** | **str** | Fee applicable if the card was credited over its limit | [optional] 
**payment_days_after_statement** | **int** | How many days after statement is the payment expected | 
**payment_scheme_exchange_fee** | **str** | Any payment network fee applied to some or all non-sterling transactions that the card issuer recover directly from the cardholder | [optional] 
**payment_scheme_exchange_fee_rate** | **str** | Any payment network fee rate applied to some or all non-sterling transactions that the card issuer recover directly from the cardholder | [optional] 
**payment_scheme_exchange_rate** | **str** | The base exchange rate used in settlement of the transaction between issuer and scheme | [optional] 
**purchase_rate** | **str** | Purchase rate | 
**repayment_frequency** | **str** | Repayment frequency | 
**repayment_notes** | **str** | Additional notes | [optional] 
**start_promotion_or_future_terms** | **str** | Describes the start date | [optional] 
**statement_at_account_level** | **bool** | Describes whether there is a statement at account level | 
**statement_at_personal_level** | **bool** | Describes whether there is a statement at card level | 
**stop_promotion_or_future_terms** | **str** | Describes the end date | [optional] 

## Example

```python
from openapi_client.models.commercial_credit_cards_get200_response_data_inner_details_commercial_credit_card_item import CommercialCreditCardsGet200ResponseDataInnerDetailsCommercialCreditCardItem

# TODO update the JSON string below
json = "{}"
# create an instance of CommercialCreditCardsGet200ResponseDataInnerDetailsCommercialCreditCardItem from a JSON string
commercial_credit_cards_get200_response_data_inner_details_commercial_credit_card_item_instance = CommercialCreditCardsGet200ResponseDataInnerDetailsCommercialCreditCardItem.from_json(json)
# print the JSON string representation of the object
print(CommercialCreditCardsGet200ResponseDataInnerDetailsCommercialCreditCardItem.to_json())

# convert the object into a dict
commercial_credit_cards_get200_response_data_inner_details_commercial_credit_card_item_dict = commercial_credit_cards_get200_response_data_inner_details_commercial_credit_card_item_instance.to_dict()
# create an instance of CommercialCreditCardsGet200ResponseDataInnerDetailsCommercialCreditCardItem from a dict
commercial_credit_cards_get200_response_data_inner_details_commercial_credit_card_item_from_dict = CommercialCreditCardsGet200ResponseDataInnerDetailsCommercialCreditCardItem.from_dict(commercial_credit_cards_get200_response_data_inner_details_commercial_credit_card_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


