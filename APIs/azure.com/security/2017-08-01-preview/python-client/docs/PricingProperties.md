# PricingProperties

Pricing data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pricing_tier** | **str** | Pricing tier type | 

## Example

```python
from openapi_client.models.pricing_properties import PricingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PricingProperties from a JSON string
pricing_properties_instance = PricingProperties.from_json(json)
# print the JSON string representation of the object
print(PricingProperties.to_json())

# convert the object into a dict
pricing_properties_dict = pricing_properties_instance.to_dict()
# create an instance of PricingProperties from a dict
pricing_properties_from_dict = PricingProperties.from_dict(pricing_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


