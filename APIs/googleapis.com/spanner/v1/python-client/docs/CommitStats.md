# CommitStats

Additional statistics about a commit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mutation_count** | **str** | The total number of mutations for the transaction. Knowing the &#x60;mutation_count&#x60; value can help you maximize the number of mutations in a transaction and minimize the number of API round trips. You can also monitor this value to prevent transactions from exceeding the system [limit](https://cloud.google.com/spanner/quotas#limits_for_creating_reading_updating_and_deleting_data). If the number of mutations exceeds the limit, the server returns [INVALID_ARGUMENT](https://cloud.google.com/spanner/docs/reference/rest/v1/Code#ENUM_VALUES.INVALID_ARGUMENT). | [optional] 

## Example

```python
from openapi_client.models.commit_stats import CommitStats

# TODO update the JSON string below
json = "{}"
# create an instance of CommitStats from a JSON string
commit_stats_instance = CommitStats.from_json(json)
# print the JSON string representation of the object
print(CommitStats.to_json())

# convert the object into a dict
commit_stats_dict = commit_stats_instance.to_dict()
# create an instance of CommitStats from a dict
commit_stats_from_dict = CommitStats.from_dict(commit_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


