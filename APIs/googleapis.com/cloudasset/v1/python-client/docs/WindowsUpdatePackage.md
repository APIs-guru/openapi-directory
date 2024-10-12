# WindowsUpdatePackage

Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | [**List[WindowsUpdateCategory]**](WindowsUpdateCategory.md) | The categories that are associated with this update package. | [optional] 
**description** | **str** | The localized description of the update package. | [optional] 
**kb_article_ids** | **List[str]** | A collection of Microsoft Knowledge Base article IDs that are associated with the update package. | [optional] 
**last_deployment_change_time** | **str** | The last published date of the update, in (UTC) date and time. | [optional] 
**more_info_urls** | **List[str]** | A collection of URLs that provide more information about the update package. | [optional] 
**revision_number** | **int** | The revision number of this update package. | [optional] 
**support_url** | **str** | A hyperlink to the language-specific support information for the update. | [optional] 
**title** | **str** | The localized title of the update package. | [optional] 
**update_id** | **str** | Gets the identifier of an update package. Stays the same across revisions. | [optional] 

## Example

```python
from openapi_client.models.windows_update_package import WindowsUpdatePackage

# TODO update the JSON string below
json = "{}"
# create an instance of WindowsUpdatePackage from a JSON string
windows_update_package_instance = WindowsUpdatePackage.from_json(json)
# print the JSON string representation of the object
print(WindowsUpdatePackage.to_json())

# convert the object into a dict
windows_update_package_dict = windows_update_package_instance.to_dict()
# create an instance of WindowsUpdatePackage from a dict
windows_update_package_from_dict = WindowsUpdatePackage.from_dict(windows_update_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


