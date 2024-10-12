# GetInfoForObservedBeaconsResponse

Information about the requested beacons, optionally including attachment data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beacons** | [**List[BeaconInfo]**](BeaconInfo.md) | Public information about beacons. May be empty if the request matched no beacons. | [optional] 

## Example

```python
from openapi_client.models.get_info_for_observed_beacons_response import GetInfoForObservedBeaconsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetInfoForObservedBeaconsResponse from a JSON string
get_info_for_observed_beacons_response_instance = GetInfoForObservedBeaconsResponse.from_json(json)
# print the JSON string representation of the object
print(GetInfoForObservedBeaconsResponse.to_json())

# convert the object into a dict
get_info_for_observed_beacons_response_dict = get_info_for_observed_beacons_response_instance.to_dict()
# create an instance of GetInfoForObservedBeaconsResponse from a dict
get_info_for_observed_beacons_response_from_dict = GetInfoForObservedBeaconsResponse.from_dict(get_info_for_observed_beacons_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


