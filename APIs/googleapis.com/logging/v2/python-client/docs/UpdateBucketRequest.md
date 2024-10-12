# UpdateBucketRequest

The parameters to UpdateBucket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | [**LogBucket**](LogBucket.md) |  | [optional] 
**name** | **str** | Required. The full resource name of the bucket to update. \&quot;projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]\&quot; \&quot;organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]\&quot; \&quot;billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]\&quot; \&quot;folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]\&quot; For example:\&quot;projects/my-project/locations/global/buckets/my-bucket\&quot; | [optional] 
**update_mask** | **str** | Required. Field mask that specifies the fields in bucket that need an update. A bucket field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask&#x3D;retention_days | [optional] 

## Example

```python
from openapi_client.models.update_bucket_request import UpdateBucketRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBucketRequest from a JSON string
update_bucket_request_instance = UpdateBucketRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateBucketRequest.to_json())

# convert the object into a dict
update_bucket_request_dict = update_bucket_request_instance.to_dict()
# create an instance of UpdateBucketRequest from a dict
update_bucket_request_from_dict = UpdateBucketRequest.from_dict(update_bucket_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


