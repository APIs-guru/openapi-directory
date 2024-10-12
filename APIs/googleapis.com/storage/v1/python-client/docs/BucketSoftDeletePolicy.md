# BucketSoftDeletePolicy

The bucket's soft delete policy, which defines the period of time that soft-deleted objects will be retained, and cannot be permanently deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_time** | **datetime** | Server-determined value that indicates the time from which the policy, or one with a greater retention, was effective. This value is in RFC 3339 format. | [optional] 
**retention_duration_seconds** | **str** | The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted. | [optional] 

## Example

```python
from openapi_client.models.bucket_soft_delete_policy import BucketSoftDeletePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of BucketSoftDeletePolicy from a JSON string
bucket_soft_delete_policy_instance = BucketSoftDeletePolicy.from_json(json)
# print the JSON string representation of the object
print(BucketSoftDeletePolicy.to_json())

# convert the object into a dict
bucket_soft_delete_policy_dict = bucket_soft_delete_policy_instance.to_dict()
# create an instance of BucketSoftDeletePolicy from a dict
bucket_soft_delete_policy_from_dict = BucketSoftDeletePolicy.from_dict(bucket_soft_delete_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


