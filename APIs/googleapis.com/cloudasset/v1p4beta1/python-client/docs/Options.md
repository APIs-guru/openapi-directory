# Options

Contains request options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analyze_service_account_impersonation** | **bool** | Optional. If true, the response will include access analysis from identities to resources via service account impersonation. This is a very expensive operation, because many derived queries will be executed. For example, if the request analyzes for which resources user A has permission P, and there&#39;s an IAM policy states user A has iam.serviceAccounts.getAccessToken permission to a service account SA, and there&#39;s another IAM policy states service account SA has permission P to a GCP folder F, then user A potentially has access to the GCP folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis. Another example, if the request analyzes for who has permission P to a GCP folder F, and there&#39;s an IAM policy states user A has iam.serviceAccounts.actAs permission to a service account SA, and there&#39;s another IAM policy states service account SA has permission P to the GCP folder F, then user A potentially has access to the GCP folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis. Default is false. | [optional] 
**expand_groups** | **bool** | Optional. If true, the identities section of the result will expand any Google groups appearing in an IAM policy binding. If identity_selector is specified, the identity in the result will be determined by the selector, and this flag will have no effect. Default is false. | [optional] 
**expand_resources** | **bool** | Optional. If true, the resource section of the result will expand any resource attached to an IAM policy to include resources lower in the resource hierarchy. For example, if the request analyzes for which resources user A has permission P, and the results include an IAM policy with P on a GCP folder, the results will also include resources in that folder with permission P. If resource_selector is specified, the resource section of the result will be determined by the selector, and this flag will have no effect. Default is false. | [optional] 
**expand_roles** | **bool** | Optional. If true, the access section of result will expand any roles appearing in IAM policy bindings to include their permissions. If access_selector is specified, the access section of the result will be determined by the selector, and this flag will have no effect. Default is false. | [optional] 
**output_group_edges** | **bool** | Optional. If true, the result will output group identity edges, starting from the binding&#39;s group members, to any expanded identities. Default is false. | [optional] 
**output_resource_edges** | **bool** | Optional. If true, the result will output resource edges, starting from the policy attached resource, to any expanded resources. Default is false. | [optional] 

## Example

```python
from openapi_client.models.options import Options

# TODO update the JSON string below
json = "{}"
# create an instance of Options from a JSON string
options_instance = Options.from_json(json)
# print the JSON string representation of the object
print(Options.to_json())

# convert the object into a dict
options_dict = options_instance.to_dict()
# create an instance of Options from a dict
options_from_dict = Options.from_dict(options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


