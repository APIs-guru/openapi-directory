# PricingProperties

Pricing properties for the relevant scope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free_trial_remaining_time** | **str** | The duration left for the subscriptions free trial period - in ISO 8601 format (e.g. P3Y6M4DT12H30M5S). | [optional] [readonly] 
**pricing_tier** | **str** | The pricing tier value. Azure Security Center is provided in two pricing tiers: free and standard, with the standard tier available with a trial period. The standard tier offers advanced security capabilities, while the free tier offers basic security features. | 

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


