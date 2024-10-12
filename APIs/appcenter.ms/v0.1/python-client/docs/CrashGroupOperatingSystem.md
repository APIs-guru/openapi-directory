# CrashGroupOperatingSystem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crash_count** | **int** | Count of OS. | [optional] 
**operating_system_name** | **str** | OS name. | [optional] 

## Example

```python
from openapi_client.models.crash_group_operating_system import CrashGroupOperatingSystem

# TODO update the JSON string below
json = "{}"
# create an instance of CrashGroupOperatingSystem from a JSON string
crash_group_operating_system_instance = CrashGroupOperatingSystem.from_json(json)
# print the JSON string representation of the object
print(CrashGroupOperatingSystem.to_json())

# convert the object into a dict
crash_group_operating_system_dict = crash_group_operating_system_instance.to_dict()
# create an instance of CrashGroupOperatingSystem from a dict
crash_group_operating_system_from_dict = CrashGroupOperatingSystem.from_dict(crash_group_operating_system_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


