# ListVariablesResponse

List Variables Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**variables** | [**List[Variable]**](Variable.md) | All GTM Variables of a GTM Container. | [optional] 

## Example

```python
from openapi_client.models.list_variables_response import ListVariablesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListVariablesResponse from a JSON string
list_variables_response_instance = ListVariablesResponse.from_json(json)
# print the JSON string representation of the object
print(ListVariablesResponse.to_json())

# convert the object into a dict
list_variables_response_dict = list_variables_response_instance.to_dict()
# create an instance of ListVariablesResponse from a dict
list_variables_response_from_dict = ListVariablesResponse.from_dict(list_variables_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


