# EffectiveNetworkSecurityGroupListResult

Response for list effective network security groups api service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[EffectiveNetworkSecurityGroup]**](EffectiveNetworkSecurityGroup.md) | Gets list of effective network security groups | [optional] 

## Example

```python
from openapi_client.models.effective_network_security_group_list_result import EffectiveNetworkSecurityGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of EffectiveNetworkSecurityGroupListResult from a JSON string
effective_network_security_group_list_result_instance = EffectiveNetworkSecurityGroupListResult.from_json(json)
# print the JSON string representation of the object
print(EffectiveNetworkSecurityGroupListResult.to_json())

# convert the object into a dict
effective_network_security_group_list_result_dict = effective_network_security_group_list_result_instance.to_dict()
# create an instance of EffectiveNetworkSecurityGroupListResult from a dict
effective_network_security_group_list_result_from_dict = EffectiveNetworkSecurityGroupListResult.from_dict(effective_network_security_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


