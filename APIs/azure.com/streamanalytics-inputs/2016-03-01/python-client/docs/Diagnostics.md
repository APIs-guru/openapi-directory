# Diagnostics

Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[DiagnosticCondition]**](DiagnosticCondition.md) | A collection of zero or more conditions applicable to the resource, or to the job overall, that warrant customer attention. | [optional] [readonly] 

## Example

```python
from openapi_client.models.diagnostics import Diagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of Diagnostics from a JSON string
diagnostics_instance = Diagnostics.from_json(json)
# print the JSON string representation of the object
print(Diagnostics.to_json())

# convert the object into a dict
diagnostics_dict = diagnostics_instance.to_dict()
# create an instance of Diagnostics from a dict
diagnostics_from_dict = Diagnostics.from_dict(diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


