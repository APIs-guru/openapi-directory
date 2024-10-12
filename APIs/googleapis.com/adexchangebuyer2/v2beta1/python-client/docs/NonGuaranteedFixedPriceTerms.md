# NonGuaranteedFixedPriceTerms

Terms for Preferred Deals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_prices** | [**List[PricePerBuyer]**](PricePerBuyer.md) | Fixed price for the specified buyer. | [optional] 

## Example

```python
from openapi_client.models.non_guaranteed_fixed_price_terms import NonGuaranteedFixedPriceTerms

# TODO update the JSON string below
json = "{}"
# create an instance of NonGuaranteedFixedPriceTerms from a JSON string
non_guaranteed_fixed_price_terms_instance = NonGuaranteedFixedPriceTerms.from_json(json)
# print the JSON string representation of the object
print(NonGuaranteedFixedPriceTerms.to_json())

# convert the object into a dict
non_guaranteed_fixed_price_terms_dict = non_guaranteed_fixed_price_terms_instance.to_dict()
# create an instance of NonGuaranteedFixedPriceTerms from a dict
non_guaranteed_fixed_price_terms_from_dict = NonGuaranteedFixedPriceTerms.from_dict(non_guaranteed_fixed_price_terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


