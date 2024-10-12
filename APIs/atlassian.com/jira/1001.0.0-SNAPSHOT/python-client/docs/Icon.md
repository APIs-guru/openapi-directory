# Icon

An icon. If no icon is defined:   *  for a status icon, no status icon displays in Jira.  *  for the remote object icon, the default link icon displays in Jira.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link** | **str** | The URL of the tooltip, used only for a status icon. If not set, the status icon in Jira is not clickable. | [optional] 
**title** | **str** | The title of the icon. This is used as follows:   *  For a status icon it is used as a tooltip on the icon. If not set, the status icon doesn&#39;t display a tooltip in Jira.  *  For the remote object icon it is used in conjunction with the application name to display a tooltip for the link&#39;s icon. The tooltip takes the format \&quot;\\[application name\\] icon title\&quot;. Blank itemsare excluded from the tooltip title. If both items are blank, the icon tooltop displays as \&quot;Web Link\&quot;. | [optional] 
**url16x16** | **str** | The URL of an icon that displays at 16x16 pixel in Jira. | [optional] 

## Example

```python
from openapi_client.models.icon import Icon

# TODO update the JSON string below
json = "{}"
# create an instance of Icon from a JSON string
icon_instance = Icon.from_json(json)
# print the JSON string representation of the object
print(Icon.to_json())

# convert the object into a dict
icon_dict = icon_instance.to_dict()
# create an instance of Icon from a dict
icon_from_dict = Icon.from_dict(icon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


