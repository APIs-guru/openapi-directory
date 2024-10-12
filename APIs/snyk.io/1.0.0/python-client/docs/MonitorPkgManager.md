# MonitorPkgManager


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Package manager name. | 
**repositories** | **List[object]** | A list of package repositories (i.e. maven-central, or npm) that defaults to the canonical package registry for the given package manager. | [optional] 

## Example

```python
from openapi_client.models.monitor_pkg_manager import MonitorPkgManager

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorPkgManager from a JSON string
monitor_pkg_manager_instance = MonitorPkgManager.from_json(json)
# print the JSON string representation of the object
print(MonitorPkgManager.to_json())

# convert the object into a dict
monitor_pkg_manager_dict = monitor_pkg_manager_instance.to_dict()
# create an instance of MonitorPkgManager from a dict
monitor_pkg_manager_from_dict = MonitorPkgManager.from_dict(monitor_pkg_manager_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


