# MoveAnalysisResult

An analysis result including blockers and warnings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockers** | [**List[MoveImpact]**](MoveImpact.md) | Blocking information that would prevent the target resource from moving to the specified destination at runtime. | [optional] 
**warnings** | [**List[MoveImpact]**](MoveImpact.md) | Warning information indicating that moving the target resource to the specified destination might be unsafe. This can include important policy information and configuration changes, but will not block moves at runtime. | [optional] 

## Example

```python
from openapi_client.models.move_analysis_result import MoveAnalysisResult

# TODO update the JSON string below
json = "{}"
# create an instance of MoveAnalysisResult from a JSON string
move_analysis_result_instance = MoveAnalysisResult.from_json(json)
# print the JSON string representation of the object
print(MoveAnalysisResult.to_json())

# convert the object into a dict
move_analysis_result_dict = move_analysis_result_instance.to_dict()
# create an instance of MoveAnalysisResult from a dict
move_analysis_result_from_dict = MoveAnalysisResult.from_dict(move_analysis_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


