# CrashGroupOperatingSystems


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crash_count** | **int** |  | [optional] 
**operating_systems** | [**List[AnalyticsCrashGroupOperatingSystemCounts200ResponseOperatingSystemsInner]**](AnalyticsCrashGroupOperatingSystemCounts200ResponseOperatingSystemsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.crash_group_operating_systems import CrashGroupOperatingSystems

# TODO update the JSON string below
json = "{}"
# create an instance of CrashGroupOperatingSystems from a JSON string
crash_group_operating_systems_instance = CrashGroupOperatingSystems.from_json(json)
# print the JSON string representation of the object
print(CrashGroupOperatingSystems.to_json())

# convert the object into a dict
crash_group_operating_systems_dict = crash_group_operating_systems_instance.to_dict()
# create an instance of CrashGroupOperatingSystems from a dict
crash_group_operating_systems_from_dict = CrashGroupOperatingSystems.from_dict(crash_group_operating_systems_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


