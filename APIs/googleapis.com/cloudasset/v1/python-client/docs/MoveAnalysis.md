# MoveAnalysis

A message to group the analysis information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis** | [**MoveAnalysisResult**](MoveAnalysisResult.md) |  | [optional] 
**display_name** | **str** | The user friendly display name of the analysis. E.g. IAM, organization policy etc. | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.move_analysis import MoveAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of MoveAnalysis from a JSON string
move_analysis_instance = MoveAnalysis.from_json(json)
# print the JSON string representation of the object
print(MoveAnalysis.to_json())

# convert the object into a dict
move_analysis_dict = move_analysis_instance.to_dict()
# create an instance of MoveAnalysis from a dict
move_analysis_from_dict = MoveAnalysis.from_dict(move_analysis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


