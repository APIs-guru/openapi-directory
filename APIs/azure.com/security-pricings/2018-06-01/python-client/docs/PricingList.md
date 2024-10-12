# PricingList

List of pricing configurations response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Pricing]**](Pricing.md) | List of pricing configurations | 

## Example

```python
from openapi_client.models.pricing_list import PricingList

# TODO update the JSON string below
json = "{}"
# create an instance of PricingList from a JSON string
pricing_list_instance = PricingList.from_json(json)
# print the JSON string representation of the object
print(PricingList.to_json())

# convert the object into a dict
pricing_list_dict = pricing_list_instance.to_dict()
# create an instance of PricingList from a dict
pricing_list_from_dict = PricingList.from_dict(pricing_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


