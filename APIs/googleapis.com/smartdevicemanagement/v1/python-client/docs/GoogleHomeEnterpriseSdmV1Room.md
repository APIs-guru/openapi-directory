# GoogleHomeEnterpriseSdmV1Room

Room resource represents an instance of sub-space within a structure such as rooms in a hotel suite or rental apartment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. The resource name of the room. For example: \&quot;enterprises/XYZ/structures/ABC/rooms/123\&quot;. | [optional] [readonly] 
**traits** | **Dict[str, object]** | Room traits. | [optional] 

## Example

```python
from openapi_client.models.google_home_enterprise_sdm_v1_room import GoogleHomeEnterpriseSdmV1Room

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleHomeEnterpriseSdmV1Room from a JSON string
google_home_enterprise_sdm_v1_room_instance = GoogleHomeEnterpriseSdmV1Room.from_json(json)
# print the JSON string representation of the object
print(GoogleHomeEnterpriseSdmV1Room.to_json())

# convert the object into a dict
google_home_enterprise_sdm_v1_room_dict = google_home_enterprise_sdm_v1_room_instance.to_dict()
# create an instance of GoogleHomeEnterpriseSdmV1Room from a dict
google_home_enterprise_sdm_v1_room_from_dict = GoogleHomeEnterpriseSdmV1Room.from_dict(google_home_enterprise_sdm_v1_room_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


