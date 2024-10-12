# GetDatabaseDdlResponse

The response for GetDatabaseDdl.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proto_descriptors** | **bytearray** | Proto descriptors stored in the database. Contains a protobuf-serialized [google.protobuf.FileDescriptorSet](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.proto). For more details, see protobuffer [self description](https://developers.google.com/protocol-buffers/docs/techniques#self-description). | [optional] 
**statements** | **List[str]** | A list of formatted DDL statements defining the schema of the database specified in the request. | [optional] 

## Example

```python
from openapi_client.models.get_database_ddl_response import GetDatabaseDdlResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetDatabaseDdlResponse from a JSON string
get_database_ddl_response_instance = GetDatabaseDdlResponse.from_json(json)
# print the JSON string representation of the object
print(GetDatabaseDdlResponse.to_json())

# convert the object into a dict
get_database_ddl_response_dict = get_database_ddl_response_instance.to_dict()
# create an instance of GetDatabaseDdlResponse from a dict
get_database_ddl_response_from_dict = GetDatabaseDdlResponse.from_dict(get_database_ddl_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


