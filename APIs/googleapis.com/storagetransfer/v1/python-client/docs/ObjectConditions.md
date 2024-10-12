# ObjectConditions

Conditions that determine which objects are transferred. Applies only to Cloud Data Sources such as S3, Azure, and Cloud Storage. The \"last modification time\" refers to the time of the last change to the object's content or metadata — specifically, this is the `updated` property of Cloud Storage objects, the `LastModified` field of S3 objects, and the `Last-Modified` header of Azure blobs. Transfers with a PosixFilesystem source or destination don't support `ObjectConditions`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_prefixes** | **List[str]** | If you specify &#x60;exclude_prefixes&#x60;, Storage Transfer Service uses the items in the &#x60;exclude_prefixes&#x60; array to determine which objects to exclude from a transfer. Objects must not start with one of the matching &#x60;exclude_prefixes&#x60; for inclusion in a transfer. The following are requirements of &#x60;exclude_prefixes&#x60;: * Each exclude-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported. * Each exclude-prefix must omit the leading slash. For example, to exclude the object &#x60;s3://my-aws-bucket/logs/y&#x3D;2015/requests.gz&#x60;, specify the exclude-prefix as &#x60;logs/y&#x3D;2015/requests.gz&#x60;. * None of the exclude-prefix values can be empty, if specified. * Each exclude-prefix must exclude a distinct portion of the object namespace. No exclude-prefix may be a prefix of another exclude-prefix. * If include_prefixes is specified, then each exclude-prefix must start with the value of a path explicitly included by &#x60;include_prefixes&#x60;. The max size of &#x60;exclude_prefixes&#x60; is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers). | [optional] 
**include_prefixes** | **List[str]** | If you specify &#x60;include_prefixes&#x60;, Storage Transfer Service uses the items in the &#x60;include_prefixes&#x60; array to determine which objects to include in a transfer. Objects must start with one of the matching &#x60;include_prefixes&#x60; for inclusion in the transfer. If exclude_prefixes is specified, objects must not start with any of the &#x60;exclude_prefixes&#x60; specified for inclusion in the transfer. The following are requirements of &#x60;include_prefixes&#x60;: * Each include-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported. * Each include-prefix must omit the leading slash. For example, to include the object &#x60;s3://my-aws-bucket/logs/y&#x3D;2015/requests.gz&#x60;, specify the include-prefix as &#x60;logs/y&#x3D;2015/requests.gz&#x60;. * None of the include-prefix values can be empty, if specified. * Each include-prefix must include a distinct portion of the object namespace. No include-prefix may be a prefix of another include-prefix. The max size of &#x60;include_prefixes&#x60; is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers). | [optional] 
**last_modified_before** | **str** | If specified, only objects with a \&quot;last modification time\&quot; before this timestamp and objects that don&#39;t have a \&quot;last modification time\&quot; are transferred. | [optional] 
**last_modified_since** | **str** | If specified, only objects with a \&quot;last modification time\&quot; on or after this timestamp and objects that don&#39;t have a \&quot;last modification time\&quot; are transferred. The &#x60;last_modified_since&#x60; and &#x60;last_modified_before&#x60; fields can be used together for chunked data processing. For example, consider a script that processes each day&#39;s worth of data at a time. For that you&#39;d set each of the fields as follows: * &#x60;last_modified_since&#x60; to the start of the day * &#x60;last_modified_before&#x60; to the end of the day | [optional] 
**max_time_elapsed_since_last_modification** | **str** | Ensures that objects are not transferred if a specific maximum time has elapsed since the \&quot;last modification time\&quot;. When a TransferOperation begins, objects with a \&quot;last modification time\&quot; are transferred only if the elapsed time between the start_time of the &#x60;TransferOperation&#x60;and the \&quot;last modification time\&quot; of the object is less than the value of max_time_elapsed_since_last_modification&#x60;. Objects that do not have a \&quot;last modification time\&quot; are also transferred. | [optional] 
**min_time_elapsed_since_last_modification** | **str** | Ensures that objects are not transferred until a specific minimum time has elapsed after the \&quot;last modification time\&quot;. When a TransferOperation begins, objects with a \&quot;last modification time\&quot; are transferred only if the elapsed time between the start_time of the &#x60;TransferOperation&#x60; and the \&quot;last modification time\&quot; of the object is equal to or greater than the value of min_time_elapsed_since_last_modification&#x60;. Objects that do not have a \&quot;last modification time\&quot; are also transferred. | [optional] 

## Example

```python
from openapi_client.models.object_conditions import ObjectConditions

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectConditions from a JSON string
object_conditions_instance = ObjectConditions.from_json(json)
# print the JSON string representation of the object
print(ObjectConditions.to_json())

# convert the object into a dict
object_conditions_dict = object_conditions_instance.to_dict()
# create an instance of ObjectConditions from a dict
object_conditions_from_dict = ObjectConditions.from_dict(object_conditions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


