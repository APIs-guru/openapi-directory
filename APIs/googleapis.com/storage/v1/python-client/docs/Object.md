# Object

An object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acl** | [**List[ObjectAccessControl]**](ObjectAccessControl.md) | Access controls on the object. | [optional] 
**bucket** | **str** | The name of the bucket containing this object. | [optional] 
**cache_control** | **str** | Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age&#x3D;3600. | [optional] 
**component_count** | **int** | Number of underlying components that make up this object. Components are accumulated by compose operations. | [optional] 
**content_disposition** | **str** | Content-Disposition of the object data. | [optional] 
**content_encoding** | **str** | Content-Encoding of the object data. | [optional] 
**content_language** | **str** | Content-Language of the object data. | [optional] 
**content_type** | **str** | Content-Type of the object data. If an object is stored without a Content-Type, it is served as application/octet-stream. | [optional] 
**crc32c** | **str** | CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum, see Hashes and ETags: Best Practices. | [optional] 
**custom_time** | **datetime** | A timestamp in RFC 3339 format specified by the user for an object. | [optional] 
**customer_encryption** | [**ObjectCustomerEncryption**](ObjectCustomerEncryption.md) |  | [optional] 
**etag** | **str** | HTTP 1.1 Entity tag for the object. | [optional] 
**event_based_hold** | **bool** | Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold&#39;s release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is the loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false. | [optional] 
**generation** | **str** | The content generation of this object. Used for object versioning. | [optional] 
**hard_delete_time** | **datetime** | This is the time (in the future) when the soft-deleted object will no longer be restorable. It is equal to the soft delete time plus the current soft delete retention duration of the bucket. | [optional] 
**id** | **str** | The ID of the object, including the bucket name, object name, and generation number. | [optional] 
**kind** | **str** | The kind of item this is. For objects, this is always storage#object. | [optional] [default to 'storage#object']
**kms_key_name** | **str** | Not currently supported. Specifying the parameter causes the request to fail with status code 400 - Bad Request. | [optional] 
**md5_hash** | **str** | MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see Hashes and ETags: Best Practices. | [optional] 
**media_link** | **str** | Media download link. | [optional] 
**metadata** | **Dict[str, str]** | User-provided metadata, in key/value pairs. | [optional] 
**metageneration** | **str** | The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object. | [optional] 
**name** | **str** | The name of the object. Required if not specified by URL parameter. | [optional] 
**owner** | [**ObjectOwner**](ObjectOwner.md) |  | [optional] 
**retention** | [**ObjectRetention**](ObjectRetention.md) |  | [optional] 
**retention_expiration_time** | **datetime** | A server-determined value that specifies the earliest time that the object&#39;s retention period expires. This value is in RFC 3339 format. Note 1: This field is not provided for objects with an active event-based hold, since retention expiration is unknown until the hold is removed. Note 2: This value can be provided even when temporary hold is set (so that the user can reason about policy without having to first unset the temporary hold). | [optional] 
**self_link** | **str** | The link to this object. | [optional] 
**size** | **str** | Content-Length of the data in bytes. | [optional] 
**soft_delete_time** | **datetime** | The time at which the object became soft-deleted in RFC 3339 format. | [optional] 
**storage_class** | **str** | Storage class of the object. | [optional] 
**temporary_hold** | **bool** | Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites. A common use case of this flag is regulatory investigations where objects need to be retained while the investigation is ongoing. Note that unlike event-based hold, temporary hold does not impact retention expiration time of an object. | [optional] 
**time_created** | **datetime** | The creation time of the object in RFC 3339 format. | [optional] 
**time_deleted** | **datetime** | The time at which the object became noncurrent in RFC 3339 format. Will be returned if and only if this version of the object has been deleted. | [optional] 
**time_storage_class_updated** | **datetime** | The time at which the object&#39;s storage class was last changed. When the object is initially created, it will be set to timeCreated. | [optional] 
**updated** | **datetime** | The modification time of the object metadata in RFC 3339 format. Set initially to object creation time and then updated whenever any metadata of the object changes. This includes changes made by a requester, such as modifying custom metadata, as well as changes made by Cloud Storage on behalf of a requester, such as changing the storage class based on an Object Lifecycle Configuration. | [optional] 

## Example

```python
from openapi_client.models.object import Object

# TODO update the JSON string below
json = "{}"
# create an instance of Object from a JSON string
object_instance = Object.from_json(json)
# print the JSON string representation of the object
print(Object.to_json())

# convert the object into a dict
object_dict = object_instance.to_dict()
# create an instance of Object from a dict
object_from_dict = Object.from_dict(object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


