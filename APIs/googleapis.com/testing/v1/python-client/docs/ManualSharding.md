# ManualSharding

Shards test cases into the specified groups of packages, classes, and/or methods. With manual sharding enabled, specifying test targets via environment_variables or in InstrumentationTest is invalid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**test_targets_for_shard** | [**List[TestTargetsForShard]**](TestTargetsForShard.md) | Required. Group of packages, classes, and/or test methods to be run for each manually-created shard. You must specify at least one shard if this field is present. When you select one or more physical devices, the number of repeated test_targets_for_shard must be &lt;&#x3D; 50. When you select one or more ARM virtual devices, it must be &lt;&#x3D; 200. When you select only x86 virtual devices, it must be &lt;&#x3D; 500. | [optional] 

## Example

```python
from openapi_client.models.manual_sharding import ManualSharding

# TODO update the JSON string below
json = "{}"
# create an instance of ManualSharding from a JSON string
manual_sharding_instance = ManualSharding.from_json(json)
# print the JSON string representation of the object
print(ManualSharding.to_json())

# convert the object into a dict
manual_sharding_dict = manual_sharding_instance.to_dict()
# create an instance of ManualSharding from a dict
manual_sharding_from_dict = ManualSharding.from_dict(manual_sharding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


