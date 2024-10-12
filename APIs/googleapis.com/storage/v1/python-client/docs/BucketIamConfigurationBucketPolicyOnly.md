# BucketIamConfigurationBucketPolicyOnly

The bucket's uniform bucket-level access configuration. The feature was formerly known as Bucket Policy Only. For backward compatibility, this field will be populated with identical information as the uniformBucketLevelAccess field. We recommend using the uniformBucketLevelAccess field to enable and disable the feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | If set, access is controlled only by bucket-level or above IAM policies. | [optional] 
**locked_time** | **datetime** | The deadline for changing iamConfiguration.bucketPolicyOnly.enabled from true to false in RFC 3339 format. iamConfiguration.bucketPolicyOnly.enabled may be changed from true to false until the locked time, after which the field is immutable. | [optional] 

## Example

```python
from openapi_client.models.bucket_iam_configuration_bucket_policy_only import BucketIamConfigurationBucketPolicyOnly

# TODO update the JSON string below
json = "{}"
# create an instance of BucketIamConfigurationBucketPolicyOnly from a JSON string
bucket_iam_configuration_bucket_policy_only_instance = BucketIamConfigurationBucketPolicyOnly.from_json(json)
# print the JSON string representation of the object
print(BucketIamConfigurationBucketPolicyOnly.to_json())

# convert the object into a dict
bucket_iam_configuration_bucket_policy_only_dict = bucket_iam_configuration_bucket_policy_only_instance.to_dict()
# create an instance of BucketIamConfigurationBucketPolicyOnly from a dict
bucket_iam_configuration_bucket_policy_only_from_dict = BucketIamConfigurationBucketPolicyOnly.from_dict(bucket_iam_configuration_bucket_policy_only_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


