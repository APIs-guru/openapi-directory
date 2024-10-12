# PicoSettingsDto

DTO for the pico charging station settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_type** | **str** | The authentication type | [optional] 
**car_id_detection** | **bool** | Flag if the car id detection is enabled | [optional] 
**display_brightness** | **bytearray** | The Brightness of the LCD Matrix display. 0 &#x3D; minimum, 255 &#x3D; maximum | [optional] 
**dns_name** | **str** | The DNS name of the pico&#39;s internal ip | [optional] 
**fix_cable_lock_enable** | **bool** | Enable the fix lock of the charging cable | [optional] 
**idle_image_url** | **str** | The url of the idle image | [optional] 
**internal_ip** | **str** | The internal IP address | [optional] 
**loadmanagement_group_id** | **str** | The ID of the loadmanagement group | [optional] 
**max_current** | **int** | The max current of this station (in A) | [optional] 
**min_current** | **int** | The max current of this station (in A) | [optional] 
**modbus_tcp** | **bool** | Flag if ModbusTcp is enabled | [optional] 
**name** | **str** | The name of the station | [optional] 
**serial_number** | **str** | The Serial number of the station | [optional] 

## Example

```python
from openapi_client.models.pico_settings_dto import PicoSettingsDto

# TODO update the JSON string below
json = "{}"
# create an instance of PicoSettingsDto from a JSON string
pico_settings_dto_instance = PicoSettingsDto.from_json(json)
# print the JSON string representation of the object
print(PicoSettingsDto.to_json())

# convert the object into a dict
pico_settings_dto_dict = pico_settings_dto_instance.to_dict()
# create an instance of PicoSettingsDto from a dict
pico_settings_dto_from_dict = PicoSettingsDto.from_dict(pico_settings_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


