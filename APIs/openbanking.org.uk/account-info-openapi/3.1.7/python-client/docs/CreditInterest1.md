# CreditInterest1

Details about the interest that may be payable to the PCA account holders

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tier_band_set** | [**List[TierBandSetInner1]**](TierBandSetInner1.md) | The group of tiers or bands for which credit interest can be applied. | 

## Example

```python
from openapi_client.models.credit_interest1 import CreditInterest1

# TODO update the JSON string below
json = "{}"
# create an instance of CreditInterest1 from a JSON string
credit_interest1_instance = CreditInterest1.from_json(json)
# print the JSON string representation of the object
print(CreditInterest1.to_json())

# convert the object into a dict
credit_interest1_dict = credit_interest1_instance.to_dict()
# create an instance of CreditInterest1 from a dict
credit_interest1_from_dict = CreditInterest1.from_dict(credit_interest1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


