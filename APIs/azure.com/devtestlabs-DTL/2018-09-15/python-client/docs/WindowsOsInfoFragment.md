# WindowsOsInfoFragment

Information about a Windows OS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**windows_os_state** | **str** | The state of the Windows OS (i.e. NonSysprepped, SysprepRequested, SysprepApplied). | [optional] 

## Example

```python
from openapi_client.models.windows_os_info_fragment import WindowsOsInfoFragment

# TODO update the JSON string below
json = "{}"
# create an instance of WindowsOsInfoFragment from a JSON string
windows_os_info_fragment_instance = WindowsOsInfoFragment.from_json(json)
# print the JSON string representation of the object
print(WindowsOsInfoFragment.to_json())

# convert the object into a dict
windows_os_info_fragment_dict = windows_os_info_fragment_instance.to_dict()
# create an instance of WindowsOsInfoFragment from a dict
windows_os_info_fragment_from_dict = WindowsOsInfoFragment.from_dict(windows_os_info_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


