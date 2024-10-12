# AppVersionList

Data format for a list of app versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version_codes** | **List[str]** | List of app version codes. | [optional] 

## Example

```python
from openapi_client.models.app_version_list import AppVersionList

# TODO update the JSON string below
json = "{}"
# create an instance of AppVersionList from a JSON string
app_version_list_instance = AppVersionList.from_json(json)
# print the JSON string representation of the object
print(AppVersionList.to_json())

# convert the object into a dict
app_version_list_dict = app_version_list_instance.to_dict()
# create an instance of AppVersionList from a dict
app_version_list_from_dict = AppVersionList.from_dict(app_version_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


