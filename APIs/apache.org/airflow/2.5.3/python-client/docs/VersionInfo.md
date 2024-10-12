# VersionInfo

Version information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**git_version** | **str** | The git version (including git commit hash) | [optional] 
**version** | **str** | The version of Airflow | [optional] 

## Example

```python
from openapi_client.models.version_info import VersionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VersionInfo from a JSON string
version_info_instance = VersionInfo.from_json(json)
# print the JSON string representation of the object
print(VersionInfo.to_json())

# convert the object into a dict
version_info_dict = version_info_instance.to_dict()
# create an instance of VersionInfo from a dict
version_info_from_dict = VersionInfo.from_dict(version_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


