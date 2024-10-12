# CrashGroupContainer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crash_groups** | [**List[AnalyticsCrashGroupsTotalsRequestCrashGroupsInner]**](AnalyticsCrashGroupsTotalsRequestCrashGroupsInner.md) |  | 

## Example

```python
from openapi_client.models.crash_group_container import CrashGroupContainer

# TODO update the JSON string below
json = "{}"
# create an instance of CrashGroupContainer from a JSON string
crash_group_container_instance = CrashGroupContainer.from_json(json)
# print the JSON string representation of the object
print(CrashGroupContainer.to_json())

# convert the object into a dict
crash_group_container_dict = crash_group_container_instance.to_dict()
# create an instance of CrashGroupContainer from a dict
crash_group_container_from_dict = CrashGroupContainer.from_dict(crash_group_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


