# BucketRetentionPolicy

The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_time** | **datetime** | Server-determined value that indicates the time from which policy was enforced and effective. This value is in RFC 3339 format. | [optional] 
**is_locked** | **bool** | Once locked, an object retention policy cannot be modified. | [optional] 
**retention_period** | **str** | The duration in seconds that objects need to be retained. Retention duration must be greater than zero and less than 100 years. Note that enforcement of retention periods less than a day is not guaranteed. Such periods should only be used for testing purposes. | [optional] 

## Example

```python
from openapi_client.models.bucket_retention_policy import BucketRetentionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of BucketRetentionPolicy from a JSON string
bucket_retention_policy_instance = BucketRetentionPolicy.from_json(json)
# print the JSON string representation of the object
print(BucketRetentionPolicy.to_json())

# convert the object into a dict
bucket_retention_policy_dict = bucket_retention_policy_instance.to_dict()
# create an instance of BucketRetentionPolicy from a dict
bucket_retention_policy_from_dict = BucketRetentionPolicy.from_dict(bucket_retention_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


