# AddRulesRequest

A request to add a user-specified stream filtering rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add** | [**List[RuleNoId]**](RuleNoId.md) |  | 

## Example

```python
from openapi_client.models.add_rules_request import AddRulesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddRulesRequest from a JSON string
add_rules_request_instance = AddRulesRequest.from_json(json)
# print the JSON string representation of the object
print(AddRulesRequest.to_json())

# convert the object into a dict
add_rules_request_dict = add_rules_request_instance.to_dict()
# create an instance of AddRulesRequest from a dict
add_rules_request_from_dict = AddRulesRequest.from_dict(add_rules_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


