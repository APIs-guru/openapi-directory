# SmartSharding

Shards test based on previous test case timing records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targeted_shard_duration** | **str** | The amount of time tests within a shard should take. Default: 300 seconds (5 minutes). The minimum allowed: 120 seconds (2 minutes). The shard count is dynamically set based on time, up to the maximum shard limit (described below). To guarantee at least one test case for each shard, the number of shards will not exceed the number of test cases. Shard duration will be exceeded if: - The maximum shard limit is reached and there is more calculated test time remaining to allocate into shards. - Any individual test is estimated to be longer than the targeted shard duration. Shard duration is not guaranteed because smart sharding uses test case history and default durations which may not be accurate. The rules for finding the test case timing records are: - If the service has processed a test case in the last 30 days, the record of the latest successful test case will be used. - For new test cases, the average duration of other known test cases will be used. - If there are no previous test case timing records available, the default test case duration is 15 seconds. Because the actual shard duration can exceed the targeted shard duration, we recommend that you set the targeted value at least 5 minutes less than the maximum allowed test timeout (45 minutes for physical devices and 60 minutes for virtual), or that you use the custom test timeout value that you set. This approach avoids cancelling the shard before all tests can finish. Note that there is a limit for maximum number of shards. When you select one or more physical devices, the number of shards must be &lt;&#x3D; 50. When you select one or more ARM virtual devices, it must be &lt;&#x3D; 200. When you select only x86 virtual devices, it must be &lt;&#x3D; 500. To guarantee at least one test case for per shard, the number of shards will not exceed the number of test cases. Each shard created counts toward daily test quota. | [optional] 

## Example

```python
from openapi_client.models.smart_sharding import SmartSharding

# TODO update the JSON string below
json = "{}"
# create an instance of SmartSharding from a JSON string
smart_sharding_instance = SmartSharding.from_json(json)
# print the JSON string representation of the object
print(SmartSharding.to_json())

# convert the object into a dict
smart_sharding_dict = smart_sharding_instance.to_dict()
# create an instance of SmartSharding from a dict
smart_sharding_from_dict = SmartSharding.from_dict(smart_sharding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


