# UpdateDeviceSensorRelationshipsRequestLivestream

A role defined between an MT sensor and an MV camera that adds the camera's livestream to the sensor's details page. Snapshots from the camera will also appear in alert notifications that the sensor triggers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**related_devices** | [**List[UpdateDeviceSensorRelationshipsRequestLivestreamRelatedDevicesInner]**](UpdateDeviceSensorRelationshipsRequestLivestreamRelatedDevicesInner.md) | An array of the related devices for the role | [optional] 

## Example

```python
from openapi_client.models.update_device_sensor_relationships_request_livestream import UpdateDeviceSensorRelationshipsRequestLivestream

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceSensorRelationshipsRequestLivestream from a JSON string
update_device_sensor_relationships_request_livestream_instance = UpdateDeviceSensorRelationshipsRequestLivestream.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceSensorRelationshipsRequestLivestream.to_json())

# convert the object into a dict
update_device_sensor_relationships_request_livestream_dict = update_device_sensor_relationships_request_livestream_instance.to_dict()
# create an instance of UpdateDeviceSensorRelationshipsRequestLivestream from a dict
update_device_sensor_relationships_request_livestream_from_dict = UpdateDeviceSensorRelationshipsRequestLivestream.from_dict(update_device_sensor_relationships_request_livestream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


