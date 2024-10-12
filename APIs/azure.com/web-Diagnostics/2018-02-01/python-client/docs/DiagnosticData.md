# DiagnosticData

Set of data with rendering instructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rendering_properties** | [**Rendering**](Rendering.md) |  | [optional] 
**table** | [**DataTableResponseObject**](DataTableResponseObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.diagnostic_data import DiagnosticData

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticData from a JSON string
diagnostic_data_instance = DiagnosticData.from_json(json)
# print the JSON string representation of the object
print(DiagnosticData.to_json())

# convert the object into a dict
diagnostic_data_dict = diagnostic_data_instance.to_dict()
# create an instance of DiagnosticData from a dict
diagnostic_data_from_dict = DiagnosticData.from_dict(diagnostic_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


