# IosDeviceList

A list of iOS device configurations in which the test is to be executed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ios_devices** | [**List[IosDevice]**](IosDevice.md) | Required. A list of iOS devices. | [optional] 

## Example

```python
from openapi_client.models.ios_device_list import IosDeviceList

# TODO update the JSON string below
json = "{}"
# create an instance of IosDeviceList from a JSON string
ios_device_list_instance = IosDeviceList.from_json(json)
# print the JSON string representation of the object
print(IosDeviceList.to_json())

# convert the object into a dict
ios_device_list_dict = ios_device_list_instance.to_dict()
# create an instance of IosDeviceList from a dict
ios_device_list_from_dict = IosDeviceList.from_dict(ios_device_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


