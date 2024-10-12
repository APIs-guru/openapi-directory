# OsProfile

The Linux operation systems profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linux_operating_system_profile** | [**LinuxOperatingSystemProfile**](LinuxOperatingSystemProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.os_profile import OsProfile

# TODO update the JSON string below
json = "{}"
# create an instance of OsProfile from a JSON string
os_profile_instance = OsProfile.from_json(json)
# print the JSON string representation of the object
print(OsProfile.to_json())

# convert the object into a dict
os_profile_dict = os_profile_instance.to_dict()
# create an instance of OsProfile from a dict
os_profile_from_dict = OsProfile.from_dict(os_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


