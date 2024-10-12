# BucketLifecycle

The bucket's lifecycle configuration. See lifecycle management for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule** | [**List[BucketLifecycleRuleInner]**](BucketLifecycleRuleInner.md) | A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken. | [optional] 

## Example

```python
from openapi_client.models.bucket_lifecycle import BucketLifecycle

# TODO update the JSON string below
json = "{}"
# create an instance of BucketLifecycle from a JSON string
bucket_lifecycle_instance = BucketLifecycle.from_json(json)
# print the JSON string representation of the object
print(BucketLifecycle.to_json())

# convert the object into a dict
bucket_lifecycle_dict = bucket_lifecycle_instance.to_dict()
# create an instance of BucketLifecycle from a dict
bucket_lifecycle_from_dict = BucketLifecycle.from_dict(bucket_lifecycle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


