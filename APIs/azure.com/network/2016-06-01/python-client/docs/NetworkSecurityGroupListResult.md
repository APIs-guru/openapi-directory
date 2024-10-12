# NetworkSecurityGroupListResult

Response for ListNetworkSecurityGroups Api service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[NetworkSecurityGroup]**](NetworkSecurityGroup.md) | Gets List of NetworkSecurityGroups | [optional] 

## Example

```python
from openapi_client.models.network_security_group_list_result import NetworkSecurityGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkSecurityGroupListResult from a JSON string
network_security_group_list_result_instance = NetworkSecurityGroupListResult.from_json(json)
# print the JSON string representation of the object
print(NetworkSecurityGroupListResult.to_json())

# convert the object into a dict
network_security_group_list_result_dict = network_security_group_list_result_instance.to_dict()
# create an instance of NetworkSecurityGroupListResult from a dict
network_security_group_list_result_from_dict = NetworkSecurityGroupListResult.from_dict(network_security_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


