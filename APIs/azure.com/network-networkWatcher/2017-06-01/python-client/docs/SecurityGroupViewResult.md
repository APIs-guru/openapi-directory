# SecurityGroupViewResult

The information about security rules applied to the specified VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_interfaces** | [**List[SecurityGroupNetworkInterface]**](SecurityGroupNetworkInterface.md) | List of network interfaces on the specified VM. | [optional] 

## Example

```python
from openapi_client.models.security_group_view_result import SecurityGroupViewResult

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityGroupViewResult from a JSON string
security_group_view_result_instance = SecurityGroupViewResult.from_json(json)
# print the JSON string representation of the object
print(SecurityGroupViewResult.to_json())

# convert the object into a dict
security_group_view_result_dict = security_group_view_result_instance.to_dict()
# create an instance of SecurityGroupViewResult from a dict
security_group_view_result_from_dict = SecurityGroupViewResult.from_dict(security_group_view_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


