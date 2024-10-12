# AwsS3CompatibleData

An AwsS3CompatibleData resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_name** | **str** | Required. Specifies the name of the bucket. | [optional] 
**endpoint** | **str** | Required. Specifies the endpoint of the storage service. | [optional] 
**path** | **str** | Specifies the root path to transfer objects. Must be an empty string or full path name that ends with a &#39;/&#39;. This field is treated as an object prefix. As such, it should generally not begin with a &#39;/&#39;. | [optional] 
**region** | **str** | Specifies the region to sign requests with. This can be left blank if requests should be signed with an empty region. | [optional] 
**s3_metadata** | [**S3CompatibleMetadata**](S3CompatibleMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.aws_s3_compatible_data import AwsS3CompatibleData

# TODO update the JSON string below
json = "{}"
# create an instance of AwsS3CompatibleData from a JSON string
aws_s3_compatible_data_instance = AwsS3CompatibleData.from_json(json)
# print the JSON string representation of the object
print(AwsS3CompatibleData.to_json())

# convert the object into a dict
aws_s3_compatible_data_dict = aws_s3_compatible_data_instance.to_dict()
# create an instance of AwsS3CompatibleData from a dict
aws_s3_compatible_data_from_dict = AwsS3CompatibleData.from_dict(aws_s3_compatible_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


