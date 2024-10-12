# PriceMissingCountDetails

The reasons that contributed to the price missing count and the total count for each reason.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth_depleted_count** | **str** | No price was cached for this itinerary, and there was no live query quota remaining. | [optional] 
**cache_rate_missing_count** | **str** | No price exists in the cache for this itinerary. A live query was not done due to page constraints. | [optional] 
**itinerary_blocked_count** | **str** | The itinerary was outside of your basic parameters, so no price was pulled for the itinerary from either live query or cache fill. | [optional] 
**live_pricing_error_count** | **str** | No price was cached for this itinerary. A live query did not time out, but your system returned an error. | [optional] 
**live_pricing_not_setup_count** | **str** | No price was cached for this itinerary, and live query was not configured for this account. | [optional] 
**live_pricing_timeout_count** | **str** | No price was cached for this itinerary, and a live query sent to your system timed out. | [optional] 

## Example

```python
from openapi_client.models.price_missing_count_details import PriceMissingCountDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PriceMissingCountDetails from a JSON string
price_missing_count_details_instance = PriceMissingCountDetails.from_json(json)
# print the JSON string representation of the object
print(PriceMissingCountDetails.to_json())

# convert the object into a dict
price_missing_count_details_dict = price_missing_count_details_instance.to_dict()
# create an instance of PriceMissingCountDetails from a dict
price_missing_count_details_from_dict = PriceMissingCountDetails.from_dict(price_missing_count_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


