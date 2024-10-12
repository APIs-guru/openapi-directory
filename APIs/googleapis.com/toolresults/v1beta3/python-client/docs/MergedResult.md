# MergedResult

Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outcome** | [**Outcome**](Outcome.md) |  | [optional] 
**state** | **str** | State of the resource | [optional] 
**test_suite_overviews** | [**List[TestSuiteOverview]**](TestSuiteOverview.md) | The combined and rolled-up result of each test suite that was run as part of this environment. Combining: When the test cases from a suite are run in different steps (sharding), the results are added back together in one overview. (e.g., if shard1 has 2 failures and shard2 has 1 failure than the overview failure_count &#x3D; 3). Rollup: When test cases from the same suite are run multiple times (flaky), the results are combined (e.g., if testcase1.run1 fails, testcase1.run2 passes, and both testcase2.run1 and testcase2.run2 fail then the overview flaky_count &#x3D; 1 and failure_count &#x3D; 1). | [optional] 

## Example

```python
from openapi_client.models.merged_result import MergedResult

# TODO update the JSON string below
json = "{}"
# create an instance of MergedResult from a JSON string
merged_result_instance = MergedResult.from_json(json)
# print the JSON string representation of the object
print(MergedResult.to_json())

# convert the object into a dict
merged_result_dict = merged_result_instance.to_dict()
# create an instance of MergedResult from a dict
merged_result_from_dict = MergedResult.from_dict(merged_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


