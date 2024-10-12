# BlinkDeviceLedsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **int** | The duration in seconds. Must be between 5 and 120. Default is 20 seconds | [optional] 
**duty** | **int** | The duty cycle as the percent active. Must be between 10 and 90. Default is 50. | [optional] 
**period** | **int** | The period in milliseconds. Must be between 100 and 1000. Default is 160 milliseconds | [optional] 

## Example

```python
from openapi_client.models.blink_device_leds_request import BlinkDeviceLedsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BlinkDeviceLedsRequest from a JSON string
blink_device_leds_request_instance = BlinkDeviceLedsRequest.from_json(json)
# print the JSON string representation of the object
print(BlinkDeviceLedsRequest.to_json())

# convert the object into a dict
blink_device_leds_request_dict = blink_device_leds_request_instance.to_dict()
# create an instance of BlinkDeviceLedsRequest from a dict
blink_device_leds_request_from_dict = BlinkDeviceLedsRequest.from_dict(blink_device_leds_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


