# SummaryResults

Non-compliance summary on a particular summary level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**non_compliant_policies** | **int** | Number of non-compliant policies. | [optional] 
**non_compliant_resources** | **int** | Number of non-compliant resources. | [optional] 
**query_results_uri** | **str** | HTTP POST URI for queryResults action on Microsoft.PolicyInsights to retrieve raw results for the non-compliance summary. | [optional] 

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


