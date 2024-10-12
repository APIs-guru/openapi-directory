# MonitorPackage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique package identifier, should take the format name@version. | 
**info** | [**MonitorPackageInfo**](MonitorPackageInfo.md) |  | 

## Example

```python
from openapi_client.models.monitor_package import MonitorPackage

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorPackage from a JSON string
monitor_package_instance = MonitorPackage.from_json(json)
# print the JSON string representation of the object
print(MonitorPackage.to_json())

# convert the object into a dict
monitor_package_dict = monitor_package_instance.to_dict()
# create an instance of MonitorPackage from a dict
monitor_package_from_dict = MonitorPackage.from_dict(monitor_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


