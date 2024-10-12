# RulesEngineListResult

Result of the request to list Rules Engine Configurations. It contains a list of RulesEngine objects and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of RulesEngine objects if there are any. | [optional] 
**value** | [**List[RulesEngine]**](RulesEngine.md) | List of rulesEngines within a Front Door. | [optional] [readonly] 

## Example

```python
from openapi_client.models.rules_engine_list_result import RulesEngineListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RulesEngineListResult from a JSON string
rules_engine_list_result_instance = RulesEngineListResult.from_json(json)
# print the JSON string representation of the object
print(RulesEngineListResult.to_json())

# convert the object into a dict
rules_engine_list_result_dict = rules_engine_list_result_instance.to_dict()
# create an instance of RulesEngineListResult from a dict
rules_engine_list_result_from_dict = RulesEngineListResult.from_dict(rules_engine_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


