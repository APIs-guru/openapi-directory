# DesktopInfo

Desktop related attributes to the Dynamic Link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**desktop_fallback_link** | **str** | Link to open on desktop. | [optional] 

## Example

```python
from openapi_client.models.desktop_info import DesktopInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DesktopInfo from a JSON string
desktop_info_instance = DesktopInfo.from_json(json)
# print the JSON string representation of the object
print(DesktopInfo.to_json())

# convert the object into a dict
desktop_info_dict = desktop_info_instance.to_dict()
# create an instance of DesktopInfo from a dict
desktop_info_from_dict = DesktopInfo.from_dict(desktop_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


