# Beacon

Details of a beacon device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertised_id** | [**AdvertisedId**](AdvertisedId.md) |  | [optional] 
**beacon_name** | **str** | Resource name of this beacon. A beacon name has the format \&quot;beacons/N!beaconId\&quot; where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon&#39;s type. Possible values are &#x60;3&#x60; for Eddystone, &#x60;1&#x60; for iBeacon, or &#x60;5&#x60; for AltBeacon. This field must be left empty when registering. After reading a beacon, clients can use the name for future operations. | [optional] 
**description** | **str** | Free text used to identify and describe the beacon. Maximum length 140 characters. Optional. | [optional] 
**ephemeral_id_registration** | [**EphemeralIdRegistration**](EphemeralIdRegistration.md) |  | [optional] 
**expected_stability** | **str** | Expected location stability. This is set when the beacon is registered or updated, not automatically detected in any way. Optional. | [optional] 
**indoor_level** | [**IndoorLevel**](IndoorLevel.md) |  | [optional] 
**lat_lng** | [**LatLng**](LatLng.md) |  | [optional] 
**place_id** | **str** | The [Google Places API](/places/place-id) Place ID of the place where the beacon is deployed. This is given when the beacon is registered or updated, not automatically detected in any way. Optional. | [optional] 
**properties** | **Dict[str, str]** | Properties of the beacon device, for example battery type or firmware version. Optional. | [optional] 
**provisioning_key** | **bytearray** | Some beacons may require a user to provide an authorization key before changing any of its configuration (e.g. broadcast frames, transmit power). This field provides a place to store and control access to that key. This field is populated in responses to &#x60;GET /v1beta1/beacons/3!beaconId&#x60; from users with write access to the given beacon. That is to say: If the user is authorized to write the beacon&#39;s confidential data in the service, the service considers them authorized to configure the beacon. Note that this key grants nothing on the service, only on the beacon itself. | [optional] 
**status** | **str** | Current status of the beacon. Required. | [optional] 

## Example

```python
from openapi_client.models.beacon import Beacon

# TODO update the JSON string below
json = "{}"
# create an instance of Beacon from a JSON string
beacon_instance = Beacon.from_json(json)
# print the JSON string representation of the object
print(Beacon.to_json())

# convert the object into a dict
beacon_dict = beacon_instance.to_dict()
# create an instance of Beacon from a dict
beacon_from_dict = Beacon.from_dict(beacon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


