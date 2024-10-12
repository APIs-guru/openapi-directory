# DeviceSecurityGroup

The device security group resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DeviceSecurityGroupProperties**](DeviceSecurityGroupProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.device_security_group import DeviceSecurityGroup

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceSecurityGroup from a JSON string
device_security_group_instance = DeviceSecurityGroup.from_json(json)
# print the JSON string representation of the object
print(DeviceSecurityGroup.to_json())

# convert the object into a dict
device_security_group_dict = device_security_group_instance.to_dict()
# create an instance of DeviceSecurityGroup from a dict
device_security_group_from_dict = DeviceSecurityGroup.from_dict(device_security_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


