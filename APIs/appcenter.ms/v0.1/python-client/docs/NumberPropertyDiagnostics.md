# NumberPropertyDiagnostics

Number property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **float** | Number property value. | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.number_property_diagnostics import NumberPropertyDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of NumberPropertyDiagnostics from a JSON string
number_property_diagnostics_instance = NumberPropertyDiagnostics.from_json(json)
# print the JSON string representation of the object
print(NumberPropertyDiagnostics.to_json())

# convert the object into a dict
number_property_diagnostics_dict = number_property_diagnostics_instance.to_dict()
# create an instance of NumberPropertyDiagnostics from a dict
number_property_diagnostics_from_dict = NumberPropertyDiagnostics.from_dict(number_property_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


