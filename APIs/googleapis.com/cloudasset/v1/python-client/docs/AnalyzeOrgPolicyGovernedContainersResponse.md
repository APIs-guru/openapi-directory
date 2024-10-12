# AnalyzeOrgPolicyGovernedContainersResponse

The response message for AssetService.AnalyzeOrgPolicyGovernedContainers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraint** | [**AnalyzerOrgPolicyConstraint**](AnalyzerOrgPolicyConstraint.md) |  | [optional] 
**governed_containers** | [**List[GoogleCloudAssetV1GovernedContainer]**](GoogleCloudAssetV1GovernedContainer.md) | The list of the analyzed governed containers. | [optional] 
**next_page_token** | **str** | The page token to fetch the next page for AnalyzeOrgPolicyGovernedContainersResponse.governed_containers. | [optional] 

## Example

```python
from openapi_client.models.analyze_org_policy_governed_containers_response import AnalyzeOrgPolicyGovernedContainersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeOrgPolicyGovernedContainersResponse from a JSON string
analyze_org_policy_governed_containers_response_instance = AnalyzeOrgPolicyGovernedContainersResponse.from_json(json)
# print the JSON string representation of the object
print(AnalyzeOrgPolicyGovernedContainersResponse.to_json())

# convert the object into a dict
analyze_org_policy_governed_containers_response_dict = analyze_org_policy_governed_containers_response_instance.to_dict()
# create an instance of AnalyzeOrgPolicyGovernedContainersResponse from a dict
analyze_org_policy_governed_containers_response_from_dict = AnalyzeOrgPolicyGovernedContainersResponse.from_dict(analyze_org_policy_governed_containers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


