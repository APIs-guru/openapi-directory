# PriceUnavailableCountDetails

The reasons that contributed to the price unavailable count and the total count for each reason.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**participation_not_likely_count** | **str** | No price was cached for this itinerary, and no live query was done because your server usually tells us the hotel is unavailable or sold out. | [optional] 
**price_unavailable_count** | **str** | Hotel did not participate because it wasn&#39;t available for the itinerary dates. | [optional] 

## Example

```python
from openapi_client.models.price_unavailable_count_details import PriceUnavailableCountDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PriceUnavailableCountDetails from a JSON string
price_unavailable_count_details_instance = PriceUnavailableCountDetails.from_json(json)
# print the JSON string representation of the object
print(PriceUnavailableCountDetails.to_json())

# convert the object into a dict
price_unavailable_count_details_dict = price_unavailable_count_details_instance.to_dict()
# create an instance of PriceUnavailableCountDetails from a dict
price_unavailable_count_details_from_dict = PriceUnavailableCountDetails.from_dict(price_unavailable_count_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


