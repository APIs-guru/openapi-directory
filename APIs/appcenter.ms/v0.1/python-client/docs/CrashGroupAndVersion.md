# CrashGroupAndVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_version** | **str** |  | [optional] 
**crash_group_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.crash_group_and_version import CrashGroupAndVersion

# TODO update the JSON string below
json = "{}"
# create an instance of CrashGroupAndVersion from a JSON string
crash_group_and_version_instance = CrashGroupAndVersion.from_json(json)
# print the JSON string representation of the object
print(CrashGroupAndVersion.to_json())

# convert the object into a dict
crash_group_and_version_dict = crash_group_and_version_instance.to_dict()
# create an instance of CrashGroupAndVersion from a dict
crash_group_and_version_from_dict = CrashGroupAndVersion.from_dict(crash_group_and_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


