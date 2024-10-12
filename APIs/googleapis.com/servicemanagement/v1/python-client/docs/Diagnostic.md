# Diagnostic

Represents a diagnostic message (error or warning)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of diagnostic information provided. | [optional] 
**location** | **str** | File name and line number of the error or warning. | [optional] 
**message** | **str** | Message describing the error or warning. | [optional] 

## Example

```python
from openapi_client.models.diagnostic import Diagnostic

# TODO update the JSON string below
json = "{}"
# create an instance of Diagnostic from a JSON string
diagnostic_instance = Diagnostic.from_json(json)
# print the JSON string representation of the object
print(Diagnostic.to_json())

# convert the object into a dict
diagnostic_dict = diagnostic_instance.to_dict()
# create an instance of Diagnostic from a dict
diagnostic_from_dict = Diagnostic.from_dict(diagnostic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


