# IosDevice

A single iOS device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ios_model_id** | **str** | Required. The id of the iOS device to be used. Use the TestEnvironmentDiscoveryService to get supported options. | [optional] 
**ios_version_id** | **str** | Required. The id of the iOS major software version to be used. Use the TestEnvironmentDiscoveryService to get supported options. | [optional] 
**locale** | **str** | Required. The locale the test device used for testing. Use the TestEnvironmentDiscoveryService to get supported options. | [optional] 
**orientation** | **str** | Required. How the device is oriented during the test. Use the TestEnvironmentDiscoveryService to get supported options. | [optional] 

## Example

```python
from openapi_client.models.ios_device import IosDevice

# TODO update the JSON string below
json = "{}"
# create an instance of IosDevice from a JSON string
ios_device_instance = IosDevice.from_json(json)
# print the JSON string representation of the object
print(IosDevice.to_json())

# convert the object into a dict
ios_device_dict = ios_device_instance.to_dict()
# create an instance of IosDevice from a dict
ios_device_from_dict = IosDevice.from_dict(ios_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


