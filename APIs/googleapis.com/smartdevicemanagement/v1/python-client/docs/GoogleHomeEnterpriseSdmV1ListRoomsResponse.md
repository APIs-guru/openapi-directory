# GoogleHomeEnterpriseSdmV1ListRoomsResponse

Response message for SmartDeviceManagementService.ListRooms

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rooms** | [**List[GoogleHomeEnterpriseSdmV1Room]**](GoogleHomeEnterpriseSdmV1Room.md) | The list of rooms. | [optional] 

## Example

```python
from openapi_client.models.google_home_enterprise_sdm_v1_list_rooms_response import GoogleHomeEnterpriseSdmV1ListRoomsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleHomeEnterpriseSdmV1ListRoomsResponse from a JSON string
google_home_enterprise_sdm_v1_list_rooms_response_instance = GoogleHomeEnterpriseSdmV1ListRoomsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleHomeEnterpriseSdmV1ListRoomsResponse.to_json())

# convert the object into a dict
google_home_enterprise_sdm_v1_list_rooms_response_dict = google_home_enterprise_sdm_v1_list_rooms_response_instance.to_dict()
# create an instance of GoogleHomeEnterpriseSdmV1ListRoomsResponse from a dict
google_home_enterprise_sdm_v1_list_rooms_response_from_dict = GoogleHomeEnterpriseSdmV1ListRoomsResponse.from_dict(google_home_enterprise_sdm_v1_list_rooms_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


