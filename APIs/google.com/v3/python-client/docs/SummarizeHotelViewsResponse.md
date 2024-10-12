# SummarizeHotelViewsResponse

Response message for HotelViewService.SummarizeHotelViews.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_feed_submission_time** | **str** | Timestamp of the last hotel feed submission. | [optional] 
**last_manifest_update_time** | **str** | Timestamp of the last hotel manifest update. | [optional] 
**live_on_google_property_count** | **str** | The number of properties that are Live on Google. | [optional] 
**matched_property_count** | **str** | The number of properties that match Google&#39;s manifest. | [optional] 
**overclustered_property_count** | **str** | The number of hotels that are considered overclustered. | [optional] 
**overclustered_property_with_errors_count** | **str** | The number of overclustered properties that have data-related errors. | [optional] 
**unmatched_property_count** | **str** | The number of properties that are considered unmatched. | [optional] 
**unmatched_property_with_errors_count** | **str** | The number of unmatched properties that have data-related errors. | [optional] 

## Example

```python
from openapi_client.models.summarize_hotel_views_response import SummarizeHotelViewsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SummarizeHotelViewsResponse from a JSON string
summarize_hotel_views_response_instance = SummarizeHotelViewsResponse.from_json(json)
# print the JSON string representation of the object
print(SummarizeHotelViewsResponse.to_json())

# convert the object into a dict
summarize_hotel_views_response_dict = summarize_hotel_views_response_instance.to_dict()
# create an instance of SummarizeHotelViewsResponse from a dict
summarize_hotel_views_response_from_dict = SummarizeHotelViewsResponse.from_dict(summarize_hotel_views_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


