# TransactionNodePropertiesUpdate

Update the payload of the transaction node properties in the transaction node payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firewall_rules** | [**List[FirewallRule]**](FirewallRule.md) | Gets or sets the firewall rules. | [optional] 
**password** | **str** | Sets the transaction node dns endpoint basic auth password. | [optional] 

## Example

```python
from openapi_client.models.transaction_node_properties_update import TransactionNodePropertiesUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionNodePropertiesUpdate from a JSON string
transaction_node_properties_update_instance = TransactionNodePropertiesUpdate.from_json(json)
# print the JSON string representation of the object
print(TransactionNodePropertiesUpdate.to_json())

# convert the object into a dict
transaction_node_properties_update_dict = transaction_node_properties_update_instance.to_dict()
# create an instance of TransactionNodePropertiesUpdate from a dict
transaction_node_properties_update_from_dict = TransactionNodePropertiesUpdate.from_dict(transaction_node_properties_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


