# AnalyzeIamPolicyLongrunningRequest

A request message for AssetService.AnalyzeIamPolicyLongrunning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_query** | [**IamPolicyAnalysisQuery**](IamPolicyAnalysisQuery.md) |  | [optional] 
**output_config** | [**IamPolicyAnalysisOutputConfig**](IamPolicyAnalysisOutputConfig.md) |  | [optional] 
**saved_analysis_query** | **str** | Optional. The name of a saved query, which must be in the format of: * projects/project_number/savedQueries/saved_query_id * folders/folder_number/savedQueries/saved_query_id * organizations/organization_number/savedQueries/saved_query_id If both &#x60;analysis_query&#x60; and &#x60;saved_analysis_query&#x60; are provided, they will be merged together with the &#x60;saved_analysis_query&#x60; as base and the &#x60;analysis_query&#x60; as overrides. For more details of the merge behavior, refer to the [MergeFrom](https://developers.google.com/protocol-buffers/docs/reference/cpp/google.protobuf.message#Message.MergeFrom.details) doc. Note that you cannot override primitive fields with default value, such as 0 or empty string, etc., because we use proto3, which doesn&#39;t support field presence yet. | [optional] 

## Example

```python
from openapi_client.models.analyze_iam_policy_longrunning_request import AnalyzeIamPolicyLongrunningRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeIamPolicyLongrunningRequest from a JSON string
analyze_iam_policy_longrunning_request_instance = AnalyzeIamPolicyLongrunningRequest.from_json(json)
# print the JSON string representation of the object
print(AnalyzeIamPolicyLongrunningRequest.to_json())

# convert the object into a dict
analyze_iam_policy_longrunning_request_dict = analyze_iam_policy_longrunning_request_instance.to_dict()
# create an instance of AnalyzeIamPolicyLongrunningRequest from a dict
analyze_iam_policy_longrunning_request_from_dict = AnalyzeIamPolicyLongrunningRequest.from_dict(analyze_iam_policy_longrunning_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


