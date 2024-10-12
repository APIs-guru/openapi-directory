# GuestInstalledApplication

Guest installed application information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | Installed application name. | [optional] 
**install_time** | **str** | The time when the application was installed. | [optional] 
**licenses** | **List[str]** | License strings associated with the installed application. | [optional] 
**path** | **str** | Source path. | [optional] 
**vendor** | **str** | Installed application vendor. | [optional] 
**version** | **str** | Installed application version. | [optional] 

## Example

```python
from openapi_client.models.guest_installed_application import GuestInstalledApplication

# TODO update the JSON string below
json = "{}"
# create an instance of GuestInstalledApplication from a JSON string
guest_installed_application_instance = GuestInstalledApplication.from_json(json)
# print the JSON string representation of the object
print(GuestInstalledApplication.to_json())

# convert the object into a dict
guest_installed_application_dict = guest_installed_application_instance.to_dict()
# create an instance of GuestInstalledApplication from a dict
guest_installed_application_from_dict = GuestInstalledApplication.from_dict(guest_installed_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


