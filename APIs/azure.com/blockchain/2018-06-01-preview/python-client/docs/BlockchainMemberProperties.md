# BlockchainMemberProperties

Payload of the blockchain member properties for a blockchain member.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consortium** | **str** | Gets or sets the consortium for the blockchain member. | [optional] 
**consortium_management_account_address** | **str** | Gets the managed consortium management account address. | [optional] [readonly] 
**consortium_management_account_password** | **str** | Sets the managed consortium management account password. | [optional] 
**consortium_member_display_name** | **str** | Gets the display name of the member in the consortium. | [optional] 
**consortium_role** | **str** | Gets the role of the member in the consortium. | [optional] 
**dns** | **str** | Gets the dns endpoint of the blockchain member. | [optional] [readonly] 
**firewall_rules** | [**List[FirewallRule]**](FirewallRule.md) | Gets or sets firewall rules | [optional] 
**password** | **str** | Sets the basic auth password of the blockchain member. | [optional] 
**protocol** | **str** | Gets or sets the blockchain protocol. | [optional] 
**provisioning_state** | **str** | Gets or sets the blockchain member provision state. | [optional] [readonly] 
**public_key** | **str** | Gets the public key of the blockchain member (default transaction node). | [optional] [readonly] 
**root_contract_address** | **str** | Gets the Ethereum root contract address of the blockchain. | [optional] [readonly] 
**user_name** | **str** | Gets the auth user name of the blockchain member. | [optional] [readonly] 
**validator_nodes_sku** | [**BlockchainMemberNodesSku**](BlockchainMemberNodesSku.md) |  | [optional] 

## Example

```python
from openapi_client.models.blockchain_member_properties import BlockchainMemberProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BlockchainMemberProperties from a JSON string
blockchain_member_properties_instance = BlockchainMemberProperties.from_json(json)
# print the JSON string representation of the object
print(BlockchainMemberProperties.to_json())

# convert the object into a dict
blockchain_member_properties_dict = blockchain_member_properties_instance.to_dict()
# create an instance of BlockchainMemberProperties from a dict
blockchain_member_properties_from_dict = BlockchainMemberProperties.from_dict(blockchain_member_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


