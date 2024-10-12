# LinuxOsInfo

Information about a Linux OS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linux_os_state** | **str** | The state of the Linux OS. | [optional] 

## Example

```python
from openapi_client.models.linux_os_info import LinuxOsInfo

# TODO update the JSON string below
json = "{}"
# create an instance of LinuxOsInfo from a JSON string
linux_os_info_instance = LinuxOsInfo.from_json(json)
# print the JSON string representation of the object
print(LinuxOsInfo.to_json())

# convert the object into a dict
linux_os_info_dict = linux_os_info_instance.to_dict()
# create an instance of LinuxOsInfo from a dict
linux_os_info_from_dict = LinuxOsInfo.from_dict(linux_os_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


