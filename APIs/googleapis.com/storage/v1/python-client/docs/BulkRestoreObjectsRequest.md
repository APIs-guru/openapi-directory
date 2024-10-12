# BulkRestoreObjectsRequest

A bulk restore objects request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_overwrite** | **bool** | If false (default), the restore will not overwrite live objects with the same name at the destination. This means some deleted objects may be skipped. If true, live objects will be overwritten resulting in a noncurrent object (if versioning is enabled). If versioning is not enabled, overwriting the object will result in a soft-deleted object. In either case, if a noncurrent object already exists with the same name, a live version can be written without issue. | [optional] 
**copy_source_acl** | **bool** | If true, copies the source object&#39;s ACL; otherwise, uses the bucket&#39;s default object ACL. The default is false. | [optional] 
**match_globs** | **List[str]** | Restores only the objects matching any of the specified glob(s). If this parameter is not specified, all objects will be restored within the specified time range. | [optional] 
**soft_deleted_after_time** | **datetime** | Restores only the objects that were soft-deleted after this time. | [optional] 
**soft_deleted_before_time** | **datetime** | Restores only the objects that were soft-deleted before this time. | [optional] 

## Example

```python
from openapi_client.models.bulk_restore_objects_request import BulkRestoreObjectsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkRestoreObjectsRequest from a JSON string
bulk_restore_objects_request_instance = BulkRestoreObjectsRequest.from_json(json)
# print the JSON string representation of the object
print(BulkRestoreObjectsRequest.to_json())

# convert the object into a dict
bulk_restore_objects_request_dict = bulk_restore_objects_request_instance.to_dict()
# create an instance of BulkRestoreObjectsRequest from a dict
bulk_restore_objects_request_from_dict = BulkRestoreObjectsRequest.from_dict(bulk_restore_objects_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


