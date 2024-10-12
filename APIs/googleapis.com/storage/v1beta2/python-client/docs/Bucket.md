# Bucket

A bucket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acl** | [**List[BucketAccessControl]**](BucketAccessControl.md) | Access controls on the bucket. | [optional] 
**cors** | [**List[BucketCorsInner]**](BucketCorsInner.md) | The bucket&#39;s Cross-Origin Resource Sharing (CORS) configuration. | [optional] 
**default_object_acl** | [**List[ObjectAccessControl]**](ObjectAccessControl.md) | Default access controls to apply to new objects when no ACL is provided. | [optional] 
**etag** | **str** | HTTP 1.1 Entity tag for the bucket. | [optional] 
**id** | **str** | The ID of the bucket. | [optional] 
**kind** | **str** | The kind of item this is. For buckets, this is always storage#bucket. | [optional] [default to 'storage#bucket']
**lifecycle** | [**BucketLifecycle**](BucketLifecycle.md) |  | [optional] 
**location** | **str** | The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Typical values are US and EU. Defaults to US. See the developer&#39;s guide for the authoritative list. | [optional] 
**logging** | [**BucketLogging**](BucketLogging.md) |  | [optional] 
**metageneration** | **str** | The metadata generation of this bucket. | [optional] 
**name** | **str** | The name of the bucket. | [optional] 
**owner** | [**BucketOwner**](BucketOwner.md) |  | [optional] 
**self_link** | **str** | The URI of this bucket. | [optional] 
**storage_class** | **str** | The bucket&#39;s storage class. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Typical values are STANDARD and DURABLE_REDUCED_AVAILABILITY. Defaults to STANDARD. See the developer&#39;s guide for the authoritative list. | [optional] 
**time_created** | **datetime** | Creation time of the bucket in RFC 3339 format. | [optional] 
**versioning** | [**BucketVersioning**](BucketVersioning.md) |  | [optional] 
**website** | [**BucketWebsite**](BucketWebsite.md) |  | [optional] 

## Example

```python
from openapi_client.models.bucket import Bucket

# TODO update the JSON string below
json = "{}"
# create an instance of Bucket from a JSON string
bucket_instance = Bucket.from_json(json)
# print the JSON string representation of the object
print(Bucket.to_json())

# convert the object into a dict
bucket_dict = bucket_instance.to_dict()
# create an instance of Bucket from a dict
bucket_from_dict = Bucket.from_dict(bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


