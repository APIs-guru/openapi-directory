# ListingFinance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**down_payment** | **float** | Down payment for this finance offer | [optional] 
**down_payment_percentage** | **float** | down payment percentage for this finance offer | [optional] 
**estimated_monthly_payment** | **float** | estimated monthly payment for this finance offer | [optional] 
**loan_apr** | **float** | Loan APR for this finance offer | [optional] 
**loan_term** | **int** | Loan term for this finance offer | [optional] 

## Example

```python
from openapi_client.models.listing_finance import ListingFinance

# TODO update the JSON string below
json = "{}"
# create an instance of ListingFinance from a JSON string
listing_finance_instance = ListingFinance.from_json(json)
# print the JSON string representation of the object
print(ListingFinance.to_json())

# convert the object into a dict
listing_finance_dict = listing_finance_instance.to_dict()
# create an instance of ListingFinance from a dict
listing_finance_from_dict = ListingFinance.from_dict(listing_finance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


