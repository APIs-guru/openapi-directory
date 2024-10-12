# NetworkSecurityGroupResult

Network configuration diagnostic result corresponded provided traffic query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluated_network_security_groups** | [**List[EvaluatedNetworkSecurityGroup]**](EvaluatedNetworkSecurityGroup.md) | List of results network security groups diagnostic. | [optional] [readonly] 
**security_rule_access_result** | **str** | The network traffic is allowed or denied. Possible values are &#39;Allow&#39; and &#39;Deny&#39;. | [optional] 

## Example

```python
from openapi_client.models.network_security_group_result import NetworkSecurityGroupResult

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkSecurityGroupResult from a JSON string
network_security_group_result_instance = NetworkSecurityGroupResult.from_json(json)
# print the JSON string representation of the object
print(NetworkSecurityGroupResult.to_json())

# convert the object into a dict
network_security_group_result_dict = network_security_group_result_instance.to_dict()
# create an instance of NetworkSecurityGroupResult from a dict
network_security_group_result_from_dict = NetworkSecurityGroupResult.from_dict(network_security_group_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


