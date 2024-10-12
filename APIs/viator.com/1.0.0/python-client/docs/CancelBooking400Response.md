# CancelBooking400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**timestamp** | **str** | Timestamp of the request | [optional] 
**tracking_id** | **str** | Tracking identifier for this error response (useful when seeking support) | [optional] 

## Example

```python
from openapi_client.models.cancel_booking400_response import CancelBooking400Response

# TODO update the JSON string below
json = "{}"
# create an instance of CancelBooking400Response from a JSON string
cancel_booking400_response_instance = CancelBooking400Response.from_json(json)
# print the JSON string representation of the object
print(CancelBooking400Response.to_json())

# convert the object into a dict
cancel_booking400_response_dict = cancel_booking400_response_instance.to_dict()
# create an instance of CancelBooking400Response from a dict
cancel_booking400_response_from_dict = CancelBooking400Response.from_dict(cancel_booking400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


