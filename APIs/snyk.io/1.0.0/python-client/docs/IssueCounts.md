# IssueCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[GetIssueCounts200ResponseResultsInner]**](GetIssueCounts200ResponseResultsInner.md) | A list of issue counts by day | 

## Example

```python
from openapi_client.models.issue_counts import IssueCounts

# TODO update the JSON string below
json = "{}"
# create an instance of IssueCounts from a JSON string
issue_counts_instance = IssueCounts.from_json(json)
# print the JSON string representation of the object
print(IssueCounts.to_json())

# convert the object into a dict
issue_counts_dict = issue_counts_instance.to_dict()
# create an instance of IssueCounts from a dict
issue_counts_from_dict = IssueCounts.from_dict(issue_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


