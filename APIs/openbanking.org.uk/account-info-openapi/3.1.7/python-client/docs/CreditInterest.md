# CreditInterest

Details about the interest that may be payable to the BCA account holders

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tier_band_set** | [**List[TierBandSetInner]**](TierBandSetInner.md) | The group of tiers or bands for which credit interest can be applied. | 

## Example

```python
from openapi_client.models.credit_interest import CreditInterest

# TODO update the JSON string below
json = "{}"
# create an instance of CreditInterest from a JSON string
credit_interest_instance = CreditInterest.from_json(json)
# print the JSON string representation of the object
print(CreditInterest.to_json())

# convert the object into a dict
credit_interest_dict = credit_interest_instance.to_dict()
# create an instance of CreditInterest from a dict
credit_interest_from_dict = CreditInterest.from_dict(credit_interest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


