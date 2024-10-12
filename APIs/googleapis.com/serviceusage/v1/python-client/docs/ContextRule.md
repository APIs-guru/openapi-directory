# ContextRule

A context rule provides information about the context for an individual API element.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_request_extensions** | **List[str]** | A list of full type names or extension IDs of extensions allowed in grpc side channel from client to backend. | [optional] 
**allowed_response_extensions** | **List[str]** | A list of full type names or extension IDs of extensions allowed in grpc side channel from backend to client. | [optional] 
**provided** | **List[str]** | A list of full type names of provided contexts. | [optional] 
**requested** | **List[str]** | A list of full type names of requested contexts. | [optional] 
**selector** | **str** | Selects the methods to which this rule applies. Refer to selector for syntax details. | [optional] 

## Example

```python
from openapi_client.models.context_rule import ContextRule

# TODO update the JSON string below
json = "{}"
# create an instance of ContextRule from a JSON string
context_rule_instance = ContextRule.from_json(json)
# print the JSON string representation of the object
print(ContextRule.to_json())

# convert the object into a dict
context_rule_dict = context_rule_instance.to_dict()
# create an instance of ContextRule from a dict
context_rule_from_dict = ContextRule.from_dict(context_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


