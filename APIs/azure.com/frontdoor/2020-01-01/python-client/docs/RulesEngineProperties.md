# RulesEngineProperties

The JSON object that contains the properties required to create a Rules Engine Configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_state** | [**ResourceState**](ResourceState.md) |  | [optional] 
**rules** | [**List[RulesEngineRule]**](RulesEngineRule.md) | A list of rules that define a particular Rules Engine Configuration. | [optional] 

## Example

```python
from openapi_client.models.rules_engine_properties import RulesEngineProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RulesEngineProperties from a JSON string
rules_engine_properties_instance = RulesEngineProperties.from_json(json)
# print the JSON string representation of the object
print(RulesEngineProperties.to_json())

# convert the object into a dict
rules_engine_properties_dict = rules_engine_properties_instance.to_dict()
# create an instance of RulesEngineProperties from a dict
rules_engine_properties_from_dict = RulesEngineProperties.from_dict(rules_engine_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


