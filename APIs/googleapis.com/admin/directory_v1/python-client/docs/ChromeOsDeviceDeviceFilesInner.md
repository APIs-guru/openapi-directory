# ChromeOsDeviceDeviceFilesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **datetime** | Date and time the file was created | [optional] 
**download_url** | **str** | File download URL | [optional] 
**name** | **str** | File name | [optional] 
**type** | **str** | File type | [optional] 

## Example

```python
from openapi_client.models.chrome_os_device_device_files_inner import ChromeOsDeviceDeviceFilesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeOsDeviceDeviceFilesInner from a JSON string
chrome_os_device_device_files_inner_instance = ChromeOsDeviceDeviceFilesInner.from_json(json)
# print the JSON string representation of the object
print(ChromeOsDeviceDeviceFilesInner.to_json())

# convert the object into a dict
chrome_os_device_device_files_inner_dict = chrome_os_device_device_files_inner_instance.to_dict()
# create an instance of ChromeOsDeviceDeviceFilesInner from a dict
chrome_os_device_device_files_inner_from_dict = ChromeOsDeviceDeviceFilesInner.from_dict(chrome_os_device_device_files_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


