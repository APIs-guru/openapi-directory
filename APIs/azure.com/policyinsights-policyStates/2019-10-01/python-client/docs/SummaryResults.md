# SummaryResults

Compliance summary on a particular summary level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**non_compliant_policies** | **int** | Number of non-compliant policies. | [optional] 
**non_compliant_resources** | **int** | Number of non-compliant resources. | [optional] 
**policy_details** | [**List[ComplianceDetail]**](ComplianceDetail.md) | The policy artifact summary at this level. For query scope level, it represents policy assignment summary. For policy assignment level, it represents policy definitions summary. | [optional] 
**policy_group_details** | [**List[ComplianceDetail]**](ComplianceDetail.md) | The policy definition group summary at this level. | [optional] 
**query_results_uri** | **str** | HTTP POST URI for queryResults action on Microsoft.PolicyInsights to retrieve raw results for the compliance summary. This property will not be available by default in future API versions, but could be queried explicitly. | [optional] 
**resource_details** | [**List[ComplianceDetail]**](ComplianceDetail.md) | The resources summary at this level. | [optional] 

## Example

```python
from openapi_client.models.summary_results import SummaryResults

# TODO update the JSON string below
json = "{}"
# create an instance of SummaryResults from a JSON string
summary_results_instance = SummaryResults.from_json(json)
# print the JSON string representation of the object
print(SummaryResults.to_json())

# convert the object into a dict
summary_results_dict = summary_results_instance.to_dict()
# create an instance of SummaryResults from a dict
summary_results_from_dict = SummaryResults.from_dict(summary_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


