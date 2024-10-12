# BlockchainMemberPropertiesUpdate

Update the payload of the blockchain member properties for a blockchain member.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consortium_management_account_password** | **str** | Sets the managed consortium management account password. | [optional] 
**firewall_rules** | [**List[FirewallRule]**](FirewallRule.md) | Gets or sets the firewall rules. | [optional] 
**password** | **str** | Sets the transaction node dns endpoint basic auth password. | [optional] 

## Example

```python
from openapi_client.models.blockchain_member_properties_update import BlockchainMemberPropertiesUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of BlockchainMemberPropertiesUpdate from a JSON string
blockchain_member_properties_update_instance = BlockchainMemberPropertiesUpdate.from_json(json)
# print the JSON string representation of the object
print(BlockchainMemberPropertiesUpdate.to_json())

# convert the object into a dict
blockchain_member_properties_update_dict = blockchain_member_properties_update_instance.to_dict()
# create an instance of BlockchainMemberPropertiesUpdate from a dict
blockchain_member_properties_update_from_dict = BlockchainMemberPropertiesUpdate.from_dict(blockchain_member_properties_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


