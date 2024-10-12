# DeviceConfigurationResponse

A response containing the fully encoded binary blob for a mobileconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_url** | **str** | A data URL containing a signed mobileconfig profile | 

## Example

```python
from openapi_client.models.device_configuration_response import DeviceConfigurationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceConfigurationResponse from a JSON string
device_configuration_response_instance = DeviceConfigurationResponse.from_json(json)
# print the JSON string representation of the object
print(DeviceConfigurationResponse.to_json())

# convert the object into a dict
device_configuration_response_dict = device_configuration_response_instance.to_dict()
# create an instance of DeviceConfigurationResponse from a dict
device_configuration_response_from_dict = DeviceConfigurationResponse.from_dict(device_configuration_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


