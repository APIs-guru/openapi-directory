# BlocklistSensor



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocklist** | **str** | The primary blocklist category this sensor belongs to | 
**description** | **str** | Contains details about the sensor source and what type of malicious activity was detected | 
**id** | **int** | The sensor ID. This is a permanent and unique ID for each sensor | 

## Example

```python
from openapi_client.models.blocklist_sensor import BlocklistSensor

# TODO update the JSON string below
json = "{}"
# create an instance of BlocklistSensor from a JSON string
blocklist_sensor_instance = BlocklistSensor.from_json(json)
# print the JSON string representation of the object
print(BlocklistSensor.to_json())

# convert the object into a dict
blocklist_sensor_dict = blocklist_sensor_instance.to_dict()
# create an instance of BlocklistSensor from a dict
blocklist_sensor_from_dict = BlocklistSensor.from_dict(blocklist_sensor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


