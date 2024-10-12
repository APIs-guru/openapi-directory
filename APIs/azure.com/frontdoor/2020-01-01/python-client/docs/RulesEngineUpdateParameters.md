# RulesEngineUpdateParameters

Rules Engine Configuration to apply to a Routing Rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[RulesEngineRule]**](RulesEngineRule.md) | A list of rules that define a particular Rules Engine Configuration. | [optional] 

## Example

```python
from openapi_client.models.rules_engine_update_parameters import RulesEngineUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RulesEngineUpdateParameters from a JSON string
rules_engine_update_parameters_instance = RulesEngineUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(RulesEngineUpdateParameters.to_json())

# convert the object into a dict
rules_engine_update_parameters_dict = rules_engine_update_parameters_instance.to_dict()
# create an instance of RulesEngineUpdateParameters from a dict
rules_engine_update_parameters_from_dict = RulesEngineUpdateParameters.from_dict(rules_engine_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


