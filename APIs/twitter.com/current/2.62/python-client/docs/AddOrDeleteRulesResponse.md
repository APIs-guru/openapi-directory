# AddOrDeleteRulesResponse

A response from modifying user-specified stream filtering rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Rule]**](Rule.md) | All user-specified stream filtering rules that were created. | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**meta** | [**RulesResponseMetadata**](RulesResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.add_or_delete_rules_response import AddOrDeleteRulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddOrDeleteRulesResponse from a JSON string
add_or_delete_rules_response_instance = AddOrDeleteRulesResponse.from_json(json)
# print the JSON string representation of the object
print(AddOrDeleteRulesResponse.to_json())

# convert the object into a dict
add_or_delete_rules_response_dict = add_or_delete_rules_response_instance.to_dict()
# create an instance of AddOrDeleteRulesResponse from a dict
add_or_delete_rules_response_from_dict = AddOrDeleteRulesResponse.from_dict(add_or_delete_rules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


