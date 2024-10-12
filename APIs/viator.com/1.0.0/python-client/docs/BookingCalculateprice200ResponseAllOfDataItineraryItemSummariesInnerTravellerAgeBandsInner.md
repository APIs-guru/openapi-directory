# BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInnerTravellerAgeBandsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_band_id** | **int** | **unique numeric identifier** for the age band - See: [Working with age bands](#section/Appendices/Working-with-age-bands)  | [optional] 
**count** | **int** | **number of travelers in *this* age band | [optional] 
**description** | **str** | **natural-language** description (singular) of *this* age band | [optional] 
**plural_description** | **str** | **natural-language** description (plural) of *this* age band | [optional] 
**sort_order** | **int** | **sort order** for *this* age band | [optional] 

## Example

```python
from openapi_client.models.booking_calculateprice200_response_all_of_data_itinerary_item_summaries_inner_traveller_age_bands_inner import BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInnerTravellerAgeBandsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInnerTravellerAgeBandsInner from a JSON string
booking_calculateprice200_response_all_of_data_itinerary_item_summaries_inner_traveller_age_bands_inner_instance = BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInnerTravellerAgeBandsInner.from_json(json)
# print the JSON string representation of the object
print(BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInnerTravellerAgeBandsInner.to_json())

# convert the object into a dict
booking_calculateprice200_response_all_of_data_itinerary_item_summaries_inner_traveller_age_bands_inner_dict = booking_calculateprice200_response_all_of_data_itinerary_item_summaries_inner_traveller_age_bands_inner_instance.to_dict()
# create an instance of BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInnerTravellerAgeBandsInner from a dict
booking_calculateprice200_response_all_of_data_itinerary_item_summaries_inner_traveller_age_bands_inner_from_dict = BookingCalculateprice200ResponseAllOfDataItineraryItemSummariesInnerTravellerAgeBandsInner.from_dict(booking_calculateprice200_response_all_of_data_itinerary_item_summaries_inner_traveller_age_bands_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


