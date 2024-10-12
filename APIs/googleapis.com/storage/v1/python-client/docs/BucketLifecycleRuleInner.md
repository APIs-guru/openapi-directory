# BucketLifecycleRuleInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**BucketLifecycleRuleInnerAction**](BucketLifecycleRuleInnerAction.md) |  | [optional] 
**condition** | [**BucketLifecycleRuleInnerCondition**](BucketLifecycleRuleInnerCondition.md) |  | [optional] 

## Example

```python
from openapi_client.models.bucket_lifecycle_rule_inner import BucketLifecycleRuleInner

# TODO update the JSON string below
json = "{}"
# create an instance of BucketLifecycleRuleInner from a JSON string
bucket_lifecycle_rule_inner_instance = BucketLifecycleRuleInner.from_json(json)
# print the JSON string representation of the object
print(BucketLifecycleRuleInner.to_json())

# convert the object into a dict
bucket_lifecycle_rule_inner_dict = bucket_lifecycle_rule_inner_instance.to_dict()
# create an instance of BucketLifecycleRuleInner from a dict
bucket_lifecycle_rule_inner_from_dict = BucketLifecycleRuleInner.from_dict(bucket_lifecycle_rule_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


