# PriceView

A price view. Covers the Prices functionality in pre-v3.0 API versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Resource name in the format &#x60;accounts/{account_id}/priceViews/{partner_hotel_id}&#x60;. | [optional] 
**per_itinerary_prices** | [**List[HotelPricePerItinerary]**](HotelPricePerItinerary.md) | Price for each itinerary. | [optional] 

## Example

```python
from openapi_client.models.price_view import PriceView

# TODO update the JSON string below
json = "{}"
# create an instance of PriceView from a JSON string
price_view_instance = PriceView.from_json(json)
# print the JSON string representation of the object
print(PriceView.to_json())

# convert the object into a dict
price_view_dict = price_view_instance.to_dict()
# create an instance of PriceView from a dict
price_view_from_dict = PriceView.from_dict(price_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


