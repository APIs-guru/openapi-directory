# CancelBooking404Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**message** | **str** | The specified booking was not found; or, it was not created with this API key | [optional] 
**timestamp** | **str** | Timestamp of the request | [optional] 
**tracking_id** | **str** | Tracking identifier for this error response (useful when seeking support) | [optional] 

## Example

```python
from openapi_client.models.cancel_booking404_response import CancelBooking404Response

# TODO update the JSON string below
json = "{}"
# create an instance of CancelBooking404Response from a JSON string
cancel_booking404_response_instance = CancelBooking404Response.from_json(json)
# print the JSON string representation of the object
print(CancelBooking404Response.to_json())

# convert the object into a dict
cancel_booking404_response_dict = cancel_booking404_response_instance.to_dict()
# create an instance of CancelBooking404Response from a dict
cancel_booking404_response_from_dict = CancelBooking404Response.from_dict(cancel_booking404_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


