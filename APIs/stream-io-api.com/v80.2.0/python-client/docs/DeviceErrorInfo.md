# DeviceErrorInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** |  | 
**provider** | **str** |  | 
**provider_name** | **str** |  | 

## Example

```python
from openapi_client.models.device_error_info import DeviceErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceErrorInfo from a JSON string
device_error_info_instance = DeviceErrorInfo.from_json(json)
# print the JSON string representation of the object
print(DeviceErrorInfo.to_json())

# convert the object into a dict
device_error_info_dict = device_error_info_instance.to_dict()
# create an instance of DeviceErrorInfo from a dict
device_error_info_from_dict = DeviceErrorInfo.from_dict(device_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


