# IamPolicyAnalysisQuery

IAM policy analysis query message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_selector** | [**AccessSelector**](AccessSelector.md) |  | [optional] 
**condition_context** | [**ConditionContext**](ConditionContext.md) |  | [optional] 
**identity_selector** | [**IdentitySelector**](IdentitySelector.md) |  | [optional] 
**options** | [**Options**](Options.md) |  | [optional] 
**resource_selector** | [**ResourceSelector**](ResourceSelector.md) |  | [optional] 
**scope** | **str** | Required. The relative name of the root asset. Only resources and IAM policies within the scope will be analyzed. This can only be an organization number (such as \&quot;organizations/123\&quot;), a folder number (such as \&quot;folders/123\&quot;), a project ID (such as \&quot;projects/my-project-id\&quot;), or a project number (such as \&quot;projects/12345\&quot;). To know how to get organization ID, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id). To know how to get folder or project ID, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects). | [optional] 

## Example

```python
from openapi_client.models.iam_policy_analysis_query import IamPolicyAnalysisQuery

# TODO update the JSON string below
json = "{}"
# create an instance of IamPolicyAnalysisQuery from a JSON string
iam_policy_analysis_query_instance = IamPolicyAnalysisQuery.from_json(json)
# print the JSON string representation of the object
print(IamPolicyAnalysisQuery.to_json())

# convert the object into a dict
iam_policy_analysis_query_dict = iam_policy_analysis_query_instance.to_dict()
# create an instance of IamPolicyAnalysisQuery from a dict
iam_policy_analysis_query_from_dict = IamPolicyAnalysisQuery.from_dict(iam_policy_analysis_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


