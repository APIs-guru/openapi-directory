# AppProcessInfo

Information about a process. It contains process name, start time, app Uid, app Pid, seinfo tag, hash of the base APK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apk_sha256_hash** | **str** | SHA-256 hash of the base APK, in hexadecimal format. | [optional] 
**package_names** | **List[str]** | Package names of all packages that are associated with the particular user ID. In most cases, this will be a single package name, the package that has been assigned that user ID. If multiple application share a UID then all packages sharing UID will be included. | [optional] 
**pid** | **int** | Process ID. | [optional] 
**process_name** | **str** | Process name. | [optional] 
**seinfo** | **str** | SELinux policy info. | [optional] 
**start_time** | **str** | Process start time. | [optional] 
**uid** | **int** | UID of the package. | [optional] 

## Example

```python
from openapi_client.models.app_process_info import AppProcessInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AppProcessInfo from a JSON string
app_process_info_instance = AppProcessInfo.from_json(json)
# print the JSON string representation of the object
print(AppProcessInfo.to_json())

# convert the object into a dict
app_process_info_dict = app_process_info_instance.to_dict()
# create an instance of AppProcessInfo from a dict
app_process_info_from_dict = AppProcessInfo.from_dict(app_process_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


