# CrashesGetAppVersions200ResponseInner


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
from openapi_client.models.crashes_get_app_versions200_response_inner import CrashesGetAppVersions200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of CrashesGetAppVersions200ResponseInner from a JSON string
crashes_get_app_versions200_response_inner_instance = CrashesGetAppVersions200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(CrashesGetAppVersions200ResponseInner.to_json())

# convert the object into a dict
crashes_get_app_versions200_response_inner_dict = crashes_get_app_versions200_response_inner_instance.to_dict()
# create an instance of CrashesGetAppVersions200ResponseInner from a dict
crashes_get_app_versions200_response_inner_from_dict = CrashesGetAppVersions200ResponseInner.from_dict(crashes_get_app_versions200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


