# WindowsVersion

Windows server version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_type** | **str** | Windows server image type | [optional] 
**os_version** | **str** | Windows server build number | [optional] 
**support_end_date** | [**ModelDate**](ModelDate.md) |  | [optional] 

## Example

```python
from openapi_client.models.windows_version import WindowsVersion

# TODO update the JSON string below
json = "{}"
# create an instance of WindowsVersion from a JSON string
windows_version_instance = WindowsVersion.from_json(json)
# print the JSON string representation of the object
print(WindowsVersion.to_json())

# convert the object into a dict
windows_version_dict = windows_version_instance.to_dict()
# create an instance of WindowsVersion from a dict
windows_version_from_dict = WindowsVersion.from_dict(windows_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


