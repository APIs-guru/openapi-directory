# Selinux

SELinux details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Is SELinux enabled. | [optional] 
**mode** | **str** | SELinux mode enforcing / permissive. | [optional] 

## Example

```python
from openapi_client.models.selinux import Selinux

# TODO update the JSON string below
json = "{}"
# create an instance of Selinux from a JSON string
selinux_instance = Selinux.from_json(json)
# print the JSON string representation of the object
print(Selinux.to_json())

# convert the object into a dict
selinux_dict = selinux_instance.to_dict()
# create an instance of Selinux from a dict
selinux_from_dict = Selinux.from_dict(selinux_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


