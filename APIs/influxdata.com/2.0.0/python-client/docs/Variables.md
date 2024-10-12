# Variables


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**variables** | [**List[Variable]**](Variable.md) |  | [optional] 

## Example

```python
from openapi_client.models.variables import Variables

# TODO update the JSON string below
json = "{}"
# create an instance of Variables from a JSON string
variables_instance = Variables.from_json(json)
# print the JSON string representation of the object
print(Variables.to_json())

# convert the object into a dict
variables_dict = variables_instance.to_dict()
# create an instance of Variables from a dict
variables_from_dict = Variables.from_dict(variables_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


