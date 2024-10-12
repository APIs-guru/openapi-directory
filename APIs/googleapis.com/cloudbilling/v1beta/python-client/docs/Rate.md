# Rate

A SKU price consisting of tiered rates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tiers** | [**List[RateTier]**](RateTier.md) | The service tiers. | [optional] 
**unit** | **str** | The SKU&#39;s pricing unit. For example, if the tier price is $1 per 1000000 Bytes, then this field will show &#39;By&#39;. The &#x60;start_amount&#x60; field in each tier will be in this unit. | [optional] 
**unit_count** | **float** | The SKU&#39;s count for the pricing unit. For example, if the tier price is $1 per 1000000 Bytes, then this column will show 1000000. | [optional] 

## Example

```python
from openapi_client.models.rate import Rate

# TODO update the JSON string below
json = "{}"
# create an instance of Rate from a JSON string
rate_instance = Rate.from_json(json)
# print the JSON string representation of the object
print(Rate.to_json())

# convert the object into a dict
rate_dict = rate_instance.to_dict()
# create an instance of Rate from a dict
rate_from_dict = Rate.from_dict(rate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


