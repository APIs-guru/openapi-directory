# ShardSummary

Result summary for a shard in an environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runs** | **List[object]** | Summaries of the steps belonging to the shard. With flaky_test_attempts enabled from TestExecutionService, more than one run (Step) can present. And the runs will be sorted by multistep_number. | [optional] 
**shard_result** | [**MergedResult**](MergedResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.shard_summary import ShardSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ShardSummary from a JSON string
shard_summary_instance = ShardSummary.from_json(json)
# print the JSON string representation of the object
print(ShardSummary.to_json())

# convert the object into a dict
shard_summary_dict = shard_summary_instance.to_dict()
# create an instance of ShardSummary from a dict
shard_summary_from_dict = ShardSummary.from_dict(shard_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


