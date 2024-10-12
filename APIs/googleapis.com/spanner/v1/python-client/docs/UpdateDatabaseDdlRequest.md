# UpdateDatabaseDdlRequest

Enqueues the given DDL statements to be applied, in order but not necessarily all at once, to the database schema at some point (or points) in the future. The server checks that the statements are executable (syntactically valid, name tables that exist, etc.) before enqueueing them, but they may still fail upon later execution (e.g., if a statement from another batch of statements is applied first and it conflicts in some way, or if there is some data-related problem like a `NULL` value in a column to which `NOT NULL` would be added). If a statement fails, all subsequent statements in the batch are automatically cancelled. Each batch of statements is assigned a name which can be used with the Operations API to monitor progress. See the operation_id field for more details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_id** | **str** | If empty, the new update request is assigned an automatically-generated operation ID. Otherwise, &#x60;operation_id&#x60; is used to construct the name of the resulting Operation. Specifying an explicit operation ID simplifies determining whether the statements were executed in the event that the UpdateDatabaseDdl call is replayed, or the return value is otherwise lost: the database and &#x60;operation_id&#x60; fields can be combined to form the name of the resulting longrunning.Operation: &#x60;/operations/&#x60;. &#x60;operation_id&#x60; should be unique within the database, and must be a valid identifier: &#x60;a-z*&#x60;. Note that automatically-generated operation IDs always begin with an underscore. If the named operation already exists, UpdateDatabaseDdl returns &#x60;ALREADY_EXISTS&#x60;. | [optional] 
**proto_descriptors** | **bytearray** | Optional. Proto descriptors used by CREATE/ALTER PROTO BUNDLE statements. Contains a protobuf-serialized [google.protobuf.FileDescriptorSet](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto). To generate it, [install](https://grpc.io/docs/protoc-installation/) and run &#x60;protoc&#x60; with --include_imports and --descriptor_set_out. For example, to generate for moon/shot/app.proto, run &#x60;&#x60;&#x60; $protoc --proto_path&#x3D;/app_path --proto_path&#x3D;/lib_path \\ --include_imports \\ --descriptor_set_out&#x3D;descriptors.data \\ moon/shot/app.proto &#x60;&#x60;&#x60; For more details, see protobuffer [self description](https://developers.google.com/protocol-buffers/docs/techniques#self-description). | [optional] 
**statements** | **List[str]** | Required. DDL statements to be applied to the database. | [optional] 

## Example

```python
from openapi_client.models.update_database_ddl_request import UpdateDatabaseDdlRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDatabaseDdlRequest from a JSON string
update_database_ddl_request_instance = UpdateDatabaseDdlRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDatabaseDdlRequest.to_json())

# convert the object into a dict
update_database_ddl_request_dict = update_database_ddl_request_instance.to_dict()
# create an instance of UpdateDatabaseDdlRequest from a dict
update_database_ddl_request_from_dict = UpdateDatabaseDdlRequest.from_dict(update_database_ddl_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


