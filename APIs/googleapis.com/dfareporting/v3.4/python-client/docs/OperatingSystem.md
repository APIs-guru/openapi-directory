# OperatingSystem

Contains information about an operating system that can be targeted by ads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dart_id** | **str** | DART ID of this operating system. This is the ID used for targeting. | [optional] 
**desktop** | **bool** | Whether this operating system is for desktop. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#operatingSystem\&quot;. | [optional] 
**mobile** | **bool** | Whether this operating system is for mobile. | [optional] 
**name** | **str** | Name of this operating system. | [optional] 

## Example

```python
from openapi_client.models.operating_system import OperatingSystem

# TODO update the JSON string below
json = "{}"
# create an instance of OperatingSystem from a JSON string
operating_system_instance = OperatingSystem.from_json(json)
# print the JSON string representation of the object
print(OperatingSystem.to_json())

# convert the object into a dict
operating_system_dict = operating_system_instance.to_dict()
# create an instance of OperatingSystem from a dict
operating_system_from_dict = OperatingSystem.from_dict(operating_system_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


