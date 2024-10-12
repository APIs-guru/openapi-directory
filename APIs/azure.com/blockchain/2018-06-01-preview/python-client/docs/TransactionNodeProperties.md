# TransactionNodeProperties

Payload of transaction node properties payload in the transaction node payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns** | **str** | Gets or sets the transaction node dns endpoint. | [optional] [readonly] 
**firewall_rules** | [**List[FirewallRule]**](FirewallRule.md) | Gets or sets the firewall rules. | [optional] 
**password** | **str** | Sets the transaction node dns endpoint basic auth password. | [optional] 
**provisioning_state** | **str** | Gets or sets the blockchain member provision state. | [optional] [readonly] 
**public_key** | **str** | Gets or sets the transaction node public key. | [optional] [readonly] 
**user_name** | **str** | Gets or sets the transaction node dns endpoint basic auth user name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.transaction_node_properties import TransactionNodeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionNodeProperties from a JSON string
transaction_node_properties_instance = TransactionNodeProperties.from_json(json)
# print the JSON string representation of the object
print(TransactionNodeProperties.to_json())

# convert the object into a dict
transaction_node_properties_dict = transaction_node_properties_instance.to_dict()
# create an instance of TransactionNodeProperties from a dict
transaction_node_properties_from_dict = TransactionNodeProperties.from_dict(transaction_node_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


