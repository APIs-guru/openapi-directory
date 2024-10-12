# GetVulnzOccurrencesSummaryResponse

A summary of how many vulnz occurrences there are per severity type. counts by groups, or if we should have different summary messages like this.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**List[SeverityCount]**](SeverityCount.md) | A map of how many occurrences were found for each severity. | [optional] 

## Example

```python
from openapi_client.models.get_vulnz_occurrences_summary_response import GetVulnzOccurrencesSummaryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetVulnzOccurrencesSummaryResponse from a JSON string
get_vulnz_occurrences_summary_response_instance = GetVulnzOccurrencesSummaryResponse.from_json(json)
# print the JSON string representation of the object
print(GetVulnzOccurrencesSummaryResponse.to_json())

# convert the object into a dict
get_vulnz_occurrences_summary_response_dict = get_vulnz_occurrences_summary_response_instance.to_dict()
# create an instance of GetVulnzOccurrencesSummaryResponse from a dict
get_vulnz_occurrences_summary_response_from_dict = GetVulnzOccurrencesSummaryResponse.from_dict(get_vulnz_occurrences_summary_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


