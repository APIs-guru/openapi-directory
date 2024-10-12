# DeviceInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cve_list** | [**List[Vulnerability]**](Vulnerability.md) |  | [optional] 
**device_type** | **str** |  | [optional] 
**firmware_info** | [**FirmwareInfo**](FirmwareInfo.md) |  | [optional] 
**firmware_version** | **str** |  | [optional] 
**is_discontinued** | **bool** |  | [optional] 
**latest_firmware_info** | [**FirmwareInfo**](FirmwareInfo.md) |  | [optional] 
**manufacturer** | **str** |  | [optional] 
**model_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.device_info import DeviceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceInfo from a JSON string
device_info_instance = DeviceInfo.from_json(json)
# print the JSON string representation of the object
print(DeviceInfo.to_json())

# convert the object into a dict
device_info_dict = device_info_instance.to_dict()
# create an instance of DeviceInfo from a dict
device_info_from_dict = DeviceInfo.from_dict(device_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


