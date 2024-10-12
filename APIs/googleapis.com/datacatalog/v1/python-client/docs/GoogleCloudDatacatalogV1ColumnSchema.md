# GoogleCloudDatacatalogV1ColumnSchema

A column within a schema. Columns can be nested inside other columns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | Required. Name of the column. Must be a UTF-8 string without dots (.). The maximum size is 64 bytes. | [optional] 
**default_value** | **str** | Optional. Default value for the column. | [optional] 
**description** | **str** | Optional. Description of the column. Default value is an empty string. The description must be a UTF-8 string with the maximum size of 2000 bytes. | [optional] 
**gc_rule** | **str** | Optional. Garbage collection policy for the column or column family. Applies to systems like Cloud Bigtable. | [optional] 
**highest_indexing_type** | **str** | Optional. Most important inclusion of this column. | [optional] 
**looker_column_spec** | [**GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec**](GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec.md) |  | [optional] 
**mode** | **str** | Optional. A column&#39;s mode indicates whether values in this column are required, nullable, or repeated. Only &#x60;NULLABLE&#x60;, &#x60;REQUIRED&#x60;, and &#x60;REPEATED&#x60; values are supported. Default mode is &#x60;NULLABLE&#x60;. | [optional] 
**ordinal_position** | **int** | Optional. Ordinal position | [optional] 
**range_element_type** | [**GoogleCloudDatacatalogV1ColumnSchemaFieldElementType**](GoogleCloudDatacatalogV1ColumnSchemaFieldElementType.md) |  | [optional] 
**subcolumns** | [**List[GoogleCloudDatacatalogV1ColumnSchema]**](GoogleCloudDatacatalogV1ColumnSchema.md) | Optional. Schema of sub-columns. A column can have zero or more sub-columns. | [optional] 
**type** | **str** | Required. Type of the column. Must be a UTF-8 string with the maximum size of 128 bytes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_column_schema import GoogleCloudDatacatalogV1ColumnSchema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ColumnSchema from a JSON string
google_cloud_datacatalog_v1_column_schema_instance = GoogleCloudDatacatalogV1ColumnSchema.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ColumnSchema.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_column_schema_dict = google_cloud_datacatalog_v1_column_schema_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ColumnSchema from a dict
google_cloud_datacatalog_v1_column_schema_from_dict = GoogleCloudDatacatalogV1ColumnSchema.from_dict(google_cloud_datacatalog_v1_column_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


