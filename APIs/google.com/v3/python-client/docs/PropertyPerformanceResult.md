# PropertyPerformanceResult

Represents a result from querying for the property performance report for an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ads_click_count** | **str** | The total number of ad clicks that were recorded for this result. | [optional] 
**ads_clickthrough_rate** | **float** | Equal to &#x60;ads_click_count&#x60; divided by &#x60;ads_impression_count&#x60;. | [optional] 
**ads_impression_count** | **str** | The total number of ad impressions that were recorded for this result. | [optional] 
**advance_booking_window** | **str** | Difference in days between query date and check-in date in property&#39;s local timezone. Only present if &#x60;advanceBookingWindow&#x60; is specified in &#x60;aggregateBy&#x60; in the request. | [optional] 
**brand** | **str** | Partner-specified brand for the property. Only present if &#x60;brand&#x60; is specified in &#x60;aggregateBy&#x60; in the request. | [optional] 
**click_count** | **str** | The total number of free booking link clicks that were recorded for this result. | [optional] 
**clickthrough_rate** | **float** | Equal to &#x60;click_count&#x60; divided by &#x60;impression_count&#x60;. | [optional] 
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**device_type** | **str** | The user’s device type. Only present if &#x60;deviceType&#x60; is specified in &#x60;aggregateBy&#x60; in the request. | [optional] 
**high_intent_users** | **bool** | Whether the user’s query indicated a strong interest in booking. Only present if &#x60;highIntentUsers&#x60; is specified in &#x60;aggregateBy&#x60; in the request. | [optional] 
**impression_count** | **str** | The total number of free booking link impressions that were recorded for this result. This value is rounded to preserve user privacy. | [optional] 
**length_of_stay** | **str** | Number of nights between check-in and check-out dates specified by user. Only present if &#x60;lengthOfStay&#x60; is specified in &#x60;aggregateBy&#x60; in the request. | [optional] 
**occupancy** | **str** | Requested number of people staying at the property. Only present if &#x60;partnerPropertyId&#x60; is specified in &#x60;aggregateBy&#x60; in the request. | [optional] 
**partner_property_display_name** | **str** | Partner&#39;s property name. Only present if &#x60;partnerPropertyDisplayName&#x60; is specified in &#x60;aggregateBy&#x60; in the request. | [optional] 
**partner_property_id** | **str** | Partner&#39;s property ID. Only present if &#x60;partnerPropertyId&#x60; is specified in &#x60;aggregateBy&#x60; in the request. | [optional] 
**property_region_code** | **str** | ISO 3116 region code of the country/region of the property. Only present if &#x60;propertyRegionCode&#x60; is specified in &#x60;aggregateBy&#x60; in the request | [optional] 
**user_region_code** | **str** | ISO 3116 region code of the country/region of the user. Only present if &#x60;userRegionCode&#x60; is specified in &#x60;aggregateBy&#x60; in the request | [optional] 
**vr_website_button_clicks** | **str** | The total number of clicks on the \&quot;Website\&quot; button on Google for vacation rentals. | [optional] 

## Example

```python
from openapi_client.models.property_performance_result import PropertyPerformanceResult

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyPerformanceResult from a JSON string
property_performance_result_instance = PropertyPerformanceResult.from_json(json)
# print the JSON string representation of the object
print(PropertyPerformanceResult.to_json())

# convert the object into a dict
property_performance_result_dict = property_performance_result_instance.to_dict()
# create an instance of PropertyPerformanceResult from a dict
property_performance_result_from_dict = PropertyPerformanceResult.from_dict(property_performance_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


