# DeviceSecurityGroupsListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**DeviceSecurityGroupsListDefaultResponseError**](DeviceSecurityGroupsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.device_security_groups_list_default_response import DeviceSecurityGroupsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceSecurityGroupsListDefaultResponse from a JSON string
device_security_groups_list_default_response_instance = DeviceSecurityGroupsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(DeviceSecurityGroupsListDefaultResponse.to_json())

# convert the object into a dict
device_security_groups_list_default_response_dict = device_security_groups_list_default_response_instance.to_dict()
# create an instance of DeviceSecurityGroupsListDefaultResponse from a dict
device_security_groups_list_default_response_from_dict = DeviceSecurityGroupsListDefaultResponse.from_dict(device_security_groups_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


