# AccountSummaries

An AccountSummary collection lists a summary of accounts, properties and views (profiles) to which the user has access. Each resource in the collection corresponds to a single AccountSummary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[AccountSummary]**](AccountSummary.md) | A list of AccountSummaries. | [optional] 
**items_per_page** | **int** | The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. | [optional] 
**kind** | **str** | Collection type. | [optional] [default to 'analytics#accountSummaries']
**next_link** | **str** | Link to next page for this AccountSummary collection. | [optional] 
**previous_link** | **str** | Link to previous page for this AccountSummary collection. | [optional] 
**start_index** | **int** | The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. | [optional] 
**total_results** | **int** | The total number of results for the query, regardless of the number of results in the response. | [optional] 
**username** | **str** | Email ID of the authenticated user | [optional] 

## Example

```python
from openapi_client.models.account_summaries import AccountSummaries

# TODO update the JSON string below
json = "{}"
# create an instance of AccountSummaries from a JSON string
account_summaries_instance = AccountSummaries.from_json(json)
# print the JSON string representation of the object
print(AccountSummaries.to_json())

# convert the object into a dict
account_summaries_dict = account_summaries_instance.to_dict()
# create an instance of AccountSummaries from a dict
account_summaries_from_dict = AccountSummaries.from_dict(account_summaries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


