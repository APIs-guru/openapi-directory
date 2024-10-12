# Object

An object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acl** | [**List[ObjectAccessControl]**](ObjectAccessControl.md) | Access controls on the object. | [optional] 
**bucket** | **str** | The bucket containing this object. | [optional] 
**cache_control** | **str** | Cache-Control directive for the object data. | [optional] 
**component_count** | **int** | Number of underlying components that make up this object. Components are accumulated by compose operations and are limited to a count of 32. | [optional] 
**content_disposition** | **str** | Content-Disposition of the object data. | [optional] 
**content_encoding** | **str** | Content-Encoding of the object data. | [optional] 
**content_language** | **str** | Content-Language of the object data. | [optional] 
**content_type** | **str** | Content-Type of the object data. | [optional] 
**crc32c** | **str** | CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64. | [optional] 
**etag** | **str** | HTTP 1.1 Entity tag for the object. | [optional] 
**generation** | **str** | The content generation of this object. Used for object versioning. | [optional] 
**id** | **str** | The ID of the object. | [optional] 
**kind** | **str** | The kind of item this is. For objects, this is always storage#object. | [optional] [default to 'storage#object']
**md5_hash** | **str** | MD5 hash of the data; encoded using base64. | [optional] 
**media_link** | **str** | Media download link. | [optional] 
**metadata** | **Dict[str, str]** | User-provided metadata, in key/value pairs. | [optional] 
**metageneration** | **str** | The generation of the metadata for this object at this generation. Used for metadata versioning. Has no meaning outside of the context of this generation. | [optional] 
**name** | **str** | The name of this object. Required if not specified by URL parameter. | [optional] 
**owner** | [**ObjectOwner**](ObjectOwner.md) |  | [optional] 
**self_link** | **str** | The link to this object. | [optional] 
**size** | **str** | Content-Length of the data in bytes. | [optional] 
**storage_class** | **str** | Storage class of the object. | [optional] 
**time_deleted** | **datetime** | Deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted. | [optional] 
**updated** | **datetime** | Modification time of the object metadata in RFC 3339 format. | [optional] 

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


