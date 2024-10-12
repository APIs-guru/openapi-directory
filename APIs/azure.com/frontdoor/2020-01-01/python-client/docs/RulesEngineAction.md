# RulesEngineAction

One or more actions that will execute, modifying the request and/or response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_header_actions** | [**List[HeaderAction]**](HeaderAction.md) | A list of header actions to apply from the request from AFD to the origin. | [optional] 
**response_header_actions** | [**List[HeaderAction]**](HeaderAction.md) | A list of header actions to apply from the response from AFD to the client. | [optional] 
**route_configuration_override** | [**RouteConfiguration**](RouteConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.rules_engine_action import RulesEngineAction

# TODO update the JSON string below
json = "{}"
# create an instance of RulesEngineAction from a JSON string
rules_engine_action_instance = RulesEngineAction.from_json(json)
# print the JSON string representation of the object
print(RulesEngineAction.to_json())

# convert the object into a dict
rules_engine_action_dict = rules_engine_action_instance.to_dict()
# create an instance of RulesEngineAction from a dict
rules_engine_action_from_dict = RulesEngineAction.from_dict(rules_engine_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


