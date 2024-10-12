# DiagnosticAnalysis

Class representing a diagnostic analysis done on an application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | DiagnosticAnalysis resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.diagnostic_analysis import DiagnosticAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticAnalysis from a JSON string
diagnostic_analysis_instance = DiagnosticAnalysis.from_json(json)
# print the JSON string representation of the object
print(DiagnosticAnalysis.to_json())

# convert the object into a dict
diagnostic_analysis_dict = diagnostic_analysis_instance.to_dict()
# create an instance of DiagnosticAnalysis from a dict
diagnostic_analysis_from_dict = DiagnosticAnalysis.from_dict(diagnostic_analysis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


