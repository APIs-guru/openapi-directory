# Bucket

A bucket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acl** | [**List[BucketAccessControl]**](BucketAccessControl.md) | Access controls on the bucket. | [optional] 
**autoclass** | [**BucketAutoclass**](BucketAutoclass.md) |  | [optional] 
**billing** | [**BucketBilling**](BucketBilling.md) |  | [optional] 
**cors** | [**List[BucketCorsInner]**](BucketCorsInner.md) | The bucket&#39;s Cross-Origin Resource Sharing (CORS) configuration. | [optional] 
**custom_placement_config** | [**BucketCustomPlacementConfig**](BucketCustomPlacementConfig.md) |  | [optional] 
**default_event_based_hold** | **bool** | The default value for event-based hold on newly created objects in this bucket. Event-based hold is a way to retain objects indefinitely until an event occurs, signified by the hold&#39;s release. After being released, such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false. Objects under event-based hold cannot be deleted, overwritten or archived until the hold is removed. | [optional] 
**default_object_acl** | [**List[ObjectAccessControl]**](ObjectAccessControl.md) | Default access controls to apply to new objects when no ACL is provided. | [optional] 
**encryption** | [**BucketEncryption**](BucketEncryption.md) |  | [optional] 
**etag** | **str** | HTTP 1.1 Entity tag for the bucket. | [optional] 
**hierarchical_namespace** | [**BucketHierarchicalNamespace**](BucketHierarchicalNamespace.md) |  | [optional] 
**iam_configuration** | [**BucketIamConfiguration**](BucketIamConfiguration.md) |  | [optional] 
**id** | **str** | The ID of the bucket. For buckets, the id and name properties are the same. | [optional] 
**kind** | **str** | The kind of item this is. For buckets, this is always storage#bucket. | [optional] [default to 'storage#bucket']
**labels** | **Dict[str, str]** | User-provided labels, in key/value pairs. | [optional] 
**lifecycle** | [**BucketLifecycle**](BucketLifecycle.md) |  | [optional] 
**location** | **str** | The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to US. See the developer&#39;s guide for the authoritative list. | [optional] 
**location_type** | **str** | The type of the bucket location. | [optional] 
**logging** | [**BucketLogging**](BucketLogging.md) |  | [optional] 
**metageneration** | **str** | The metadata generation of this bucket. | [optional] 
**name** | **str** | The name of the bucket. | [optional] 
**object_retention** | [**BucketObjectRetention**](BucketObjectRetention.md) |  | [optional] 
**owner** | [**BucketOwner**](BucketOwner.md) |  | [optional] 
**project_number** | **str** | The project number of the project the bucket belongs to. | [optional] 
**retention_policy** | [**BucketRetentionPolicy**](BucketRetentionPolicy.md) |  | [optional] 
**rpo** | **str** | The Recovery Point Objective (RPO) of this bucket. Set to ASYNC_TURBO to turn on Turbo Replication on a bucket. | [optional] 
**satisfies_pzs** | **bool** | Reserved for future use. | [optional] 
**self_link** | **str** | The URI of this bucket. | [optional] 
**soft_delete_policy** | [**BucketSoftDeletePolicy**](BucketSoftDeletePolicy.md) |  | [optional] 
**storage_class** | **str** | The bucket&#39;s default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, ARCHIVE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see storage classes. | [optional] 
**time_created** | **datetime** | The creation time of the bucket in RFC 3339 format. | [optional] 
**updated** | **datetime** | The modification time of the bucket in RFC 3339 format. | [optional] 
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


