# PolicyDefinitionListResult

List of policy definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[PolicyDefinition]**](PolicyDefinition.md) | An array of policy definitions. | [optional] 

## Example

```python
from openapi_client.models.policy_definition_list_result import PolicyDefinitionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyDefinitionListResult from a JSON string
policy_definition_list_result_instance = PolicyDefinitionListResult.from_json(json)
# print the JSON string representation of the object
print(PolicyDefinitionListResult.to_json())

# convert the object into a dict
policy_definition_list_result_dict = policy_definition_list_result_instance.to_dict()
# create an instance of PolicyDefinitionListResult from a dict
policy_definition_list_result_from_dict = PolicyDefinitionListResult.from_dict(policy_definition_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


