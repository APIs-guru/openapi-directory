# TierRate

The price rate indicating starting usage and its corresponding price.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_usage_amount** | **float** | Usage is priced at this rate only after this amount. Example: start_usage_amount of 10 indicates that the usage will be priced at the unit_price after the first 10 usage_units. | [optional] 
**unit_price** | [**Money**](Money.md) |  | [optional] 

## Example

```python
from openapi_client.models.tier_rate import TierRate

# TODO update the JSON string below
json = "{}"
# create an instance of TierRate from a JSON string
tier_rate_instance = TierRate.from_json(json)
# print the JSON string representation of the object
print(TierRate.to_json())

# convert the object into a dict
tier_rate_dict = tier_rate_instance.to_dict()
# create an instance of TierRate from a dict
tier_rate_from_dict = TierRate.from_dict(tier_rate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


