# PreferredDealTerms

Pricing terms for Preferred Deals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_price** | [**Price**](Price.md) |  | [optional] 

## Example

```python
from openapi_client.models.preferred_deal_terms import PreferredDealTerms

# TODO update the JSON string below
json = "{}"
# create an instance of PreferredDealTerms from a JSON string
preferred_deal_terms_instance = PreferredDealTerms.from_json(json)
# print the JSON string representation of the object
print(PreferredDealTerms.to_json())

# convert the object into a dict
preferred_deal_terms_dict = preferred_deal_terms_instance.to_dict()
# create an instance of PreferredDealTerms from a dict
preferred_deal_terms_from_dict = PreferredDealTerms.from_dict(preferred_deal_terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


