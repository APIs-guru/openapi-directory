# WindowsUpdateCategory

Categories specified by the Windows Update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the windows update category. | [optional] 
**name** | **str** | The name of the windows update category. | [optional] 

## Example

```python
from openapi_client.models.windows_update_category import WindowsUpdateCategory

# TODO update the JSON string below
json = "{}"
# create an instance of WindowsUpdateCategory from a JSON string
windows_update_category_instance = WindowsUpdateCategory.from_json(json)
# print the JSON string representation of the object
print(WindowsUpdateCategory.to_json())

# convert the object into a dict
windows_update_category_dict = windows_update_category_instance.to_dict()
# create an instance of WindowsUpdateCategory from a dict
windows_update_category_from_dict = WindowsUpdateCategory.from_dict(windows_update_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


