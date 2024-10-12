# AnalysisDefinition

Definition of Analysis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | AnalysisDefinition resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.analysis_definition import AnalysisDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisDefinition from a JSON string
analysis_definition_instance = AnalysisDefinition.from_json(json)
# print the JSON string representation of the object
print(AnalysisDefinition.to_json())

# convert the object into a dict
analysis_definition_dict = analysis_definition_instance.to_dict()
# create an instance of AnalysisDefinition from a dict
analysis_definition_from_dict = AnalysisDefinition.from_dict(analysis_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


