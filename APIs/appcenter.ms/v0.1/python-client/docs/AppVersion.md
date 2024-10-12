# AppVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** |  | 
**app_version** | **str** |  | 
**app_version_id** | **str** |  | 
**build_number** | **str** |  | [optional] 
**display_name** | **str** |  | 

## Example

```python
from openapi_client.models.app_version import AppVersion

# TODO update the JSON string below
json = "{}"
# create an instance of AppVersion from a JSON string
app_version_instance = AppVersion.from_json(json)
# print the JSON string representation of the object
print(AppVersion.to_json())

# convert the object into a dict
app_version_dict = app_version_instance.to_dict()
# create an instance of AppVersion from a dict
app_version_from_dict = AppVersion.from_dict(app_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


