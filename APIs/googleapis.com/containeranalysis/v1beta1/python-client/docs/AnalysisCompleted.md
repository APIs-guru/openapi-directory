# AnalysisCompleted

Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_type** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.analysis_completed import AnalysisCompleted

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisCompleted from a JSON string
analysis_completed_instance = AnalysisCompleted.from_json(json)
# print the JSON string representation of the object
print(AnalysisCompleted.to_json())

# convert the object into a dict
analysis_completed_dict = analysis_completed_instance.to_dict()
# create an instance of AnalysisCompleted from a dict
analysis_completed_from_dict = AnalysisCompleted.from_dict(analysis_completed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


