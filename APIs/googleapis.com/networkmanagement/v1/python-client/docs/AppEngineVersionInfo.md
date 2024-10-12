# AppEngineVersionInfo

For display only. Metadata associated with an App Engine version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of an App Engine version. | [optional] 
**environment** | **str** | App Engine execution environment for a version. | [optional] 
**runtime** | **str** | Runtime of the App Engine version. | [optional] 
**uri** | **str** | URI of an App Engine version. | [optional] 

## Example

```python
from openapi_client.models.app_engine_version_info import AppEngineVersionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AppEngineVersionInfo from a JSON string
app_engine_version_info_instance = AppEngineVersionInfo.from_json(json)
# print the JSON string representation of the object
print(AppEngineVersionInfo.to_json())

# convert the object into a dict
app_engine_version_info_dict = app_engine_version_info_instance.to_dict()
# create an instance of AppEngineVersionInfo from a dict
app_engine_version_info_from_dict = AppEngineVersionInfo.from_dict(app_engine_version_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


