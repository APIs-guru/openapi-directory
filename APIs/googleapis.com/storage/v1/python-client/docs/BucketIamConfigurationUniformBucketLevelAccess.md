# BucketIamConfigurationUniformBucketLevelAccess

The bucket's uniform bucket-level access configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | If set, access is controlled only by bucket-level or above IAM policies. | [optional] 
**locked_time** | **datetime** | The deadline for changing iamConfiguration.uniformBucketLevelAccess.enabled from true to false in RFC 3339  format. iamConfiguration.uniformBucketLevelAccess.enabled may be changed from true to false until the locked time, after which the field is immutable. | [optional] 

## Example

```python
from openapi_client.models.bucket_iam_configuration_uniform_bucket_level_access import BucketIamConfigurationUniformBucketLevelAccess

# TODO update the JSON string below
json = "{}"
# create an instance of BucketIamConfigurationUniformBucketLevelAccess from a JSON string
bucket_iam_configuration_uniform_bucket_level_access_instance = BucketIamConfigurationUniformBucketLevelAccess.from_json(json)
# print the JSON string representation of the object
print(BucketIamConfigurationUniformBucketLevelAccess.to_json())

# convert the object into a dict
bucket_iam_configuration_uniform_bucket_level_access_dict = bucket_iam_configuration_uniform_bucket_level_access_instance.to_dict()
# create an instance of BucketIamConfigurationUniformBucketLevelAccess from a dict
bucket_iam_configuration_uniform_bucket_level_access_from_dict = BucketIamConfigurationUniformBucketLevelAccess.from_dict(bucket_iam_configuration_uniform_bucket_level_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


