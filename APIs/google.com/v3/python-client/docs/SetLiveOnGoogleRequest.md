# SetLiveOnGoogleRequest

Request message for HotelService.SetLiveOnGoogle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**live_on_google** | **bool** | Required. Whether the property will show on Google. When true, Google will show the properties if their integration is complete and the property is available. When false, Google will never show the properties. | [optional] 
**partner_hotel_ids** | **List[str]** | Required. Identifies the properties to update with the liveOnGoogle setting. | [optional] 

## Example

```python
from openapi_client.models.set_live_on_google_request import SetLiveOnGoogleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetLiveOnGoogleRequest from a JSON string
set_live_on_google_request_instance = SetLiveOnGoogleRequest.from_json(json)
# print the JSON string representation of the object
print(SetLiveOnGoogleRequest.to_json())

# convert the object into a dict
set_live_on_google_request_dict = set_live_on_google_request_instance.to_dict()
# create an instance of SetLiveOnGoogleRequest from a dict
set_live_on_google_request_from_dict = SetLiveOnGoogleRequest.from_dict(set_live_on_google_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


