# MonitorPackageInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Package name. | 
**version** | **str** | Package version. | 

## Example

```python
from openapi_client.models.monitor_package_info import MonitorPackageInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorPackageInfo from a JSON string
monitor_package_info_instance = MonitorPackageInfo.from_json(json)
# print the JSON string representation of the object
print(MonitorPackageInfo.to_json())

# convert the object into a dict
monitor_package_info_dict = monitor_package_info_instance.to_dict()
# create an instance of MonitorPackageInfo from a dict
monitor_package_info_from_dict = MonitorPackageInfo.from_dict(monitor_package_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


