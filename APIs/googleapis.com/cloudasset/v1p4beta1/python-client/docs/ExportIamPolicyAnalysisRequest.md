# ExportIamPolicyAnalysisRequest

A request message for AssetService.ExportIamPolicyAnalysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_query** | [**IamPolicyAnalysisQuery**](IamPolicyAnalysisQuery.md) |  | [optional] 
**options** | [**Options**](Options.md) |  | [optional] 
**output_config** | [**IamPolicyAnalysisOutputConfig**](IamPolicyAnalysisOutputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.export_iam_policy_analysis_request import ExportIamPolicyAnalysisRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportIamPolicyAnalysisRequest from a JSON string
export_iam_policy_analysis_request_instance = ExportIamPolicyAnalysisRequest.from_json(json)
# print the JSON string representation of the object
print(ExportIamPolicyAnalysisRequest.to_json())

# convert the object into a dict
export_iam_policy_analysis_request_dict = export_iam_policy_analysis_request_instance.to_dict()
# create an instance of ExportIamPolicyAnalysisRequest from a dict
export_iam_policy_analysis_request_from_dict = ExportIamPolicyAnalysisRequest.from_dict(export_iam_policy_analysis_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


