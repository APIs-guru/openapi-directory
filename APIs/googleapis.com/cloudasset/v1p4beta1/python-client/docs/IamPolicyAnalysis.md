# IamPolicyAnalysis

An analysis message to group the query and results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_query** | [**IamPolicyAnalysisQuery**](IamPolicyAnalysisQuery.md) |  | [optional] 
**analysis_results** | [**List[IamPolicyAnalysisResult]**](IamPolicyAnalysisResult.md) | A list of IamPolicyAnalysisResult that matches the analysis query, or empty if no result is found. | [optional] 
**fully_explored** | **bool** | Represents whether all entries in the analysis_results have been fully explored to answer the query. | [optional] 

## Example

```python
from openapi_client.models.iam_policy_analysis import IamPolicyAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of IamPolicyAnalysis from a JSON string
iam_policy_analysis_instance = IamPolicyAnalysis.from_json(json)
# print the JSON string representation of the object
print(IamPolicyAnalysis.to_json())

# convert the object into a dict
iam_policy_analysis_dict = iam_policy_analysis_instance.to_dict()
# create an instance of IamPolicyAnalysis from a dict
iam_policy_analysis_from_dict = IamPolicyAnalysis.from_dict(iam_policy_analysis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


