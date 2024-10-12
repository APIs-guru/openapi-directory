# ListEnabledBuiltInVariablesResponse

A list of enabled built-in variables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**built_in_variable** | [**List[BuiltInVariable]**](BuiltInVariable.md) | All GTM BuiltInVariables of a GTM container. | [optional] 
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_enabled_built_in_variables_response import ListEnabledBuiltInVariablesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEnabledBuiltInVariablesResponse from a JSON string
list_enabled_built_in_variables_response_instance = ListEnabledBuiltInVariablesResponse.from_json(json)
# print the JSON string representation of the object
print(ListEnabledBuiltInVariablesResponse.to_json())

# convert the object into a dict
list_enabled_built_in_variables_response_dict = list_enabled_built_in_variables_response_instance.to_dict()
# create an instance of ListEnabledBuiltInVariablesResponse from a dict
list_enabled_built_in_variables_response_from_dict = ListEnabledBuiltInVariablesResponse.from_dict(list_enabled_built_in_variables_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


