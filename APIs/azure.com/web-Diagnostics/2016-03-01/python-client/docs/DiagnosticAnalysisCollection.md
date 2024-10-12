# DiagnosticAnalysisCollection

Collection of Diagnostic Analyses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[AnalysisDefinition]**](AnalysisDefinition.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.diagnostic_analysis_collection import DiagnosticAnalysisCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticAnalysisCollection from a JSON string
diagnostic_analysis_collection_instance = DiagnosticAnalysisCollection.from_json(json)
# print the JSON string representation of the object
print(DiagnosticAnalysisCollection.to_json())

# convert the object into a dict
diagnostic_analysis_collection_dict = diagnostic_analysis_collection_instance.to_dict()
# create an instance of DiagnosticAnalysisCollection from a dict
diagnostic_analysis_collection_from_dict = DiagnosticAnalysisCollection.from_dict(diagnostic_analysis_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


