# GoogleCloudDatacatalogV1PhysicalSchema

Native schema used by a resource represented as an entry. Used by query engines for deserializing and parsing source data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avro** | [**GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema**](GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema.md) |  | [optional] 
**csv** | **object** | Marks a CSV-encoded data source. | [optional] 
**orc** | **object** | Marks an ORC-encoded data source. | [optional] 
**parquet** | **object** | Marks a Parquet-encoded data source. | [optional] 
**protobuf** | [**GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema**](GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema.md) |  | [optional] 
**thrift** | [**GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema**](GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_physical_schema import GoogleCloudDatacatalogV1PhysicalSchema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1PhysicalSchema from a JSON string
google_cloud_datacatalog_v1_physical_schema_instance = GoogleCloudDatacatalogV1PhysicalSchema.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1PhysicalSchema.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_physical_schema_dict = google_cloud_datacatalog_v1_physical_schema_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1PhysicalSchema from a dict
google_cloud_datacatalog_v1_physical_schema_from_dict = GoogleCloudDatacatalogV1PhysicalSchema.from_dict(google_cloud_datacatalog_v1_physical_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


