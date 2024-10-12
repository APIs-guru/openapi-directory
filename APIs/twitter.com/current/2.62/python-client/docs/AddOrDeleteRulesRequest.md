# AddOrDeleteRulesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add** | [**List[RuleNoId]**](RuleNoId.md) |  | 
**delete** | [**DeleteRulesRequestDelete**](DeleteRulesRequestDelete.md) |  | 

## Example

```python
from openapi_client.models.add_or_delete_rules_request import AddOrDeleteRulesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddOrDeleteRulesRequest from a JSON string
add_or_delete_rules_request_instance = AddOrDeleteRulesRequest.from_json(json)
# print the JSON string representation of the object
print(AddOrDeleteRulesRequest.to_json())

# convert the object into a dict
add_or_delete_rules_request_dict = add_or_delete_rules_request_instance.to_dict()
# create an instance of AddOrDeleteRulesRequest from a dict
add_or_delete_rules_request_from_dict = AddOrDeleteRulesRequest.from_dict(add_or_delete_rules_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


