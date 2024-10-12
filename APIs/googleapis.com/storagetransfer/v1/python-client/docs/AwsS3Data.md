# AwsS3Data

An AwsS3Data resource can be a data source, but not a data sink. In an AwsS3Data resource, an object's name is the S3 object's key name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aws_access_key** | [**AwsAccessKey**](AwsAccessKey.md) |  | [optional] 
**bucket_name** | **str** | Required. S3 Bucket name (see [Creating a bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/create-bucket-get-location-example.html)). | [optional] 
**cloudfront_domain** | **str** | Optional. Cloudfront domain name pointing to this bucket (as origin), to use when fetching. Format: &#x60;https://{id}.cloudfront.net&#x60; or any valid custom domain &#x60;https://...&#x60; | [optional] 
**credentials_secret** | **str** | Optional. The Resource name of a secret in Secret Manager. AWS credentials must be stored in Secret Manager in JSON format: { \&quot;access_key_id\&quot;: \&quot;ACCESS_KEY_ID\&quot;, \&quot;secret_access_key\&quot;: \&quot;SECRET_ACCESS_KEY\&quot; } GoogleServiceAccount must be granted &#x60;roles/secretmanager.secretAccessor&#x60; for the resource. See [Configure access to a source: Amazon S3] (https://cloud.google.com/storage-transfer/docs/source-amazon-s3#secret_manager) for more information. If &#x60;credentials_secret&#x60; is specified, do not specify role_arn or aws_access_key. This feature is in [preview](https://cloud.google.com/terms/service-terms#1). Format: &#x60;projects/{project_number}/secrets/{secret_name}&#x60; | [optional] 
**path** | **str** | Root path to transfer objects. Must be an empty string or full path name that ends with a &#39;/&#39;. This field is treated as an object prefix. As such, it should generally not begin with a &#39;/&#39;. | [optional] 
**role_arn** | **str** | The Amazon Resource Name (ARN) of the role to support temporary credentials via &#x60;AssumeRoleWithWebIdentity&#x60;. For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a &#x60;AssumeRoleWithWebIdentity&#x60; call for the provided role using the GoogleServiceAccount for this project. | [optional] 

## Example

```python
from openapi_client.models.aws_s3_data import AwsS3Data

# TODO update the JSON string below
json = "{}"
# create an instance of AwsS3Data from a JSON string
aws_s3_data_instance = AwsS3Data.from_json(json)
# print the JSON string representation of the object
print(AwsS3Data.to_json())

# convert the object into a dict
aws_s3_data_dict = aws_s3_data_instance.to_dict()
# create an instance of AwsS3Data from a dict
aws_s3_data_from_dict = AwsS3Data.from_dict(aws_s3_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


