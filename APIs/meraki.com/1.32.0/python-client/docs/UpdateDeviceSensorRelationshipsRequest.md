# UpdateDeviceSensorRelationshipsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**livestream** | [**UpdateDeviceSensorRelationshipsRequestLivestream**](UpdateDeviceSensorRelationshipsRequestLivestream.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_device_sensor_relationships_request import UpdateDeviceSensorRelationshipsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceSensorRelationshipsRequest from a JSON string
update_device_sensor_relationships_request_instance = UpdateDeviceSensorRelationshipsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceSensorRelationshipsRequest.to_json())

# convert the object into a dict
update_device_sensor_relationships_request_dict = update_device_sensor_relationships_request_instance.to_dict()
# create an instance of UpdateDeviceSensorRelationshipsRequest from a dict
update_device_sensor_relationships_request_from_dict = UpdateDeviceSensorRelationshipsRequest.from_dict(update_device_sensor_relationships_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


