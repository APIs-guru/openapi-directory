# AppIconsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Category of the icon. Allowed values are: * &#x60;application&#x60; - icon for the application * &#x60;document&#x60; - icon for a file associated with the app * &#x60;documentShared&#x60; - icon for a shared file associated with the app | [optional] 
**icon_url** | **str** | URL for the icon. | [optional] 
**size** | **int** | Size of the icon. Represented as the maximum of the width and height. | [optional] 

## Example

```python
from openapi_client.models.app_icons_inner import AppIconsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppIconsInner from a JSON string
app_icons_inner_instance = AppIconsInner.from_json(json)
# print the JSON string representation of the object
print(AppIconsInner.to_json())

# convert the object into a dict
app_icons_inner_dict = app_icons_inner_instance.to_dict()
# create an instance of AppIconsInner from a dict
app_icons_inner_from_dict = AppIconsInner.from_dict(app_icons_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


