# Usersettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Resource type. | [optional] 
**notes_export** | [**UsersettingsNotesExport**](UsersettingsNotesExport.md) |  | [optional] 
**notification** | [**UsersettingsNotification**](UsersettingsNotification.md) |  | [optional] 

## Example

```python
from openapi_client.models.usersettings import Usersettings

# TODO update the JSON string below
json = "{}"
# create an instance of Usersettings from a JSON string
usersettings_instance = Usersettings.from_json(json)
# print the JSON string representation of the object
print(Usersettings.to_json())

# convert the object into a dict
usersettings_dict = usersettings_instance.to_dict()
# create an instance of Usersettings from a dict
usersettings_from_dict = Usersettings.from_dict(usersettings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


