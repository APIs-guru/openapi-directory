# RulesEngine

A rules engine configuration containing a list of rules that will run to modify the runtime behavior of the request and response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**properties** | [**RulesEngineProperties**](RulesEngineProperties.md) |  | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.rules_engine import RulesEngine

# TODO update the JSON string below
json = "{}"
# create an instance of RulesEngine from a JSON string
rules_engine_instance = RulesEngine.from_json(json)
# print the JSON string representation of the object
print(RulesEngine.to_json())

# convert the object into a dict
rules_engine_dict = rules_engine_instance.to_dict()
# create an instance of RulesEngine from a dict
rules_engine_from_dict = RulesEngine.from_dict(rules_engine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


