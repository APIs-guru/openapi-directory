# WindowsVersions

Windows server versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**windows_versions** | [**List[WindowsVersion]**](WindowsVersion.md) | List of Windows server versions. | [optional] 

## Example

```python
from openapi_client.models.windows_versions import WindowsVersions

# TODO update the JSON string below
json = "{}"
# create an instance of WindowsVersions from a JSON string
windows_versions_instance = WindowsVersions.from_json(json)
# print the JSON string representation of the object
print(WindowsVersions.to_json())

# convert the object into a dict
windows_versions_dict = windows_versions_instance.to_dict()
# create an instance of WindowsVersions from a dict
windows_versions_from_dict = WindowsVersions.from_dict(windows_versions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


