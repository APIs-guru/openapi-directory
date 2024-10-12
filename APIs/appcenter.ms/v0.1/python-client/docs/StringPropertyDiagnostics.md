# StringPropertyDiagnostics

String property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | String property value. | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.string_property_diagnostics import StringPropertyDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of StringPropertyDiagnostics from a JSON string
string_property_diagnostics_instance = StringPropertyDiagnostics.from_json(json)
# print the JSON string representation of the object
print(StringPropertyDiagnostics.to_json())

# convert the object into a dict
string_property_diagnostics_dict = string_property_diagnostics_instance.to_dict()
# create an instance of StringPropertyDiagnostics from a dict
string_property_diagnostics_from_dict = StringPropertyDiagnostics.from_dict(string_property_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


