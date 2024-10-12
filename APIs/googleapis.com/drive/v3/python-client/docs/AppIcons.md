# AppIcons


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Category of the icon. Allowed values are: * &#x60;application&#x60; - The icon for the application. * &#x60;document&#x60; - The icon for a file associated with the app. * &#x60;documentShared&#x60; - The icon for a shared file associated with the app. | [optional] 
**icon_url** | **str** | URL for the icon. | [optional] 
**size** | **int** | Size of the icon. Represented as the maximum of the width and height. | [optional] 

## Example

```python
from openapi_client.models.app_icons import AppIcons

# TODO update the JSON string below
json = "{}"
# create an instance of AppIcons from a JSON string
app_icons_instance = AppIcons.from_json(json)
# print the JSON string representation of the object
print(AppIcons.to_json())

# convert the object into a dict
app_icons_dict = app_icons_instance.to_dict()
# create an instance of AppIcons from a dict
app_icons_from_dict = AppIcons.from_dict(app_icons_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


