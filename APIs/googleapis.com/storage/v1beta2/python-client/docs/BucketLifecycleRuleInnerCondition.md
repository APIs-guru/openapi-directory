# BucketLifecycleRuleInnerCondition

The condition(s) under which the action will be taken.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age** | **int** | Age of an object (in days). This condition is satisfied when an object reaches the specified age. | [optional] 
**created_before** | **date** | A date in RFC 3339 format with only the date part, e.g. \&quot;2013-01-15\&quot;. This condition is satisfied when an object is created before midnight of the specified date in UTC. | [optional] 
**is_live** | **bool** | Relevant only for versioned objects. If the value is true, this condition matches live objects; if the value is false, it matches archived objects. | [optional] 
**num_newer_versions** | **int** | Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version) newer than this version of the object. | [optional] 

## Example

```python
from openapi_client.models.bucket_lifecycle_rule_inner_condition import BucketLifecycleRuleInnerCondition

# TODO update the JSON string below
json = "{}"
# create an instance of BucketLifecycleRuleInnerCondition from a JSON string
bucket_lifecycle_rule_inner_condition_instance = BucketLifecycleRuleInnerCondition.from_json(json)
# print the JSON string representation of the object
print(BucketLifecycleRuleInnerCondition.to_json())

# convert the object into a dict
bucket_lifecycle_rule_inner_condition_dict = bucket_lifecycle_rule_inner_condition_instance.to_dict()
# create an instance of BucketLifecycleRuleInnerCondition from a dict
bucket_lifecycle_rule_inner_condition_from_dict = BucketLifecycleRuleInnerCondition.from_dict(bucket_lifecycle_rule_inner_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


