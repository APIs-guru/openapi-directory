# DeviceSecurityGroupList

List of device security groups

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[DeviceSecurityGroup]**](DeviceSecurityGroup.md) | List of device security group objects | [optional] 

## Example

```python
from openapi_client.models.device_security_group_list import DeviceSecurityGroupList

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceSecurityGroupList from a JSON string
device_security_group_list_instance = DeviceSecurityGroupList.from_json(json)
# print the JSON string representation of the object
print(DeviceSecurityGroupList.to_json())

# convert the object into a dict
device_security_group_list_dict = device_security_group_list_instance.to_dict()
# create an instance of DeviceSecurityGroupList from a dict
device_security_group_list_from_dict = DeviceSecurityGroupList.from_dict(device_security_group_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


