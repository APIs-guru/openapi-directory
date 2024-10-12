# DeviceIdentifier

Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chrome_os_attested_device_id** | **str** | An identifier provided by OEMs, carried through the production and sales process. Only applicable to Chrome OS devices. | [optional] 
**device_type** | **str** | The type of the device | [optional] 
**imei** | **str** | The device’s IMEI number. Validated on input. | [optional] 
**manufacturer** | **str** | The device manufacturer’s name. Matches the device&#39;s built-in value returned from &#x60;android.os.Build.MANUFACTURER&#x60;. Allowed values are listed in [Android manufacturers](/zero-touch/resources/manufacturer-names#manufacturers-names). | [optional] 
**meid** | **str** | The device’s MEID number. | [optional] 
**model** | **str** | The device model&#39;s name. Allowed values are listed in [Android models](/zero-touch/resources/manufacturer-names#model-names) and [Chrome OS models](https://support.google.com/chrome/a/answer/10130175#identify_compatible). | [optional] 
**serial_number** | **str** | The manufacturer&#39;s serial number for the device. This value might not be unique across different device models. | [optional] 

## Example

```python
from openapi_client.models.device_identifier import DeviceIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceIdentifier from a JSON string
device_identifier_instance = DeviceIdentifier.from_json(json)
# print the JSON string representation of the object
print(DeviceIdentifier.to_json())

# convert the object into a dict
device_identifier_dict = device_identifier_instance.to_dict()
# create an instance of DeviceIdentifier from a dict
device_identifier_from_dict = DeviceIdentifier.from_dict(device_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


