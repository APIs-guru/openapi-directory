# CancelBookingQuoteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**booking_id** | **str** | The booking reference number, prepended with &#x60;BR-&#x60; | [optional] 
**refund_details** | [**RefundDetails**](RefundDetails.md) |  | [optional] 
**status** | **str** | String indicating the cancellation status of this itinerary item:    * &#x60;CANCELLABLE&#x60; - this booking is available to be cancelled   * &#x60;CANCELLED&#x60; - this booking has already been cancelled   * &#x60;NOT_CANCELLABLE&#x60; - this booking cannot be cancelled (because the product&#39;s operation date is now in the past)  | [optional] 

## Example

```python
from openapi_client.models.cancel_booking_quote_response import CancelBookingQuoteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CancelBookingQuoteResponse from a JSON string
cancel_booking_quote_response_instance = CancelBookingQuoteResponse.from_json(json)
# print the JSON string representation of the object
print(CancelBookingQuoteResponse.to_json())

# convert the object into a dict
cancel_booking_quote_response_dict = cancel_booking_quote_response_instance.to_dict()
# create an instance of CancelBookingQuoteResponse from a dict
cancel_booking_quote_response_from_dict = CancelBookingQuoteResponse.from_dict(cancel_booking_quote_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


