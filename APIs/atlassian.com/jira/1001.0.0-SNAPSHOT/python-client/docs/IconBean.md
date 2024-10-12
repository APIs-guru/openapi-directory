# IconBean

An icon.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link** | **str** | The URL of the tooltip, used only for a status icon. | [optional] 
**title** | **str** | The title of the icon, for use as a tooltip on the icon. | [optional] 
**url16x16** | **str** | The URL of a 16x16 pixel icon. | [optional] 

## Example

```python
from openapi_client.models.icon_bean import IconBean

# TODO update the JSON string below
json = "{}"
# create an instance of IconBean from a JSON string
icon_bean_instance = IconBean.from_json(json)
# print the JSON string representation of the object
print(IconBean.to_json())

# convert the object into a dict
icon_bean_dict = icon_bean_instance.to_dict()
# create an instance of IconBean from a dict
icon_bean_from_dict = IconBean.from_dict(icon_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


