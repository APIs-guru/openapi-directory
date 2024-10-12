# IotHubPropertiesDeviceStreams

The device streams properties of iothub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**streaming_endpoints** | **List[str]** | List of Device Streams Endpoints. | [optional] 

## Example

```python
from openapi_client.models.iot_hub_properties_device_streams import IotHubPropertiesDeviceStreams

# TODO update the JSON string below
json = "{}"
# create an instance of IotHubPropertiesDeviceStreams from a JSON string
iot_hub_properties_device_streams_instance = IotHubPropertiesDeviceStreams.from_json(json)
# print the JSON string representation of the object
print(IotHubPropertiesDeviceStreams.to_json())

# convert the object into a dict
iot_hub_properties_device_streams_dict = iot_hub_properties_device_streams_instance.to_dict()
# create an instance of IotHubPropertiesDeviceStreams from a dict
iot_hub_properties_device_streams_from_dict = IotHubPropertiesDeviceStreams.from_dict(iot_hub_properties_device_streams_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


