# BucketLifecycleRuleInnerAction

The action to take.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_class** | **str** | Target storage class. Required iff the type of the action is SetStorageClass. | [optional] 
**type** | **str** | Type of the action. Currently, only Delete, SetStorageClass, and AbortIncompleteMultipartUpload are supported. | [optional] 

## Example

```python
from openapi_client.models.bucket_lifecycle_rule_inner_action import BucketLifecycleRuleInnerAction

# TODO update the JSON string below
json = "{}"
# create an instance of BucketLifecycleRuleInnerAction from a JSON string
bucket_lifecycle_rule_inner_action_instance = BucketLifecycleRuleInnerAction.from_json(json)
# print the JSON string representation of the object
print(BucketLifecycleRuleInnerAction.to_json())

# convert the object into a dict
bucket_lifecycle_rule_inner_action_dict = bucket_lifecycle_rule_inner_action_instance.to_dict()
# create an instance of BucketLifecycleRuleInnerAction from a dict
bucket_lifecycle_rule_inner_action_from_dict = BucketLifecycleRuleInnerAction.from_dict(bucket_lifecycle_rule_inner_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


