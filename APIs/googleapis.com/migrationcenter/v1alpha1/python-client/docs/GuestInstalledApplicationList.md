# GuestInstalledApplicationList

Guest installed application list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[GuestInstalledApplication]**](GuestInstalledApplication.md) | Application entries. | [optional] 

## Example

```python
from openapi_client.models.guest_installed_application_list import GuestInstalledApplicationList

# TODO update the JSON string below
json = "{}"
# create an instance of GuestInstalledApplicationList from a JSON string
guest_installed_application_list_instance = GuestInstalledApplicationList.from_json(json)
# print the JSON string representation of the object
print(GuestInstalledApplicationList.to_json())

# convert the object into a dict
guest_installed_application_list_dict = guest_installed_application_list_instance.to_dict()
# create an instance of GuestInstalledApplicationList from a dict
guest_installed_application_list_from_dict = GuestInstalledApplicationList.from_dict(guest_installed_application_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


