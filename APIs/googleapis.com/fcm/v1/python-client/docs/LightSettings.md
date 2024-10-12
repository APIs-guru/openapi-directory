# LightSettings

Settings to control notification LED.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**Color**](Color.md) |  | [optional] 
**light_off_duration** | **str** | Required. Along with &#x60;light_on_duration &#x60;, define the blink rate of LED flashes. Resolution defined by [proto.Duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration) | [optional] 
**light_on_duration** | **str** | Required. Along with &#x60;light_off_duration&#x60;, define the blink rate of LED flashes. Resolution defined by [proto.Duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration) | [optional] 

## Example

```python
from openapi_client.models.light_settings import LightSettings

# TODO update the JSON string below
json = "{}"
# create an instance of LightSettings from a JSON string
light_settings_instance = LightSettings.from_json(json)
# print the JSON string representation of the object
print(LightSettings.to_json())

# convert the object into a dict
light_settings_dict = light_settings_instance.to_dict()
# create an instance of LightSettings from a dict
light_settings_from_dict = LightSettings.from_dict(light_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


