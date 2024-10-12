# PolicySetDefinitionListResult

List of policy set definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[PolicySetDefinition]**](PolicySetDefinition.md) | An array of policy set definitions. | [optional] 

## Example

```python
from openapi_client.models.policy_set_definition_list_result import PolicySetDefinitionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PolicySetDefinitionListResult from a JSON string
policy_set_definition_list_result_instance = PolicySetDefinitionListResult.from_json(json)
# print the JSON string representation of the object
print(PolicySetDefinitionListResult.to_json())

# convert the object into a dict
policy_set_definition_list_result_dict = policy_set_definition_list_result_instance.to_dict()
# create an instance of PolicySetDefinitionListResult from a dict
policy_set_definition_list_result_from_dict = PolicySetDefinitionListResult.from_dict(policy_set_definition_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


