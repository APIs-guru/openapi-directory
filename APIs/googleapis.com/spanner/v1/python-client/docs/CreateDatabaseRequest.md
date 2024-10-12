# CreateDatabaseRequest

The request for CreateDatabase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_statement** | **str** | Required. A &#x60;CREATE DATABASE&#x60; statement, which specifies the ID of the new database. The database ID must conform to the regular expression &#x60;a-z*[a-z0-9]&#x60; and be between 2 and 30 characters in length. If the database ID is a reserved word or if it contains a hyphen, the database ID must be enclosed in backticks (&#x60;&#x60; &#x60; &#x60;&#x60;). | [optional] 
**database_dialect** | **str** | Optional. The dialect of the Cloud Spanner Database. | [optional] 
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**extra_statements** | **List[str]** | Optional. A list of DDL statements to run inside the newly created database. Statements can create tables, indexes, etc. These statements execute atomically with the creation of the database: if there is an error in any statement, the database is not created. | [optional] 
**proto_descriptors** | **bytearray** | Optional. Proto descriptors used by CREATE/ALTER PROTO BUNDLE statements in &#39;extra_statements&#39; above. Contains a protobuf-serialized [google.protobuf.FileDescriptorSet](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto). To generate it, [install](https://grpc.io/docs/protoc-installation/) and run &#x60;protoc&#x60; with --include_imports and --descriptor_set_out. For example, to generate for moon/shot/app.proto, run &#x60;&#x60;&#x60; $protoc --proto_path&#x3D;/app_path --proto_path&#x3D;/lib_path \\ --include_imports \\ --descriptor_set_out&#x3D;descriptors.data \\ moon/shot/app.proto &#x60;&#x60;&#x60; For more details, see protobuffer [self description](https://developers.google.com/protocol-buffers/docs/techniques#self-description). | [optional] 

## Example

```python
from openapi_client.models.create_database_request import CreateDatabaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDatabaseRequest from a JSON string
create_database_request_instance = CreateDatabaseRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDatabaseRequest.to_json())

# convert the object into a dict
create_database_request_dict = create_database_request_instance.to_dict()
# create an instance of CreateDatabaseRequest from a dict
create_database_request_from_dict = CreateDatabaseRequest.from_dict(create_database_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


