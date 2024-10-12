# OSProfile

Specifies the operating system settings for the hybrid machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computer_name** | **str** | Specifies the host OS name of the hybrid machine. | [optional] [readonly] 

## Example

```python
from openapi_client.models.os_profile import OSProfile

# TODO update the JSON string below
json = "{}"
# create an instance of OSProfile from a JSON string
os_profile_instance = OSProfile.from_json(json)
# print the JSON string representation of the object
print(OSProfile.to_json())

# convert the object into a dict
os_profile_dict = os_profile_instance.to_dict()
# create an instance of OSProfile from a dict
os_profile_from_dict = OSProfile.from_dict(os_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


