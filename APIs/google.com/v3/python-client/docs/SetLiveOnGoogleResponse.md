# SetLiveOnGoogleResponse

Response message for HotelService.SetLiveOnGoogle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_hotel_ids** | **List[str]** | Identifies properties that Google could not update. | [optional] 
**updated_hotel_ids** | **List[str]** | Identifies the updated properties. | [optional] 

## Example

```python
from openapi_client.models.set_live_on_google_response import SetLiveOnGoogleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SetLiveOnGoogleResponse from a JSON string
set_live_on_google_response_instance = SetLiveOnGoogleResponse.from_json(json)
# print the JSON string representation of the object
print(SetLiveOnGoogleResponse.to_json())

# convert the object into a dict
set_live_on_google_response_dict = set_live_on_google_response_instance.to_dict()
# create an instance of SetLiveOnGoogleResponse from a dict
set_live_on_google_response_from_dict = SetLiveOnGoogleResponse.from_dict(set_live_on_google_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


