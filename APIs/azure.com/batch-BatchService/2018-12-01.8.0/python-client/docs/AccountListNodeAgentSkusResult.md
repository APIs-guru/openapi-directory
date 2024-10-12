# AccountListNodeAgentSkusResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** |  | [optional] 
**value** | [**List[NodeAgentSku]**](NodeAgentSku.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_list_node_agent_skus_result import AccountListNodeAgentSkusResult

# TODO update the JSON string below
json = "{}"
# create an instance of AccountListNodeAgentSkusResult from a JSON string
account_list_node_agent_skus_result_instance = AccountListNodeAgentSkusResult.from_json(json)
# print the JSON string representation of the object
print(AccountListNodeAgentSkusResult.to_json())

# convert the object into a dict
account_list_node_agent_skus_result_dict = account_list_node_agent_skus_result_instance.to_dict()
# create an instance of AccountListNodeAgentSkusResult from a dict
account_list_node_agent_skus_result_from_dict = AccountListNodeAgentSkusResult.from_dict(account_list_node_agent_skus_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


