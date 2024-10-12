# AnalyzeMoveResponse

The response message for resource move analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**move_analysis** | [**List[MoveAnalysis]**](MoveAnalysis.md) | The list of analyses returned from performing the intended resource move analysis. The analysis is grouped by different Google Cloud services. | [optional] 

## Example

```python
from openapi_client.models.analyze_move_response import AnalyzeMoveResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeMoveResponse from a JSON string
analyze_move_response_instance = AnalyzeMoveResponse.from_json(json)
# print the JSON string representation of the object
print(AnalyzeMoveResponse.to_json())

# convert the object into a dict
analyze_move_response_dict = analyze_move_response_instance.to_dict()
# create an instance of AnalyzeMoveResponse from a dict
analyze_move_response_from_dict = AnalyzeMoveResponse.from_dict(analyze_move_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


