# FindDevicesByDeviceIdentifierRequest

Request to find devices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_identifier** | [**DeviceIdentifier**](DeviceIdentifier.md) |  | [optional] 
**limit** | **str** | Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive. | [optional] 
**page_token** | **str** | A token specifying which result page to return. | [optional] 

## Example

```python
from openapi_client.models.find_devices_by_device_identifier_request import FindDevicesByDeviceIdentifierRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FindDevicesByDeviceIdentifierRequest from a JSON string
find_devices_by_device_identifier_request_instance = FindDevicesByDeviceIdentifierRequest.from_json(json)
# print the JSON string representation of the object
print(FindDevicesByDeviceIdentifierRequest.to_json())

# convert the object into a dict
find_devices_by_device_identifier_request_dict = find_devices_by_device_identifier_request_instance.to_dict()
# create an instance of FindDevicesByDeviceIdentifierRequest from a dict
find_devices_by_device_identifier_request_from_dict = FindDevicesByDeviceIdentifierRequest.from_dict(find_devices_by_device_identifier_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


