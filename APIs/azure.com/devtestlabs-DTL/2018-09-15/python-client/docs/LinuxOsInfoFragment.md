# LinuxOsInfoFragment

Information about a Linux OS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linux_os_state** | **str** | The state of the Linux OS (i.e. NonDeprovisioned, DeprovisionRequested, DeprovisionApplied). | [optional] 

## Example

```python
from openapi_client.models.linux_os_info_fragment import LinuxOsInfoFragment

# TODO update the JSON string below
json = "{}"
# create an instance of LinuxOsInfoFragment from a JSON string
linux_os_info_fragment_instance = LinuxOsInfoFragment.from_json(json)
# print the JSON string representation of the object
print(LinuxOsInfoFragment.to_json())

# convert the object into a dict
linux_os_info_fragment_dict = linux_os_info_fragment_instance.to_dict()
# create an instance of LinuxOsInfoFragment from a dict
linux_os_info_fragment_from_dict = LinuxOsInfoFragment.from_dict(linux_os_info_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


