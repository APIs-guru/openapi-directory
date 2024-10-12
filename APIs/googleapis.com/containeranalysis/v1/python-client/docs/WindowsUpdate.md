# WindowsUpdate

Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | [**List[Category]**](Category.md) | The list of categories to which the update belongs. | [optional] 
**description** | **str** | The localized description of the update. | [optional] 
**identity** | [**Identity**](Identity.md) |  | [optional] 
**kb_article_ids** | **List[str]** | The Microsoft Knowledge Base article IDs that are associated with the update. | [optional] 
**last_published_timestamp** | **str** | The last published timestamp of the update. | [optional] 
**support_url** | **str** | The hyperlink to the support information for the update. | [optional] 
**title** | **str** | The localized title of the update. | [optional] 

## Example

```python
from openapi_client.models.windows_update import WindowsUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of WindowsUpdate from a JSON string
windows_update_instance = WindowsUpdate.from_json(json)
# print the JSON string representation of the object
print(WindowsUpdate.to_json())

# convert the object into a dict
windows_update_dict = windows_update_instance.to_dict()
# create an instance of WindowsUpdate from a dict
windows_update_from_dict = WindowsUpdate.from_dict(windows_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


