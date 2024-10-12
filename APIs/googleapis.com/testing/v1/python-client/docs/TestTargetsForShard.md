# TestTargetsForShard

Test targets for a shard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**test_targets** | **List[str]** | Group of packages, classes, and/or test methods to be run for each shard. The targets need to be specified in AndroidJUnitRunner argument format. For example, \&quot;package com.my.packages\&quot; \&quot;class com.my.package.MyClass\&quot;. The number of test_targets must be greater than 0. | [optional] 

## Example

```python
from openapi_client.models.test_targets_for_shard import TestTargetsForShard

# TODO update the JSON string below
json = "{}"
# create an instance of TestTargetsForShard from a JSON string
test_targets_for_shard_instance = TestTargetsForShard.from_json(json)
# print the JSON string representation of the object
print(TestTargetsForShard.to_json())

# convert the object into a dict
test_targets_for_shard_dict = test_targets_for_shard_instance.to_dict()
# create an instance of TestTargetsForShard from a dict
test_targets_for_shard_from_dict = TestTargetsForShard.from_dict(test_targets_for_shard_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


