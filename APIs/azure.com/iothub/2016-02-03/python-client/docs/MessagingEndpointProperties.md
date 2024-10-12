# MessagingEndpointProperties

The properties of the messaging endpoints used by this IoT hub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lock_duration_as_iso8601** | **str** | The lock duration. See: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-file-upload. | [optional] 
**max_delivery_count** | **int** | The number of times the IoT hub attempts to deliver a message. See: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-file-upload. | [optional] 
**ttl_as_iso8601** | **str** | The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-file-upload. | [optional] 

## Example

```python
from openapi_client.models.messaging_endpoint_properties import MessagingEndpointProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MessagingEndpointProperties from a JSON string
messaging_endpoint_properties_instance = MessagingEndpointProperties.from_json(json)
# print the JSON string representation of the object
print(MessagingEndpointProperties.to_json())

# convert the object into a dict
messaging_endpoint_properties_dict = messaging_endpoint_properties_instance.to_dict()
# create an instance of MessagingEndpointProperties from a dict
messaging_endpoint_properties_from_dict = MessagingEndpointProperties.from_dict(messaging_endpoint_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


