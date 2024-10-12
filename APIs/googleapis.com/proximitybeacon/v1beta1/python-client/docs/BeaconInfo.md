# BeaconInfo

A subset of beacon information served via the `beaconinfo.getforobserved` method, which you call when users of your app encounter your beacons.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertised_id** | [**AdvertisedId**](AdvertisedId.md) |  | [optional] 
**attachments** | [**List[AttachmentInfo]**](AttachmentInfo.md) | Attachments matching the type(s) requested. May be empty if no attachment types were requested. | [optional] 
**beacon_name** | **str** | The name under which the beacon is registered. | [optional] 

## Example

```python
from openapi_client.models.beacon_info import BeaconInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BeaconInfo from a JSON string
beacon_info_instance = BeaconInfo.from_json(json)
# print the JSON string representation of the object
print(BeaconInfo.to_json())

# convert the object into a dict
beacon_info_dict = beacon_info_instance.to_dict()
# create an instance of BeaconInfo from a dict
beacon_info_from_dict = BeaconInfo.from_dict(beacon_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


