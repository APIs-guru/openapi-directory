# CancelBookingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**booking_id** | **str** | Booking reference number for this booking, prepended with &#x60;BR-&#x60; | [optional] 
**reason** | **str** |  | [optional] 
**status** | **str** | String indicating the outcome of the booking cancellation request.    * &#x60;ACCEPTED&#x60;: The cancellation was successful   * &#x60;DECLINED&#x60;: The cancellation failed  | [optional] 

## Example

```python
from openapi_client.models.cancel_booking_response import CancelBookingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CancelBookingResponse from a JSON string
cancel_booking_response_instance = CancelBookingResponse.from_json(json)
# print the JSON string representation of the object
print(CancelBookingResponse.to_json())

# convert the object into a dict
cancel_booking_response_dict = cancel_booking_response_instance.to_dict()
# create an instance of CancelBookingResponse from a dict
cancel_booking_response_from_dict = CancelBookingResponse.from_dict(cancel_booking_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


