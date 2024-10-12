# StoreStatsConversions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_to_cart** | **float** | Total add to cart conversions. | [optional] 
**checkout** | **float** | Total checkout conversions. | [optional] 
**paid** | **float** | Total paid conversions. | [optional] 

## Example

```python
from openapi_client.models.store_stats_conversions import StoreStatsConversions

# TODO update the JSON string below
json = "{}"
# create an instance of StoreStatsConversions from a JSON string
store_stats_conversions_instance = StoreStatsConversions.from_json(json)
# print the JSON string representation of the object
print(StoreStatsConversions.to_json())

# convert the object into a dict
store_stats_conversions_dict = store_stats_conversions_instance.to_dict()
# create an instance of StoreStatsConversions from a dict
store_stats_conversions_from_dict = StoreStatsConversions.from_dict(store_stats_conversions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


