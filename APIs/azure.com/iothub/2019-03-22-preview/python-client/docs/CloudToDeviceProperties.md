# CloudToDeviceProperties

The IoT hub cloud-to-device messaging properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_ttl_as_iso8601** | **str** | The default time to live for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. | [optional] 
**feedback** | [**FeedbackProperties**](FeedbackProperties.md) |  | [optional] 
**max_delivery_count** | **int** | The max delivery count for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. | [optional] 

## Example

```python
from openapi_client.models.cloud_to_device_properties import CloudToDeviceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CloudToDeviceProperties from a JSON string
cloud_to_device_properties_instance = CloudToDeviceProperties.from_json(json)
# print the JSON string representation of the object
print(CloudToDeviceProperties.to_json())

# convert the object into a dict
cloud_to_device_properties_dict = cloud_to_device_properties_instance.to_dict()
# create an instance of CloudToDeviceProperties from a dict
cloud_to_device_properties_from_dict = CloudToDeviceProperties.from_dict(cloud_to_device_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


