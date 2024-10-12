# OperatingSystemVersion

Contains information about a particular version of an operating system that can be targeted by ads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of this operating system version. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#operatingSystemVersion\&quot;. | [optional] 
**major_version** | **str** | Major version (leftmost number) of this operating system version. | [optional] 
**minor_version** | **str** | Minor version (number after the first dot) of this operating system version. | [optional] 
**name** | **str** | Name of this operating system version. | [optional] 
**operating_system** | [**OperatingSystem**](OperatingSystem.md) |  | [optional] 

## Example

```python
from openapi_client.models.operating_system_version import OperatingSystemVersion

# TODO update the JSON string below
json = "{}"
# create an instance of OperatingSystemVersion from a JSON string
operating_system_version_instance = OperatingSystemVersion.from_json(json)
# print the JSON string representation of the object
print(OperatingSystemVersion.to_json())

# convert the object into a dict
operating_system_version_dict = operating_system_version_instance.to_dict()
# create an instance of OperatingSystemVersion from a dict
operating_system_version_from_dict = OperatingSystemVersion.from_dict(operating_system_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


