# FreeBookingLinksResult

**DEPRECATED:** Use `PropertyPerformanceResult` with `PropertyPerformanceReportService` instead. Represents a result from querying for free booking link stats for an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**click_count** | **str** | The total number of clicks that were recorded for this result. | [optional] 
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**device_type** | **str** | The user’s device type. Only present if &#x60;deviceType&#x60; is specified in &#x60;aggregateBy&#x60; in the request. | [optional] 
**partner_hotel_display_name** | **str** | Partner&#39;s hotel name. Only present if &#x60;partnerHotelDisplayName&#x60; is specified in &#x60;aggregateBy&#x60; in the request. | [optional] 
**partner_hotel_id** | **str** | Partner&#39;s hotel ID. Only present if &#x60;partnerHotelId&#x60; is specified in &#x60;aggregateBy&#x60; in the request. | [optional] 
**user_region_code** | **str** | ISO 3116 region code of the country/region of the user. Only present if &#x60;userRegionCode&#x60; is specified in &#x60;aggregateBy&#x60; in the request | [optional] 

## Example

```python
from openapi_client.models.free_booking_links_result import FreeBookingLinksResult

# TODO update the JSON string below
json = "{}"
# create an instance of FreeBookingLinksResult from a JSON string
free_booking_links_result_instance = FreeBookingLinksResult.from_json(json)
# print the JSON string representation of the object
print(FreeBookingLinksResult.to_json())

# convert the object into a dict
free_booking_links_result_dict = free_booking_links_result_instance.to_dict()
# create an instance of FreeBookingLinksResult from a dict
free_booking_links_result_from_dict = FreeBookingLinksResult.from_dict(free_booking_links_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


