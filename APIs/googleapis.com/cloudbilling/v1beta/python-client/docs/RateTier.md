# RateTier

Pricing details for a service tier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | [**Money**](Money.md) |  | [optional] 
**start_amount** | **float** | The magnitude of usage in which the tier interval begins. Example: \&quot;From 100 GiBi the price is $1 per byte\&quot; implies &#x60;start_amount&#x60; &#x3D; 100 | [optional] 

## Example

```python
from openapi_client.models.rate_tier import RateTier

# TODO update the JSON string below
json = "{}"
# create an instance of RateTier from a JSON string
rate_tier_instance = RateTier.from_json(json)
# print the JSON string representation of the object
print(RateTier.to_json())

# convert the object into a dict
rate_tier_dict = rate_tier_instance.to_dict()
# create an instance of RateTier from a dict
rate_tier_from_dict = RateTier.from_dict(rate_tier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


