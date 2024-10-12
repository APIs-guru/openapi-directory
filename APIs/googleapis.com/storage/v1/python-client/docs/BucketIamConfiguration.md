# BucketIamConfiguration

The bucket's IAM configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_policy_only** | [**BucketIamConfigurationBucketPolicyOnly**](BucketIamConfigurationBucketPolicyOnly.md) |  | [optional] 
**public_access_prevention** | **str** | The bucket&#39;s Public Access Prevention configuration. Currently, &#39;inherited&#39; and &#39;enforced&#39; are supported. | [optional] 
**uniform_bucket_level_access** | [**BucketIamConfigurationUniformBucketLevelAccess**](BucketIamConfigurationUniformBucketLevelAccess.md) |  | [optional] 

## Example

```python
from openapi_client.models.bucket_iam_configuration import BucketIamConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of BucketIamConfiguration from a JSON string
bucket_iam_configuration_instance = BucketIamConfiguration.from_json(json)
# print the JSON string representation of the object
print(BucketIamConfiguration.to_json())

# convert the object into a dict
bucket_iam_configuration_dict = bucket_iam_configuration_instance.to_dict()
# create an instance of BucketIamConfiguration from a dict
bucket_iam_configuration_from_dict = BucketIamConfiguration.from_dict(bucket_iam_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


