# BooleanPropertyDiagnostics

Boolean property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **bool** | Boolean property value. | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.boolean_property_diagnostics import BooleanPropertyDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of BooleanPropertyDiagnostics from a JSON string
boolean_property_diagnostics_instance = BooleanPropertyDiagnostics.from_json(json)
# print the JSON string representation of the object
print(BooleanPropertyDiagnostics.to_json())

# convert the object into a dict
boolean_property_diagnostics_dict = boolean_property_diagnostics_instance.to_dict()
# create an instance of BooleanPropertyDiagnostics from a dict
boolean_property_diagnostics_from_dict = BooleanPropertyDiagnostics.from_dict(boolean_property_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


